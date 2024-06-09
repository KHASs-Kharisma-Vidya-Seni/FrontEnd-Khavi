import { makeRequest } from "./axios";

export const fetcher = async (url: string) => {
  const res = await makeRequest.get(url);
  return res.data;
};
