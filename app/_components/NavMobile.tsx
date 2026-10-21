"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

export default function NavMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const pathName = usePathname();

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* MOBILE NAV */}
      <button
        className="md:hidden h-full bg-primary-400 rounded-tr-md rounded-br-md border-l-2 border-l-secondary-800 grid place-items-center px-5 lg:px-6 cursor-pointer hover:bg-primary-300"
        onClick={toggleMenu}>
        {!showMenu ? <HiMenuAlt3 size={20} /> : <HiXMark size={20} />}
      </button>

      <nav
        className={`md:hidden absolute top-15 w-full border-2 border-secondary-800 bg-primary-100 rounded-lg z-5 grid transition-all duration-500 ease-in-out overflow-hidden ${
          showMenu
            ? "grid-rows-[1fr] opacity-100 pointer-events-auto"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}>
        <div className="min-h-0 flex flex-col">
          <Link
            href="/"
            onClick={toggleMenu}
            className={`${pathName === "/" && "bg-primary-400"} border-b-2 border-b-secondary-800 rounded-tl-md rounded-tr-md py-5 grid place-items-center h-full hover:bg-primary-300`}>
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className={`${pathName === "/about" && "bg-primary-400"} border-b-2 border-b-secondary-800 py-5 grid place-items-center h-full hover:bg-primary-300`}>
            About
          </Link>
          <Link
            href="/academics"
            onClick={toggleMenu}
            className={`${pathName === "/academics" && "bg-primary-400"} border-b-2 border-b-secondary-800 py-5 grid place-items-center h-full hover:bg-primary-300`}>
            Academics
          </Link>
          <Link
            href="/admission"
            onClick={toggleMenu}
            className={`${pathName === "/admission" && "bg-primary-400"} border-b-2 border-b-secondary-800 py-5 grid place-items-center h-full hover:bg-primary-300`}>
            Admission
          </Link>
          <Link
            href="/student-life"
            onClick={toggleMenu}
            className={`${pathName === "/student-life" && "bg-primary-400"} border-b-2 border-b-secondary-800 py-5 grid place-items-center h-full hover:bg-primary-300`}>
            Student Life
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-primary-800 rounded-bl-md rounded-br-md py-5 grid place-items-center h-full hover:bg-primary-300">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
