import useSWR from 'swr';
import axios from 'axios';
import { useEffect } from 'react';

export interface User {
  id: number;
  email: string;
  username: string;
  created_at: string;
  photoURL: string;
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
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      // Jika terjadi kesalahan 401 (Unauthorized), set isUnauthorized menjadi true.
      console.error('Unauthorized access detected. Request stopped.');
      isUnauthorized = true;
    }
    throw error;
  }
};

export const useAuth = () => {
  const {
    data: currentUser,
    error,
    mutate,
  } = useSWR<User | null>('http://localhost:3000/current-user', fetcher, {
    revalidateOnMount: true, // Lakukan revalidasi saat komponen dimount
    revalidateOnFocus: true, // Lakukan revalidasi saat komponen mendapat fokus
    errorRetryCount: 3, // Jumlah percobaan ulang jika terjadi kesalahan
  });

  useEffect(() => {
    if (error) {
      console.error('Error fetching current user:', error);
      mutate(null, false);
    }
  }, [error, mutate]);

  const login = async (inputs: LoginInputs) => {
    const res = await axios.post('http://localhost:3000/api/auth/login', inputs, { withCredentials: true });
    // localStorage.setItem('user', JSON.stringify(res.data));
    mutate(res.data, false);

    isUnauthorized = false;

    return res;
  };

  const logout = async () => {
    try {
      await axios.get('http://localhost:3000/api/auth/logout', { withCredentials: true });
      mutate(null, false);
      isUnauthorized = true;
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };

  return {
    currentUser,
    login,
    logout
  };
};
