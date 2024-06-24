import useSWR, { mutate } from "swr";
import axios from "axios";
import { useEffect } from "react";
import { BASE_URL_API } from "@/utility/base-url";

export interface User {
  uid: number;
  email: string;
  username: string;
  created_at: string;
  photo_url: string;
}

interface LoginInputs {
  email: string;
  password: string;
}

// let cachedData: Record<string, any> = {};

// const fetcher = async (url: string) => {
//   try {
//     if (cachedData[url]) {
//       return cachedData[url];
//     } else {
//       const res = await axios.get(url, { withCredentials: true });
//       cachedData[url] = res.data;
//       return res.data;
//     }
//   } catch (error) {
//     throw error;
//   }
// };

let isUnauthorized = false;

const fetcher = async (url: string) => {
  try {
    if (isUnauthorized) {
      // Jika sudah terjadi kesalahan 401 sebelumnya, langsung kembalikan null tanpa melakukan permintaan baru.
      return null;
    }

    const res = await axios.get(url, { withCredentials: true });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // Jika terjadi kesalahan 401 (Unauthorized), set isUnauthorized menjadi true.
      console.error("Unauthorized access detected. Request stopped.");
      isUnauthorized = true;
    }
    throw error;
  }
};

export const useAuth = () => {
  const {
    data: currentUser,
    error,
    mutate: mutateUser,
  } = useSWR<User | null>(`${BASE_URL_API}/current-user`, fetcher, {
    // revalidateOnMount: true, // Lakukan revalidasi saat komponen dimount
    // revalidateOnFocus: true, // Lakukan revalidasi saat komponen mendapat fokus
    // errorRetryCount: 3, // Jumlah percobaan ulang jika terjadi kesalahan
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching current user:", error);
      mutate(null, false);
    }
  }, [error, mutateUser]);

  const login = async (inputs: LoginInputs) => {
    const res = await axios.post(`${BASE_URL_API}/api/auth/login`, inputs, { withCredentials: true });
    // localStorage.setItem('user', JSON.stringify(res.data));
    mutateUser(res.data, false);

    isUnauthorized = false;

    return res;
  };

  const logout = async () => {
    try {
      await axios.get(`${BASE_URL_API}/api/auth/logout`, { withCredentials: true });
      mutate(`${BASE_URL_API}/current-user`, false);
      isUnauthorized = true;
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  return {
    currentUser,
    login,
    logout,
  };
};
