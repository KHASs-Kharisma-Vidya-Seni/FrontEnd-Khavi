import useSWR from 'swr';
import axios from 'axios';

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

const fetcher = async (url: string) => {
  const res = await axios.get(url, { withCredentials: true });
  return res.data;
};

export const useAuth = () => {
  const { data: currentUser, mutate } = useSWR<User | null>('http://localhost:3000/current-user', fetcher);

  const login = async (inputs: LoginInputs) => {
    const res = await axios.post('http://localhost:3000/api/auth/login', inputs, { withCredentials: true });
    // localStorage.setItem('user', JSON.stringify(res.data));
    mutate(res.data, false);

    return res
  };


  return {
    currentUser,
    login,
  };
};


