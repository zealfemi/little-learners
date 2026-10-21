import logo from "@/public/images/logo.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="flex flex-col md:grid grid-cols-3 gap-10 card">
      <div className="flex flex-col gap-10">
        <div className="w-full md:col-span-1 flex flex-col items-center md:items-start gap-3">
          <div>
            <Image
              src={logo}
              alt="site logo"
              className="w-35 md:w-38 lg:w-45 object-cover"
            />
          </div>
          <p className="text-center md:text-left">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
        </div>

        <div className="self-start flex flex-col gap-3 text-secondary-800">
          <p className="flex gap-2 items-center">
            <span className="border-2 rounded-sm w-6 h-6 grid place-items-center bg-primary-300">
              <HiMail size={13} />
            </span>
            example@gmail.com
          </p>
          <p className="flex gap-2 items-center">
            <span className="border-2 rounded-sm w-6 h-6 grid place-items-center bg-primary-300">
              <HiPhone size={13} />
            </span>
            +234 123 4567 890
          </p>
          <p className="flex gap-2 items-center">
            <span className="border-2 rounded-sm w-6 h-6 grid place-items-center bg-primary-300">
              <HiLocationMarker size={13} />
            </span>
            Nigeria
          </p>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-7.5">
        <div className="md:col-span-2 grid md:grid-cols-2 gap-7.5">
          <div>
            <p className="text-secondary-800 mb-2">Home</p>
            <ul className="flex flex-col gap-2">
              <li>Features</li>
              <li>Out Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <p className="text-secondary-800 mb-2">About Us</p>
            <ul className="flex flex-col gap-2">
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Awards and Recognition</li>
              <li>History</li>
              <li>Teachers</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 grid md:grid-cols-2 gap-7.5">
          <div>
            <p className="text-secondary-800 mb-2">Academics</p>
            <ul className="flex flex-col gap-2">
              <li>Special Features</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="-mt-15 md:mt-0">
            <p className="text-secondary-800 mb-2">Contact Us</p>
            <ul className="flex flex-col gap-2">
              <li>Information</li>
              <li>Map & Direction</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-3 border-t-2 border-b-2 border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-5 py-5">
        <div className="flex items-center text-center gap-2 text-secondary-800">
          <p>Terms of Service</p>
          <span>|</span>
          <p>Privacy Policy</p>
          <span>|</span>
          <p>Cookie Policy</p>
        </div>

        <div className="flex gap-2">
          <span className="border-2 rounded-sm w-8 h-8 grid place-items-center bg-primary-500 text-secondary-800">
            <FaFacebook size={15} />
          </span>
          <span className="border-2 rounded-sm w-8 h-8 grid place-items-center bg-primary-500 text-secondary-800">
            <FaXTwitter size={15} />
          </span>
          <span className="border-2 rounded-sm w-8 h-8 grid place-items-center bg-primary-500 text-secondary-800">
            <FaLinkedin size={15} />
          </span>
        </div>
      </div>

      <p className="text-center col-span-3">
        Copyright © [2026] Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
}
