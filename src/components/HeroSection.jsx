import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen flex-col justify-center">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 z-10 bg-black/30" />
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="max-w-[15ch] text-center font-serif text-6xl">
            Experience the draw of Gravity.
          </h1>
          <p>Redefining the future of SUVs</p>
          <button className="rounded-md bg-white px-6 py-2 uppercase text-black">
            Stay informed
          </button>
        </div>
        <div className="mx-auto flex flex-col justify-center sm:w-full sm:max-w-[900px] sm:flex-row sm:justify-between">
          <HighlightItem title="Projected Range" content="Over 440 mi" />
          <div className="h-full bg-white sm:h-auto sm:w-[2px]" />
          <HighlightItem title="Peak Power" content="Over 800 hp" />
          <div className="h-full bg-white sm:h-auto sm:w-[2px]" />
          <HighlightItem title="Seating" content="Up to 7" />
          <div className="h-full bg-white sm:h-auto sm:w-[2px]" />
          <HighlightItem title="0-60 mph" content="Under 3.5 secs" />
        </div>
      </div>
    </section>
  );
};

const HighlightItem = (props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm uppercase">{props.title}</span>
      <p className="text-2xl">{props.content}</p>
    </div>
  );
};

export default HeroSection;
