"use client";

import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavMobile from "./NavMobile";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex justify-between items-center border-2 border-secondary-800 rounded-lg h-15 gap-1 relative text-secondary-700">
      <div className="h-full bg-primary-800 rounded-tl-md rounded-bl-md border-r-2 border-r-secondary-800 grid place-items-center px-5 lg:px-6">
        <Image
          src={logo}
          alt="site logo"
          className="w-35 md:w-38 lg:w-45 object-cover"
        />
      </div>

      {/* LAPTOP AND PC NAV */}
      <nav className="hidden md:flex items-center text-center h-full">
        <Link
          href="/"
          className={`${pathName === "/" && "bg-primary-400"} border-l-2 border-l-secondary-800 px-5 lg:px-6 grid place-items-center h-full hover:bg-primary-300`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathName === "/about" && "bg-primary-400"} border-l-2 border-l-secondary-800 px-5 lg:px-6 grid place-items-center h-full hover:bg-primary-300`}>
          About
        </Link>
        <Link
          href="/academics"
          className={`${pathName === "/academics" && "bg-primary-400"} border-l-2 border-l-secondary-800 px-5 lg:px-6 grid place-items-center h-full hover:bg-primary-300`}>
          Academics
        </Link>
        <Link
          href="/admission"
          className={`${pathName === "/admission" && "bg-primary-400"} border-l-2 border-l-secondary-800 px-5 lg:px-6 grid place-items-center h-full hover:bg-primary-300`}>
          Admission
        </Link>
        <Link
          href="/student-life"
          className={`${pathName === "/student-life" && "bg-primary-400"} border-l-2 border-l-secondary-800 px-5 lg:px-6 grid place-items-center h-full hover:bg-primary-300`}>
          Student Life
        </Link>
        <Link
          href="/contact"
          className="bg-primary-800 border-l-2 border-l-secondary-800 px-5 lg:px-6 grid place-items-center h-full rounded-tr-md rounded-br-md hover:bg-primary-300">
          Contact
        </Link>
      </nav>

      <NavMobile />
    </header>
  );
}
