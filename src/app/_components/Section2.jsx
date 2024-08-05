import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <div className="bg-black text-gray-300 min-h-fit pb-10 flex flex-col md:flex-row">
      {/* Left Part: Animation or Image */}
      <div
        className={`w-full md:w-1/2 flex items-center justify-center
           order-1 sm:order-none`}
      >
        <div className="p-8 animate-fadeIn">
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
          Find out how we can address your most significant business challenges
          with our innovative software products, automation solutions, and
          comprehensive software services tailored to your needs. We offer IoT
          solutions for device management and security, advanced surveillance
          services with mobile access, real-time alerts, and access control
          systems. Our AI-driven solutions empower businesses to harness the
          power of artificial intelligence for predictive analytics,
          decision-making, and process optimization. Our extensive
          infrastructure and buildings management solutions include asset
          management, maintenance and repairs, energy management, facility
          management, building automation systems, and sustainability
          initiatives. We help our customers solve their manufacturing
          challenges with our intelligent manufacturing solutions. Additionally,
          we provide staff augmentation and technology training to re-skill your
          workforce in the latest skillsets.
        </p>
        <p className="font-bold mb-2">
          Discover how we can tackle your most significant business challenges
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Develope more innovative & competitive products and solutions</li>
          <li>Enhance product competitiveness and innovation</li>
          <li>Accelerate time-to-market for new products</li>
          <li>Optimize development costs and processes</li>
          <li>Integrate and modernize legacy systems</li>
          <li>Improve product quality and reliability</li>
          <li>Gain comprehensive visibility across the product lifecycle</li>
          <li>Reskill and upskill your workforce in emerging technologies</li>
        </ul>
        <Link
          //   href="/about-us"
          href="/coming-soon"
          className="bg-blue-700 flex w-fit text-white py-2 px-4 rounded transition-all duration-300 hover:bg-blue-800"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
