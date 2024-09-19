"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// import React, { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="top-4 left-4 flex justify-between items-center w-full px-4">
        {/* Slide Number */}
        <div className="text-white text-lg">
          {currentSlide + 1} of {slides.length}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-6">
          <button
            onClick={handlePrev}
            className="text-white p-4 rounded-full border-2 hover:border-white border-gray-700 transition-all duration-300"
          >
            <p className="text-4xl">&larr;</p>
          </button>
          <button
            onClick={handleNext}
            className="text-white p-4 rounded-full border-2 hover:border-white border-gray-700 transition-all duration-300"
          >
            <p className="text-4xl">&rarr;</p>
          </button>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center w-full min-h-fit space-y-7 md:space-y-0 overflow-hidden text-white">
        {/* Slide Buttons */}

        {/* Carousel Wrapper */}
        <div
          className="flex w-full min-h-fit transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center min-w-full"
            >
              {/* Slide Content */}
              <div className="relative w-full h-[600px] flex flex-col-reverse md:flex-row items-center justify-around">
                <div className="w-1/2 p-8">
                  {/* <p className="text-gray-200 uppercase mb-2">Case Study</p> */}
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
                <div className="w-1/2 aspect-video md:h-1/2 relative">
                  <Image
                    src={slide.imageSrc}
                    alt={`Service ${slide.title}`}
                    fill
                    style={{
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                    // className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Line */}
        <div className="w-full h-1 flex justify-center">
          {/* <div className="relative w-full h-1 flex"> */}
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-400"
              } transition-all duration-300`}
              style={{ width: `${100 / slides.length}%` }}
              onClick={() => setCurrentSlide(index)} // Click handler to navigate to the slide
            ></div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// const CapabilitiesCarousel = ({ services }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = services.length;
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % totalSlides);
//       }, 3000); // Adjust timing as needed
//       return () => clearInterval(interval);
//     }
//   }, [isHovered, totalSlides]);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         // Check if we're at the end of the duplicated slides
//         if (prev === totalSlides * 2 - 1) {
//           return totalSlides; // Jump to the start of the original slides
//         }
//         return prev + 1;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [totalSlides]);

//   const handleTransitionEnd = () => {
//     if (currentSlide === totalSlides * 2 - 1) {
//       // Instantly reset to the first set of slides (without animation)
//       setCurrentSlide(totalSlides);
//     }
//   };

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div>
//       {/* Navigation Buttons */}
//       <div className="bg-green-500">
//         <button
//           className="left-8 transform border border-gray-700 text-black text-5xl hover:text-2xl p-10 hover:p-2 transition-all duration-500  rounded-full"
//           onClick={handlePrevSlide}
//         >
//           &#10094;
//         </button>
//         <button
//           className="right-4 bg-black text-white p-2 rounded-full"
//           onClick={handleNextSlide}
//         >
//           &#10095;
//         </button>
//       </div>
//       <div
//         className="relative container mx-auto p-10 overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div
//           className="flex transition-transform duration-500 ease-in"
//           style={{
//             transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
//             gap: "20px",
//           }}
//           onTransitionEnd={handleTransitionEnd}
//         >
//           {[...services, ...services, ...services].map((service, index) => (
//             <div
//               key={index}
//               className="container relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <Image
//                 src={service.imageSrc}
//                 alt={`Service ${index + 1}`}
//                 height={400}
//                 width={400}
//                 style={{ objectFit: "cover", overflow: "hidden" }}
//                 className="w-full h-48 sm:h-64 lg:h-72"
//               />
//               <div className="p-6 md:p-8">
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-800">
//                   {service.title}
//                 </h2>
//                 <p className="text-sm md:text-base text-gray-600 mb-4">
//                   {service.description}
//                 </p>
//                 {service.example && (
//                   <p className="text-xs md:text-sm italic text-gray-500">
//                     {`Example: ${service.example}`}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Pagination Dots */}
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mb-4 hidden md:flex">
//           {services.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentSlide % totalSlides
//                   ? "bg-white"
//                   : "bg-gray-500"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-4 md:hidden">
//           {services.map((_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full ${
//                 index === currentSlide % totalSlides
//                   ? "bg-white"
//                   : "bg-gray-500"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapabilitiesCarousel;
