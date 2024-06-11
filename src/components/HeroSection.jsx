import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen flex-col justify-center">
      <Navbar />
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 z-10 bg-black/30" />
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="/hero-video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-8">
          <h1 className="max-w-[15ch] text-center font-serif text-6xl">
            The New Era..
          </h1>
          <p>Pollution is not the solution; it&apos;s a hazard to evolution.</p>
          <button className="rounded-md bg-white px-6 py-2 uppercase text-black hover:bg-gray-500/55">
            Stay informed
          </button>
        </div>
        <div className="mx-auto flex flex-col justify-around sm:w-full sm:max-w-[900px] sm:flex-row sm:justify-between px-5 gap-5">
          <HighlightItem
            title="Air Pollution"
            content="40% of the U.S. population breathes unhealthy air."
          />
          <div className="h-full bg-white sm:h-auto sm:w-[2px] mt-5" />
          <HighlightItem
            title="Water Pollution"
            content="80% of wastewater is untreated globally."
          />
          <div className="h-full bg-white sm:h-auto sm:w-[2px] mt-5" />
          <HighlightItem
            title="Soil Pollution"
            content="33% of the world's soil is degraded."
          />
          {/* <div className="h-full bg-white sm:h-auto sm:w-[2px] mt-5" />
          <HighlightItem title="0-60 mph" content="Under 3.5 light" /> */}
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
