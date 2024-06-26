interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="rounded-lg bg-red-500 p-4 font-semibold text-white shadow-md">{message}</div>
    </div>
  );
}
