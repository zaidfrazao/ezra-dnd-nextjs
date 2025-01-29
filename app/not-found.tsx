import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white text-gray-700">
      <h1 className="flex text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link href="/dashboard" passHref>
        <button className="px-5 py-2.5 text-base bg-gray-400 text-white border-0 rounded-md cursor-pointer">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}
