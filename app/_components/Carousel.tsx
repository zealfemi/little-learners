"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Carousel({ slides }: { slides: React.ReactNode[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out mb-6"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
        }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full md:w-1/3 shrink-0 px-2 md:px-10">
            {slide}
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <div
        className={`${slides.length === 3 && "md:hidden"} flex gap-6 items-center justify-end md:px-10`}>
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 border-2 border-secondary-800 bg-primary-300 hover:bg-primary-400 cursor-pointer w-10 h-10 rounded-md grid place-items-center transition-colors z-10">
          <FaChevronLeft className="text-secondary-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 border-2 border-secondary-800 bg-primary-300 hover:bg-primary-400 cursor-pointer w-10 h-10 rounded-md grid place-items-center transition-colors z-10">
          <FaChevronRight className="text-secondary-800" />
        </button>
      </div>
    </div>
  );
}
