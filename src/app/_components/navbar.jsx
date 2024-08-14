"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  // const slides = props.slides
  console.log("L-10 slides----------------->", props.slides);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const handlesideBar = () => {
    setIsOpen(!isOpen);
    setSideBar(!sideBar);
    console.log("handle side bar., isOpen", isOpen, "setSideBar", sideBar);
  };

  const slides = props.slides;
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
    <div className="">
      <header
        className={`fixed top-0 left-0 w-full z-10 transition ease-in-out duration-700 text-white 
              ${isSticky ? "bg-black/95 px-5 py-3" : "bg-transparent p-7"} 
              ${sideBar && !isSticky ? `bg-zinc-950/95` : ""}
            `}
      >
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300">
            AdaLabs
          </Link>
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
              onClick={() => handlesideBar()}
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
          <div className="md:hidden relative w-full min-h-dvh p-5">
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

      <div className="carousel relative min-h-screen overflow-hidden">
        <div
          className="flex w-full min-h-screen transition-transform ease-in duration-500"
          // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {[...slides].map((slide, index) => {
            return (
              <div
                key={index}
                className="relative flex justify-center items-center min-w-full"
              >
                {slide.type === "video" ? (
                  <div className="video-player flex-none w-full min-h-screen overflow-hidden relative">
                    <div className="flex-none w-full min-h-screen overflow-hidden relative">
                      <Image
                        src={slide?.thumbnail}
                        alt={slide?.heading}
                        fill
                        style={{
                          objectFit: "cover",
                          overflow: "hidden",
                          background: "rgb(2 44 34)",
                        }}
                        priority={true}
                      />
                    </div>
                    <div className="absolute inset-0 w-screen min-h-screen">
                      <video
                        src={slide.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        playsInline
                        loop
                        muted
                        // poster="introThumbnail.png"
                        onLoadedData={handleVideoLoad}
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={true}
                    style={{ objectFit: "cover", overflow: "hidden" }}
                  />
                )}
                <div className="absolute w-full h-full bg-black/50">
                  <div
                    className={`absolute inset-y-1/2 md:left-20 p-5 space-y-7 transition-all duration-1000 transform text-white`}
                  >
                    <h2 className=" text-2xl sm:text-3xl md:text-5xl font-bold mb-4 font-poppins">
                      {slide.heading}
                    </h2>
                    <p className=" text-xl sm:text-2xl mb-4 text-justify max-w-md font-exo">
                      {slide.description}
                    </p>
                    <Link className="flex w-fit" href={slide.buttonLink}>
                      <div className="text-xl sm:text-2xl flex flex-row items-center gap-5 group relative overflow-hidden">
                        <div className="relative">
                          <span className="relative transition-all duration-300">
                            Lets Talk
                          </span>
                          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-current origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></div>
                        </div>
                        <div className="bg-white rounded-full text-black p-1 overflow-hidden">
                          <svg
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:animate-slide-and-fade-once"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                          >
                            <path
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 bg-black/5 text-white">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            // onClick={() => {
            //   setAnimateIn(false);
            //   setTimeout(() => setCurrentSlide(index), 700);
            // }}
            className={`w-4 h-4 rounded-tr-xl  ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default Navbar;
