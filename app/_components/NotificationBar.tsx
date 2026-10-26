import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function NotificationBar() {
  return (
    <div className="mt-4 -mb-3 px-2.5 md:px-11 overflow-hidden">
      <Link
        href="/admissions"
        className="bg-primary-400 border-2 border-secondary-800 px-3 py-2 rounded-sm flex items-center justify-center gap-2 text-secondary-800 relative text-sm font-medium overflow-hidden">
        <p>Admission is open</p>
        <HiArrowRight />

        <span className="absolute w-12.5 h-12.5 top-0 -mt-6.25 -ml-6.25 left-1 lg:left-80 z-1">
          <Image
            src="/images/abstract/design-1.png"
            alt="not. bar image"
            fill
            className=""
          />
        </span>

        <span className="absolute w-12.5 h-12.5 lg:w-8.75 lg:h-8.75 bottom-0 -mb-6.25 -mr-6.25 right-0 lg:right-80 z-1">
          <Image
            src="/images/abstract/design-1.png"
            alt="not. bar image"
            fill
            className=""
          />
        </span>

        <span className="absolute left-0 w-12 h-12 lg:w-45 lg:h-45">
          <Image
            src="/images/abstract/design-2.png"
            alt="not. bar image"
            fill
            className=""
          />
        </span>

        <span className="absolute right-0 w-12 h-12 lg:w-45 lg:h-45 rotate-180">
          <Image
            src="/images/abstract/design-2.png"
            alt="not. bar image"
            fill
            className=""
          />
        </span>
      </Link>
    </div>
  );
}
