// components/PartnerSuccess.js
import React from "react";

import { ArrowRight, Users, Target, TrendingUp, Award } from "lucide-react";

const PartnerSuccessLayout = () => {
  return (
    <div className="bg-white text-black relative overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-7xl py-16 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="mb-2 block sm:hidden">
                <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">
                  Partners
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-light text-black leading-tight">
                  Partner
                  <br />
                  Success
                </h1>

                <div className="max-w-md">
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    When you partner with us, you gain expert guidance, tailored
                    solutions, ongoing support, and a trusted advisor committed
                    to your long-term success.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 group">
                  <span>Start Partnership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Right side - Floating cards */}
            <div className="relative mx-6 sm:mx-8 lg:mx-6 my-12 sm:my-14 lg:my-10">
              {/* Main large card */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 pb-20 sm:p-8 sm:pb-24 lg:p-10 lg:pb-28 pr-10 sm:pr-14 lg:pr-16 shadow-2xl backdrop-blur-sm border border-gray-600/30 relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                    Partnership Benefits
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Expert guidance and strategic support
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Tailored solutions for your business
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Ongoing support and maintenance
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Long-term success commitment
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating top-right card */}
              <div className="absolute -top-6 -right-4 sm:-top-6 sm:-right-5 lg:-top-5 lg:-right-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="text-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white mx-auto mb-1 sm:mb-2" />
                  <h4 className="text-white font-semibold text-[10px] sm:text-xs lg:text-sm">
                    Strategic Focus
                  </h4>
                  <p className="text-blue-100 text-[9px] sm:text-[10px] lg:text-xs mt-0.5 sm:mt-1">
                    Goal-oriented approach
                  </p>
                </div>
              </div>

              {/* Floating bottom-left card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:-left-5 lg:-bottom-7 lg:-left-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 sm:p-4 lg:p-6 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="text-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white mx-auto mb-1 sm:mb-2" />
                  <h4 className="text-white font-semibold text-[10px] sm:text-xs lg:text-sm">
                    Proven Results
                  </h4>
                  <p className="text-purple-100 text-[9px] sm:text-[10px] lg:text-xs mt-0.5 sm:mt-1">
                    Success track record
                  </p>
                </div>
              </div>

              {/* Floating bottom-right card */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 lg:-bottom-5 lg:-right-5 bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-2.5 sm:p-3 lg:p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="text-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mx-auto mb-0.5 sm:mb-1" />
                  <h4 className="text-white font-semibold text-[9px] sm:text-[10px] lg:text-xs">
                    Growth
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default PartnerSuccessLayout;
