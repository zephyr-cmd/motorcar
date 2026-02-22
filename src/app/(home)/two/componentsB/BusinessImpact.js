// components/BusinessImpact.js
import {
  BoltIcon,
  ChartSpline,
  FireExtinguisherIcon,
  RocketIcon,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import React from "react";

// const BusinessImpact = () => {
//   const challenges = [
//     "Innovate and stay competitive",
//     "Speed up product launches",
//     "Optimize costs and processes",
//     "Modernize legacy systems",
//     "Improve quality and reliability",
//     "Gain product lifecycle visibility",
//     "Reskill your workforce in emerging technologies",
//   ];

//   const impactCards = [
//     {
//       title: "Innovate and stay competitive",
//       description:
//         "Our solutions help you maintain market leadership through continuous innovation. We provide cutting-edge technologies that keep you ahead of industry trends.",
//       icon: "🚀",
//       color: "blue",
//     },
//     {
//       title: "Speed up product launches",
//       description:
//         "Accelerate your time-to-market with our streamlined development processes. We eliminate bottlenecks to help you deliver products faster than the competition.",
//       icon: "⚡",
//       color: "purple",
//     },
//     {
//       title: "Optimize costs and processes",
//       description:
//         "Identify inefficiencies and implement cost-saving measures across your organization. Our approach ensures maximum operational efficiency while maintaining quality.",
//       icon: "📊",
//       color: "green",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white py-20">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="flex justify-center items-center space-x-4 mb-8">
//             <div className="h-1 w-16 bg-blue-600"></div>
//             <span className="text-sm font-medium text-gray-600">
//               Made with Chronicle
//             </span>
//             <div className="h-1 w-16 bg-blue-600"></div>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
//             Business Impact
//           </h2>

//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Find out how we can tackle your most significant business
//             challenges:
//           </p>
//         </div>

//         {/* Challenge Tags */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-5xl mx-auto">
//           {challenges.map((challenge, index) => (
//             <span
//               key={index}
//               className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors duration-300"
//             >
//               {challenge}
//             </span>
//           ))}
//         </div>

//         {/* Impact Cards */}
//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {impactCards.map((card, index) => (
//             <div
//               key={index}
//               className="group bg-gray-50 hover:bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
//             >
//               <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                 {card.icon}
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 {card.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">
//                 {card.description}
//               </p>

//               <div className="mt-6">
//                 <button
//                   className={`text-${card.color}-600 hover:text-${card.color}-800 font-semibold transition-colors duration-300`}
//                 >
//                   Learn More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg mr-4">
//             Get Started
//           </button>
//           <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const BusinessImpact = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
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

          {/* Right side — 2x2 grid with cards + image */}
          <div className="md:col-span-5 lg:col-span-7 grid grid-cols-2 gap-6 content-start">
            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <BoltIcon className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">
                Speed up product launches
              </h3>
              <p className="hidden sm:block text-xs md:text-base text-gray-600">
                Accelerate your time-to-market with our streamlined development
                processes. We eliminate bottlenecks to help you deliver products
                faster than the competition.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <ChartSpline className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">
                Optimize costs and processes
              </h3>
              <p className="hidden sm:block text-xs md:text-base text-gray-600">
                Identify inefficiencies and implement cost-saving measures
                across your organization. Our approach ensures maximum
                operational efficiency while maintaining quality.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <RocketIcon className="mr-2 text-blue-500" />
              </div>
              <h3 className="text-base font-medium mb-2">
                Innovate and stay competitive
              </h3>
              <p className="hidden sm:block text-xs md:text-base text-gray-600">
                Our solutions help you maintain market leadership through
                continuous innovation. We provide cutting-edge technologies that
                keep you ahead of industry trends.
              </p>
            </div>

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
