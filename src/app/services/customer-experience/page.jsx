import AutoScrollSlider from "@/app/_components/cardSlider";
import Navbar from "@/app/_components/navbar";
import Image from "next/image";

export default function CustomerExperience() {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/JBwcenOuRCg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8Mnx8MTcyNDI0MjcyMXw&force=true&w=1920",
      heading: "Designing experiences that inspire",
      description:
        "We help you to harness advanced design and customer experience strategies that build loyalty, elevate engagement, and drive business success.",
      buttonText: "/Customer Experience",
      buttonLink: "/services/contact-us/customer-experience",
    },
  ];
  const dataPoints = [
    {
      id: 1,
      title: "Innovate & Inspire",
      description: "Innovation Hub",
      items: [
        "Product Design",
        "Emerging Technologies",
        "Innovation Workshops",
      ],
    },
    {
      id: 2,
      title: "Brand Elevation",
      description: "Branding & Strategy",
      items: ["Brand Strategy", "Identity Design", "Market Research"],
    },
    {
      id: 3,
      title: "Scale & Grow",
      description: "Business Expansion",
      items: [
        "Growth Strategy",
        "Business Analytics",
        "Partnership Development",
      ],
    },
    {
      id: 4,
      title: "Engage & Convert",
      description: "Customer Engagement",
      items: ["Digital Campaigns", "Loyalty Programs", "Customer Insights"],
    },
    {
      id: 5,
      title: "Design & Transform",
      description: "Experience",
      items: ["CX Strategy", "Experience Design", "Creative"],
    },
    {
      id: 6,
      title: "Demand Gen",
      description: "Content & Creative",
      items: ["Content Strategy", "Content Marketing", "Social Activation"],
    },
  ];

  return (
    <div className="">
      <Navbar slides={slides} />
      <main className="w-full">
        {/* customer experience Overview */}
        <section className="container w-full mx-auto py-12 text-black px-10 sm:px-20 p-5 ">
          <p className="text-center mt-10 font-exo text-2xl md:text-4xl">
            Elevating customer journeys through innovation and empathy
          </p>
          <p className="my-10 sm:m-5 md:m-20 text-justify text-lg md:text-xl space-y-7 text-black font-exo2">
            As customer expectations continue to evolve, businesses must
            prioritize creating meaningful, memorable, and emotionally resonant
            experiences that go beyond simply delivering products or services.
            The focus has shifted towards crafting seamless, personalized
            journeys that connect with users at every touchpoint. In
            today&apos;s dynamic market, exceptional customer experiences are
            key to fostering brand loyalty and driving growth. The future of
            customer experience and design will be shaped by the integration of
            advanced technologies, human-centered responsive design, immersive
            user interfaces, and data-driven insights. These innovations will
            empower businesses to anticipate customer needs, deliver tailored
            solutions, and build lasting relationships. By leveraging real-time
            feedback loops, companies can connect with customers on a deeper
            level, setting themselves apart in an increasingly competitive
            marketplace.
          </p>
          {/* Our Offerings */}
          <div className="pb-12 text-black px-4 sm:px-0">
            <div>
              <h2 className="text-2xl md:text-3xl text-center mb-8 font-nunito">
                Our Offerings
              </h2>
            </div>
            <AutoScrollSlider dataPoints={dataPoints} />
          </div>
        </section>

        {/* Solution Benifits */}
        <section className="bg-black text-white py-8 space-x-5">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:min-h-[552px] w-full gap-7 items-center justify-around">
              {/* <!-- Left Title Section --> */}
              <div className="flex-1 p-6">
                <h2 className="text-xl font-semibold mb-4">Key Advantages</h2>
                <p className="text-gray-300">
                  We empower businesses through transformative experiences,
                  emphasizing employee engagement, optimized operations, and the
                  latest in technological advancements.
                </p>
              </div>

              {/* <!-- Image Section --> */}
              <div className="flex-1 relative min-w-[300px] md:max-w-[400px] aspect-square p-6">
                <Image
                  src="https://unsplash.com/photos/CxjSW6DC_CQ/download?force=true&w=1920"
                  alt="Slide"
                  fill
                  style={{ objectFit: "cover", overflow: "hidden" }}
                  className="rounded-full"
                />
              </div>

              {/* <!-- Content Section --> */}
              <div className="flex-1  p-6 ">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Unlock New Revenue Channels</li>
                  <li>Enhance Speed of Digital Offerings</li>
                  <li>
                    Boost Customer Satisfaction through Tailored Experiences
                  </li>
                  <li>Lower Operational Costs via Digital Transformation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* success Stories Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Case Study 1 */}
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Retail Customer Experience Enhancement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A major retail chain partnered with us to improve their
                  customer service. Our strategies led to a 20% boost in
                  customer satisfaction and better stock management.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Healthcare Patient Experience Improvement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We helped a healthcare provider enhance their patient care,
                  leading to a 30% improvement in patient satisfaction through
                  more personalized services.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              {/* Case Study 3 */}
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Manufacturing Customer Service Optimization
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A manufacturing company worked with us to streamline their
                  customer support, reducing response times by 25% and improving
                  overall customer satisfaction.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className=""></div>
      </main>
    </div>
  );
}
