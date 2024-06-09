import { BASE_URL_API } from '@/utility';
import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: BASE_URL_API || 'http://localhost:3000/api/',
  withCredentials: true,
});

