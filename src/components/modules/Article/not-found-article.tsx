export default function NotFoundArticle() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-4 text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Article Not Found</h2>
        <p className="mt-4 text-gray-600">The article you are looking for could not be found.</p>
        <a
          href="/artikel"
          className="mt-8 inline-block rounded bg-laser-500 px-4 py-2 text-white transition duration-300 hover:bg-laser-600"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
