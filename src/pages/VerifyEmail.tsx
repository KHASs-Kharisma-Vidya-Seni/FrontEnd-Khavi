import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then(res => res.data);

export default function VerifyEmailStatus() {
  const { id } = useParams();
  const history = useNavigate();
  const { data, error } = useSWR(`http://localhost:3000/api/auth/verify/status/${id}`, fetcher);

  React.useEffect(() => {
    if (data?.verified) {
      setTimeout(() => {
        history('/login');
      }, 5000);
    }
  }, [data, history]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 animate-pulse">Error</h1>
          <p className="text-gray-700">There was an error verifying your email. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 animate-pulse">Loading</h1>
          <p className="text-gray-700">Checking verification status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 animate-pulse">Verify Email</h1>
        <p className="text-gray-700">
          We have sent an email to your email address. Please verify your email address to continue.
        </p>
        <p>Email Verification Status: {data.verified ? 'Verified' : 'Not Verified'}</p>
      </div>
    </div>
  );
}
