"use client";

// componentsB/SolutionPortfolio.jsx
import {
  ChartNoAxesColumn,
  Sparkle,
  TabletSmartphone,
  UsersRound,
} from "lucide-react";

const SolutionPortfolio = () => {
  const solutions = [
    {
      icon: UsersRound,
      title: "Workforce Transformation",
      description:
        "Comprehensive training and upskilling programs designed to build future-ready capabilities and drive digital adoption across your organization",
    },
    {
      icon: ChartNoAxesColumn,
      title: "Smart Manufacturing",
      description:
        "Industry 4.0 solutions leveraging IoT, AI, and analytics to optimize production processes and achieve operational excellence",
    },
    {
      icon: Sparkle,
      title: "AI & Analytics",
      description:
        "Advanced artificial intelligence and data analytics solutions that transform raw data into actionable insights for strategic decision-making",
    },
    {
      icon: TabletSmartphone,
      title: "IoT Solutions",
      description:
        "End-to-end IoT platforms enabling connected ecosystems, real-time monitoring, and intelligent automation for enhanced efficiency",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="md:col-span-7 lg:col-span-5">
            <div className="mb-2 block sm:hidden">
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">
                Solutions
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light mt-7 mb-6">
              Enterprise Solutions for Business Excellence
            </h1>
            <div className="text-lg/7">
              <p>
                Our approach to digital transformation focuses on delivering
                innovative technology solutions that drive measurable business
                outcomes and sustainable growth.
              </p>
            </div>
          </div>

          {/* Right Section - Solutions Grid */}
          <div className="md:col-span-5 lg:col-span-7 grid grid-cols-2 gap-6 content-start">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="mr-2 text-blue-500" />
                  </div>
                  <h3 className="text-base font-medium mb-2">
                    {solution.title}
                  </h3>
                  <p className="hidden sm:block text-xs md:text-base text-gray-600">
                    {solution.description}
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

export default SolutionPortfolio;
