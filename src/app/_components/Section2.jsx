import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <div className="bg-white text-black min-h-fit pb-10 flex flex-col md:flex-row">
      {/* Left Part: Animation or Image */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center
           order-1 sm:order-none`}
      >
        <div className="p-8 duration-1000 animate-fadeInLeft">
          {/* Replace with your animation or image */}
          <Image src="/arrow.png" alt="Animation" width={500} height={500} />
        </div>
      </div>

      {/* Right Part: Description */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Crafting Future-Ready Enterprises
        </h1>
        <p className="mb-6">
          Discover solutions for your business challenges with our software
          products, automation tools, and tailored services. We offer IoT for
          device management, AI-driven analytics, and infrastructure solutions
          including asset management and facility automation. Our intelligent
          manufacturing and workforce training services empower your business.
        </p>
        <p className="font-bold mb-2">
          Find out how we can tackle your most significant business challenges :
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Innovate and stay competitive</li>
          <li>Speed up product launches</li>
          <li>Optimize costs and processes</li>
          <li>Modernize legacy systems</li>
          <li>Improve quality and reliability</li>
          <li>Gain product lifecycle visibility</li>
          <li>Reskill your workforce in emerging technologies</li>
        </ul>
        <Link
          href="/coming-soon"
          className="bg-blue-700 flex w-fit text-white py-2 px-4 rounded transition-all duration-300 hover:bg-blue-800"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
