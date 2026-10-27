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
  large: number;
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

type carouselType = {
  small: number;
  medium: number;
  large: number;
};

const CarouselContext = createContext<carouselContextType | null>(null);

function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error("Carousel components must be used inside <Carousel>");
  return context;
}

export default function Carousel({
  small,
  medium,
  large,
  children,
}: PropsWithChildren<carouselType>) {
  const [rawCurrentIndex, setRawCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(large);
      } else if (width >= 768) {
        setItemsPerPage(medium);
      } else {
        setItemsPerPage(small);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [small, medium, large]);

  const maxIndex = Math.max(0, totalSlides - itemsPerPage);

  const currentIndex = Math.min(rawCurrentIndex, maxIndex);

  const prevSlide = () => {
    setRawCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setRawCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <CarouselContext.Provider
      value={{
        large,
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

function Slides({ slides }: slidesType) {
  const { currentIndex, itemsPerPage, setTotalSlides, large } =
    useCarouselContext();

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
          <div
            key={index}
            className={`w-full md:w-1/2 ${large === 3 ? "lg:w-1/3" : "lg:w-1/4"} shrink-0 px-4`}>
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

function LeftButton({ position }: { position?: string }) {
  const { prevSlide, totalSlides, itemsPerPage } = useCarouselContext();
  return (
    <button
      type="button"
      onClick={prevSlide}
      className={`${totalSlides <= itemsPerPage ? "hidden" : ""} ${
        position === "side" ? "absolute left-0 top-1/2 -translate-y-1/2" : ""
      } border-2 border-secondary-800 bg-primary-300 hover:bg-primary-400 cursor-pointer w-10 h-10 rounded-md grid place-items-center transition-colors z-10`}>
      <FaChevronLeft className="text-secondary-800" />
    </button>
  );
}

function RightButton({ position }: { position?: string }) {
  const { nextSlide, totalSlides, itemsPerPage } = useCarouselContext();
  return (
    <button
      type="button"
      onClick={nextSlide}
      className={`${totalSlides <= itemsPerPage ? "hidden" : ""} ${
        position === "side" ? "absolute right-0 top-1/2 -translate-y-1/2" : ""
      } border-2 border-secondary-800 bg-primary-300 hover:bg-primary-400 cursor-pointer w-10 h-10 rounded-md grid place-items-center transition-colors z-10`}>
      <FaChevronRight className="text-secondary-800" />
    </button>
  );
}

Carousel.Slides = Slides;
Carousel.Buttons = SlideButtons;
Carousel.LeftButton = LeftButton;
Carousel.RightButton = RightButton;
