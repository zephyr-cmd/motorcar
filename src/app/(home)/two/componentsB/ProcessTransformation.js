// components/ProcessTransformation.js
import { ChartSpline, MapIcon, RocketIcon, Search } from "lucide-react";
import React from "react";

const ProcessTransformation = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="md:col-span-7 lg:col-span-5">
            <div className="mb-2 block sm:hidden ">
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">
                Process
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light mt-7 mb-6">
              Transformation Journey for Business Success
            </h1>
            <div className="text-lg/7">
              <p>
                Our approach to business transformation focuses on four key
                areas.
              </p>
              {/* <ol className="list-decimal list-inside text-base/10">
                <li>
                  <span className="font-bold">Assessment:</span> Understanding
                  your current systems and challenges
                </li>
                <li>
                  Strategy: Developing a tailored roadmap for implementation
                </li>
                <li>
                  Implementation: Deploying solutions with minimal disruption
                </li>
                <li>Optimization: Continuous improvement and adaptation</li>
              </ol> */}
            </div>

            {/* Next: "Add a CTA button" */}
          </div>

          <div className="md:col-span-5 lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <ChartSpline className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">
                Continuous optimization
              </h3>
              <p className="hidden sm:block text-xs md:text-base text-gray-600">
                Transformation doesn't end at implementation. We focus on
                continuous improvement and adaptation of solutions to evolving
                business needs, ensuring your transformation delivers lasting
                value and remains relevant.
              </p>
              {/* Next: "Add a Learn More link" */}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <RocketIcon className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">
                Implementation execution
              </h3>
              <p className="hidden sm:block text-xs md:text-base text-gray-600">
                We deploy solutions with minimal disruption to your ongoing
                operations. Our experienced team manages the transition
                carefully, ensuring we integrate seamlessly while maintaining
                business continuity.
              </p>
              {/* Next: "Add a Case Study link" */}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <Search className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">Assessment</h3>
              <p className="hidden sm:block text-xs md:text-base text-gray-600">
                We begin by thoroughly understanding your current systems and
                identifying key challenges. This critical first step establishes
                a baseline for measuring progress and ensures solutions address
                your specific needs.
              </p>
              {/* Next: "Add an Assessment Request button" */}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <MapIcon className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">
                Strategy development
              </h3>
              <p className="hidden sm:block text-xs text-gray-600">
                Based on our assessment, we create a tailored roadmap that
                outlines implementation steps, timelines, and resources
                required. This strategic plan serves as your guide throughout
                the transformation process.
              </p>
              {/* Next: "Add a Strategy Session booking option" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTransformation;
