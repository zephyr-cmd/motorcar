"use client";

// componentsB/ProcessTransformation.jsx
import { ChartSpline, MapIcon, RocketIcon, Search } from "lucide-react";

const transformationCards = [
  {
    icon: ChartSpline,
    title: "Continuous optimization",
    description:
      "Transformation doesn't end at implementation. We focus on continuous improvement and adaptation of solutions to evolving business needs, ensuring your transformation delivers lasting value and remains relevant.",
  },
  {
    icon: RocketIcon,
    title: "Implementation execution",
    description:
      "We deploy solutions with minimal disruption to your ongoing operations. Our experienced team manages the transition carefully, ensuring we integrate seamlessly while maintaining business continuity.",
  },
  {
    icon: Search,
    title: "Assessment",
    description:
      "We begin by thoroughly understanding your current systems and identifying key challenges. This critical first step establishes a baseline for measuring progress and ensures solutions address your specific needs.",
  },
  {
    icon: MapIcon,
    title: "Strategy development",
    description:
      "Based on our assessment, we create a tailored roadmap that outlines implementation steps, timelines, and resources required. This strategic plan serves as your guide throughout the transformation process.",
  },
];

const ProcessTransformation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="md:col-span-7 lg:col-span-5">
            <div className="mb-2 block sm:hidden">
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
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-7 grid grid-cols-2 gap-6">
            {transformationCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="mr-2 text-blue-500" />
                  </div>
                  <h3 className="text-base font-medium mb-2">{card.title}</h3>
                  <p className="hidden sm:block text-xs md:text-base text-gray-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTransformation;
