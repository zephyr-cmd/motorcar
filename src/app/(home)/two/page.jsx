"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroPage from "@/app/(home)/two/componentsB/HeroPage";
import SolutionPortfolio from "@/app/(home)/two/componentsB/SolutionPortfolio";
import BusinessImpact from "@/app/(home)/two/componentsB/BusinessImpact";
import ProcessTransformation from "@/app/(home)/two/componentsB/ProcessTransformation";
import PartnerSuccessLayout from "@/app/(home)/two/componentsB/PartnerSuccess";

// const compo = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Page Sections */}
//       <HeroPage />
//       <SolutionPortfolio />
//       <BusinessImpact />
//       <ProcessTransformation />
//       <PartnerSuccessLayout />
//     </div>
//   );
// };

// export default compo;

// Mock components - replace these with your actual imports
// const HeroPage = () => (
//   <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
//     <div className="text-center text-white">
//       <h1 className="text-6xl font-bold mb-6">Hero Page</h1>
//       <p className="text-xl">Welcome to our amazing platform</p>
//     </div>
//   </div>
// );

// const SolutionPortfolio = () => (
//   <div className="min-h-screen bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
//     <div className="text-center text-white">
//       <h1 className="text-6xl font-bold mb-6">Solution Portfolio</h1>
//       <p className="text-xl">Discover our comprehensive solutions</p>
//     </div>
//   </div>
// );

// const BusinessImpact = () => (
//   <div className="min-h-screen bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
//     <div className="text-center text-white">
//       <h1 className="text-6xl font-bold mb-6">Business Impact</h1>
//       <p className="text-xl">See how we transform businesses</p>
//     </div>
//   </div>
// );

// const ProcessTransformation = () => (
//   <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
//     <div className="text-center text-white">
//       <h1 className="text-6xl font-bold mb-6">Process Transformation</h1>
//       <p className="text-xl">Streamline your operations</p>
//     </div>
//   </div>
// );

// const PartnerSuccessLayout = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
//     <div className="text-center text-white">
//       <h1 className="text-6xl font-bold mb-6">Partner Success</h1>
//       <p className="text-xl">Build lasting partnerships</p>
//     </div>
//   </div>
// );

const PageSectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const minSwipeDistance = 50;

  // Define your page sections
  const slides = [
    {
      id: "hero",
      title: "Enterprise Vision",
      component: <HeroPage />,
    },
    {
      id: "solutions",
      title: "Solution Portfolio",
      component: <SolutionPortfolio />,
    },
    {
      id: "business",
      title: "Business Impact",
      component: <BusinessImpact />,
    },
    {
      id: "process",
      title: "Process Transformation",
      component: <ProcessTransformation />,
    },
    {
      id: "partners",
      title: "Partner Success",
      component: <PartnerSuccessLayout />,
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateSlide("prev");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateSlide("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning]);

  // Touch and mouse handlers
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

  // Navigation logic
  const navigateSlide = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prevSlide) =>
      direction === "next"
        ? (prevSlide + 1) % slides.length
        : prevSlide === 0
          ? slides.length - 1
          : prevSlide - 1,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation Controls */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-4">
        <div className="bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
          <span className="text-sm font-medium">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
        <div className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
          {slides[currentSlide].title}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <button
          onClick={() => navigateSlide("prev")}
          className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-black/70"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => navigateSlide("next")}
          className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-black/70"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-black/30">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Carousel Container */}
      <div
        className="relative flex w-full h-screen overflow-hidden"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        <div
          className="flex w-full h-full transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(calc(-${
              currentSlide * 100
            }% + ${translateX}px))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-shrink-0 w-full h-full"
            >
              {slide.component}
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-20 left-6 z-50 text-white/60 text-sm">
        <div className="bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
          Use ← → arrow keys to navigate
        </div>
      </div>
    </div>
  );
};

export default PageSectionCarousel;
