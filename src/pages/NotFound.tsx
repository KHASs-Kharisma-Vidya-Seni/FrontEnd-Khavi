import { Link, useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-500">
          {(error as { status: string }).status == "404" ? "404 Page Not Found" : ""}
        </h1>
        <p className="text-lg text-gray-700">
          Something went wrong. Please try again later. <br />
          Back to the{" "}
          <Link to="/" className="text-red-500 underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
