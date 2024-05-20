import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const status = (error as { status: string }).status;

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-500">
          {status === "400"
            ? "Something went wrong with your request 😢. Please contact the developer."
            : "Page Not Found"}
        </h1>
        <p className="text-lg text-gray-700">
          {status === "400"
            ? "It looks like something went wrong. Please try again later or contact the developer for assistance."
            : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
          <br />
          Back to the{" "}
          <Link to="/" className="text-red-500 underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
