"use client";

import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type carouselContextType = {
  currentIndex: number;
  itemsPerPage: number;
  totalSlides: number;
  setTotalSlides: (count: number) => void;
  prevSlide: () => void;
  nextSlide: () => void;
};

type slidesType = {
  slides: React.ReactNode[];
};

const CarouselContext = createContext<carouselContextType | null>(null);

function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error("Carousel components must be used inside <Carousel>");
  return context;
}

export default function Carousel({ children }: PropsWithChildren) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 4 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, totalSlides - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        itemsPerPage,
        totalSlides,
        setTotalSlides,
        prevSlide,
        nextSlide,
      }}>
      <div>{children}</div>
    </CarouselContext.Provider>
  );
}

function Slides({ slides }: PropsWithChildren<slidesType>) {
  const { currentIndex, itemsPerPage, setTotalSlides } = useCarouselContext();

  useEffect(() => {
    setTotalSlides(slides.length);
  }, [slides.length, setTotalSlides]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out mb-6"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
        }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full md:w-2/4 lg:w-1/3 shrink-0 px-4">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideButtons({ children }: PropsWithChildren) {
  return (
    <div className="relative flex items-center justify-end gap-6 md:px-10">
      {children}
    </div>
  );
}

function LeftButton({ position }: { position: string }) {
  const { prevSlide, totalSlides } = useCarouselContext();
  return (
    <button
      onClick={prevSlide}
      className={`${totalSlides <= 3 ? "md:hidden" : ""} ${position === "side" ? "absolute left-0 top-1/2 -translate-y-1/2" : ""} border-2 border-secondary-800 bg-primary-300 hover:bg-primary-400 cursor-pointer w-10 h-10 rounded-md grid place-items-center transition-colors z-10`}>
      <FaChevronLeft className="text-secondary-800" />
    </button>
  );
}

function RightButton({ position }: { position: string }) {
  const { nextSlide, totalSlides } = useCarouselContext();
  return (
    <button
      onClick={nextSlide}
      className={`${totalSlides <= 3 ? "md:hidden" : ""} ${position === "side" ? "absolute right-0 top-1/2 -translate-y-1/2" : ""} border-2 border-secondary-800 bg-primary-300 hover:bg-primary-400 cursor-pointer w-10 h-10 rounded-md grid place-items-center transition-colors z-10`}>
      <FaChevronRight className="text-secondary-800" />
    </button>
  );
}

Carousel.Slides = Slides;
Carousel.Buttons = SlideButtons;
Carousel.LeftButton = LeftButton;
Carousel.RightButton = RightButton;
