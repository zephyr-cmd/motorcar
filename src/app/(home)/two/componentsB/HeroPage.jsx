// components/HeroPage.js
import React from "react";

const HeroPage = () => {
  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl py-16 px-4">
        <div className="mb-2 block sm:hidden">
          <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">
            Enterprise Vision
          </span>
        </div>
        <div>
          <h1 className="text-3xl sm:text-5xl font-light text-gray-900 leading-tight min-h-fit">
            Discover solutions for your business challenges with our{" "}
            <span className="text-black font-normal">Software Products</span>,{" "}
            <span className="text-black font-normal">AI&nbsp;Agents</span>,{" "}
            <span className="text-black font-normal">Automation Tools</span>,
            and tailored services. We offer comprehensive solutions designed to{" "}
            <span className="text-black font-normal">transform</span> your
            organization and prepare it for the challenges of tomorrow.
            {/* Next: "Add CTA button below this text" */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
