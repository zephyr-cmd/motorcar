"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const minSwipeDistance = 50;

  // Combine touch and mouse handlers into one
  const handleStart = (clientX) => {
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const distanceMoved = clientX - startX;
    setTranslateX(distanceMoved);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (Math.abs(translateX) > minSwipeDistance) {
      if (translateX > 0) {
        navigateSlide("prev");
      } else {
        navigateSlide("next");
      }
    }
    setTranslateX(0);
  };

  // Generalized navigation logic
  const navigateSlide = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prevSlide) =>
      direction === "next"
        ? (prevSlide + 1) % slides.length
        : prevSlide === 0
        ? slides.length - 1
        : prevSlide - 1
    );
    setTimeout(() => setIsTransitioning(false), 500); // Match CSS transition time
  };

  return (
    <div className="flex flex-col container mx-auto items-center justify-center gap-1 p-10">
      {/* Navigation Button Carousel */}
      <div className="hidden sm:flex top-4 left-4 justify-between items-center w-full px-4">
        <div className="text-white text-lg">
          {currentSlide + 1} of {slides.length}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-6">
          <button
            onClick={() => navigateSlide("prev")}
            className="text-white p-4 rounded-full border-2 hover:border-white border-gray-700 transition-all duration-300"
          >
            <p className="font-bold text-2xl sm:text-4xl">&larr;</p>
          </button>
          <button
            onClick={() => navigateSlide("next")}
            className="text-white p-4 rounded-full border-2 hover:border-white border-gray-700 transition-all duration-300"
          >
            <p className="font-bold text-2xl sm:text-4xl">&rarr;</p>
          </button>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="relative flex flex-col sm:flex-row items-center w-full min-h-fit overflow-hidden text-white"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          className="flex w-full min-h-fit transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(calc(-${
              currentSlide * 100
            }% + ${translateX}px))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center min-w-full"
            >
              {/* Slide Content */}
              <div className="relative w-full h-fit sm:h-fit flex flex-col-reverse md:flex-row items-center justify-around">
                <div className="w-full h-fit sm:w-1/2 p-8">
                  <h2 className="text-4xl font-bold text-gray-300 mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-200 text-lg mb-6">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>

                {/* Slide Image */}
                <div className="w-full max-w-[300px] sm:max-w-[450px] sm:w-1/2 aspect-square relative sm:m-10">
                  <Image
                    src={slide.imageSrc}
                    alt={`Service ${slide.title}`}
                    fill
                    style={{ objectFit: "cover", overflow: "hidden" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Line */}
      <div className="w-full flex justify-center items-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-400"
            } transition-all duration-300`}
            style={{ width: `${100 / slides.length}%` }}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
