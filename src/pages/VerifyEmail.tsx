import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import { BASE_URL_API } from "@/utility/base-url";

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then(res => res.data);

export default function VerifyEmailStatus() {
  const { id } = useParams();
  const history = useNavigate();
  const { data, error } = useSWR(`${BASE_URL_API}/auth/verify/status/${id}`, fetcher);

  React.useEffect(() => {
    if (data?.verified) {
      setTimeout(() => {
        history("/login");
      }, 5000);
    }
  }, [data, history]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="transform rounded-lg bg-white p-6 shadow-lg transition duration-500 hover:scale-105">
          <h1 className="mb-4 animate-pulse text-2xl font-bold text-gray-900">Error</h1>
          <p className="text-gray-700">There was an error verifying your email. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="transform rounded-lg bg-white p-6 shadow-lg transition duration-500 hover:scale-105">
          <h1 className="mb-4 animate-pulse text-2xl font-bold text-gray-900">Loading</h1>
          <p className="text-gray-700">Checking verification status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="transform rounded-lg bg-white p-6 shadow-lg transition duration-500 hover:scale-105">
        <h1 className="mb-4 animate-pulse text-2xl font-bold text-gray-900">Verify Email</h1>
        <p className="text-gray-700">
          We have sent an email to your email address. Please verify your email address to continue.
        </p>
        <p>
          Email Verification Status:{" "}
          {data.verified ? (
            <span className="text-green-500">Verified</span>
          ) : (
            <span className="text-red-500">Not Verified</span>
          )}
        </p>
        {!data.verified && (
          <p className="mt-2">
            We have sent an email to your email address. Please verify your email address to continue. If you do not see
            the email in your inbox, please check your <span className="text-red-500">spam folder</span>.
          </p>
        )}
      </div>
    </div>
  );
}
