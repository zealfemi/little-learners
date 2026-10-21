import Image from "next/image";
import error from "@/public/images/404.avif";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative gap-6">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-30 px-4 md:px-12.5 py-5">
        <p className="uppercase font-header font-semibold">
          404 Error. Page not Found
        </p>
        <div className="flex flex-col gap-6 lg:gap-10 max-w-100">
          <h1 className="text-2xl lg:text-3xl font-bold">
            If you’re reading this, something has gone terribly, terribly wrong.
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 w-fit text-secondary-800 border-2 border-secondary-800 rounded-lg px-4 py-1.5 bg-primary-800">
            <FaHome /> Return home
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <Image
          src={error}
          alt="page not found"
          className="object-cover w-full max-w-full"
          unoptimized
          priority
        />
      </div>
    </div>
  );
}
