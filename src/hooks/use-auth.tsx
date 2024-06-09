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

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url, { withCredentials: true });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useAuth = () => {
  const { data: currentUser, error, mutate } = useSWR<User | null>('http://localhost:3000/current-user', fetcher);

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

    return res;
  };

  return {
    currentUser,
    login,
  };
};
