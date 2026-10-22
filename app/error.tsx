"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

export default function Error({
  error,
  reset,
}: {
  error: { message: string };
  reset: () => void;
}) {
  return (
    <main className="z-0 px-5 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 items-center justify-center text-center min-h-full dashed-border px-4 py-8 lg:py-14 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-secondary-800">
          Something went wrong!
        </h1>
        <p className="">{error.message}</p>

        <button
          className="px-4 py-2.5 w-40 bg-primary-800 text-secondary-800 border-2 border-secondary-800 rounded-md font-medium hover:bg-primary-400 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
          onClick={() => reset()}>
          <HiRefresh /> Try again
        </button>

        <Link
          href="/"
          className="px-4 py-2.5 w-40 bg-primary-300 text-secondary-800 border-2 border-secondary-800 rounded-md font-medium hover:bg-primary-400 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
          onClick={() => reset()}>
          <FaHome /> Back home
        </Link>
      </div>
    </main>
  );
}
