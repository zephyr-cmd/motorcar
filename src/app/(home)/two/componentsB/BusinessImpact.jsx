"use client";

// componentsB/BusinessImpact.jsx
import { BoltIcon, ChartSpline, RocketIcon } from "lucide-react";
import Image from "next/image";

const impactCards = [
  {
    icon: BoltIcon,
    title: "Speed up product launches",
    description:
      "Accelerate your time-to-market with our streamlined development processes. We eliminate bottlenecks to help you deliver products faster than the competition.",
  },
  {
    icon: ChartSpline,
    title: "Optimize costs and processes",
    description:
      "Identify inefficiencies and implement cost-saving measures across your organization. Our approach ensures maximum operational efficiency while maintaining quality.",
  },
  {
    icon: RocketIcon,
    title: "Innovate and stay competitive",
    description:
      "Our solutions help you maintain market leadership through continuous innovation. We provide cutting-edge technologies that keep you ahead of industry trends.",
  },
];

const BusinessImpact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto max-w-7xl py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left side — heading + description */}
          <div className="md:col-span-7 lg:col-span-5">
            <div className="mb-2 block sm:hidden">
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">
                Impact
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light mt-7 mb-6">
              Business Impact
            </h1>
            <div className="text-lg/7">
              <p>
                Find out how we can tackle your most significant business
                challenges and drive measurable outcomes across your
                organization.
              </p>
            </div>
          </div>

          {/* Right side — cards grid + image */}
          <div className="md:col-span-5 lg:col-span-7 grid grid-cols-2 gap-6 content-start">
            {impactCards.map((card, index) => {
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

            <div className="relative rounded-lg overflow-hidden min-h-[180px]">
              <Image
                src="/images/contact-us/hero.jpg"
                alt="Business Impact"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessImpact;
