"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const OldCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);

  useEffect(() => {
    setAnimateIn(true);
  }, [currentSlide]);

  const slides = [
    {
      type: "video",
      src: "introVideo2.mp4",
      heading: "#EngineeringTomorrow",
      description:
        "We provide innovative IT services and consultation, leveraging technology to drive sustainable digital transformation. Our commitment extends to caring for our customers and the environment, aligning our practices with the Sustainable Development Goals (SDGs) to create a positive impact.",
      buttonText: "Learn More",
      buttonLink: "/intro",
    },
    {
      type: "image",
      src: "/image1.jpg",
      heading: "Explore Our Services",
      description: "We offer a wide range of solutions to meet your needs.",
      buttonText: "Explore",
      buttonLink: "/services",
    },
    {
      type: "image",
      src: "/image2.jpg",
      heading: "Join Our Team",
      description: "We are looking for talented individuals to join us.",
      buttonText: "Careers",
      buttonLink: "/careers",
    },
    {
      type: "image",
      src: "/image2.jpg",
      heading: "Join Our Team",
      description: "We are looking for talented individuals to join us.",
      buttonText: "jobs",
      buttonLink: "/jobs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <header
        className={`fixed top-0 left-0 w-full z-10 transition ease-in-out duration-700 ${
          isSticky
            ? "bg-black/95 text-white px-5 py-3 transition ease-linear duration-700"
            : "bg-transparent text-zinc-300 p-7 transition ease-linear duration-700"
        }
        `}
      >
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">AdaLabs</div>
          <div className="hidden sm:flex space-x-6">
            <Link href="#industries" className="hover:text-gray-300">
              Industries
            </Link>
            <Link href="#expertise" className="hover:text-gray-300">
              Expertise
            </Link>
            <Link href="#career" className="hover:text-gray-300">
              Career
            </Link>
            <Link href="#about" className="hover:text-gray-300">
              About Us
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 hover:rounded-full hover:bg-gray-600"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div
            className={`md:hidden relative w-full min-h-dvh p-5
          `}
          >
            <Link href="#industries" className="block py-2 hover:text-gray-300">
              Industries
            </Link>
            <Link href="#expertise" className="block py-2 hover:text-gray-300">
              Expertise
            </Link>
            <Link href="#career" className="block py-2 hover:text-gray-300">
              Career
            </Link>
            <Link href="#about" className="block py-2 hover:text-gray-300">
              About Us
            </Link>
          </div>
        )}
      </header>
      <div className="carousel relative overflow-hidden w-full h-full">
        {[...slides].map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ease-in duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
            ) : (
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover", overflow: "hidden" }}
              />
            )}
            <div
              className={`absolute inset-y-1/2 left-10 md:left-20 transition-all duration-1000 transform delay-5000 ${
                animateIn ? "animate-fadeInRight" : "animate-fadeOutLeft"
              }`}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slide.heading}
              </h2>
              <p className="text-white mb-4 max-w-md">{slide.description}</p>
              <Link
                href={slide.buttonLink}
                className="bg-transparent text-white border border-white hover:bg-blue-700 hover:text-white py-2 px-4 rounded transition-all duration-300 hover:cursor-pointer"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 bg-black/5 text-white">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-tr-xl  ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OldCarousel;
