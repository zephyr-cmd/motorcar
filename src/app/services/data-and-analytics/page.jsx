// import CapabilitiesCarousel from "@/app/_components/CapabilityCarousel";
import ImageCardSlider from "@/app/_components/imageCardSlider";
import Navbar from "@/app/_components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function AutomationAndIoT() {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/U4-I4oH4xlg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGFuYWx5dGljc3xlbnwwfHx8fDE3MjYzNDA3MzN8MA&force=true&w=1920",
      heading: "Boost your results with powerful analytics",
      description:
        "Data drives business transformation. Our solutions deliver insights to innovate products and services, elevate customer experience and enhance business outcomes.",
      buttonText: "/data and analytics",
      buttonLink: "/services/contact-us/data-and-analytics",
    },
  ];
  const services = [
    {
      title: "Smart Home Automation",
      imageSrc:
        "https://unsplash.com/photos/FpMZ4Slx3xc/download?force=true&w=1920",
      description:
        "Transform your home into a smart, efficient living space with our automation solutions. Control lighting, temperature, security, and appliances from your smartphone or voice commands, ensuring comfort and convenience.",
      example:
        "A homeowner utilized our smart home automation to integrate lighting and security systems, leading to a 15% reduction in energy costs and enhanced home security.",
    },
    {
      title: "Industrial IoT Solutions",
      imageSrc:
        "https://unsplash.com/photos/7pxvHXg6bOI/download?force=true&w=1920",
      description:
        "Revolutionize your manufacturing processes with Industrial IoT. Our solutions enable real-time monitoring, predictive maintenance, and seamless integration across your production lines, enhancing efficiency and reducing downtime.",
      example:
        "A manufacturing plant implemented our IoT-based predictive maintenance, reducing machine downtime by 25% and lowering maintenance costs by 20%.",
    },
    {
      title: "Smart City Infrastructure",
      imageSrc:
        "https://unsplash.com/photos/3e3IuqRF3m4/download?force=true&w=1920",
      description:
        "Build the cities of tomorrow with our IoT-powered smart city solutions. From intelligent traffic management to energy-efficient street lighting, we help urban planners create sustainable, connected communities.",
      example:
        "A city implemented our smart traffic management system, reducing congestion by 30% and improving emergency response times by 20%.",
    },
    {
      title: "Remote Monitoring & Control",
      imageSrc:
        "https://unsplash.com/photos/nJdwUHmaY8A/download?force=true&w=1920",
      description:
        "Monitor and control critical systems remotely with our IoT solutions. From environmental sensors to industrial equipment, our technology ensures real-time data access and control, enhancing operational efficiency.",
      example:
        "An agricultural company used our remote monitoring system to track soil moisture levels, improving crop yields by 18% through precise irrigation management.",
    },
    {
      title: "Connected Healthcare",
      imageSrc:
        "https://unsplash.com/photos/GJ96NjxfIlw/download?force=true&w=1920",
      description:
        "Enhance patient care with our connected healthcare solutions. Our IoT devices and platforms enable remote monitoring, personalized care, and efficient hospital management, improving health outcomes and operational efficiency.",
      example:
        "A hospital implemented our connected healthcare solutions to monitor patient vitals remotely, reducing hospital readmissions by 15% and improving patient satisfaction.",
    },
    {
      title: "Smart Grid Solutions",
      imageSrc:
        "https://unsplash.com/photos/MytacztL5Rc/download?force=true&w=1920",
      description:
        "Upgrade your energy infrastructure with our IoT-powered smart grid solutions. These systems enable real-time monitoring and management of energy distribution, helping to optimize energy use, reduce outages, and integrate renewable energy sources effectively.",
      example:
        "A utility company implemented our smart grid solutions, leading to a 10% reduction in energy losses and a 15% increase in the integration of renewable energy sources.",
    },
    {
      title: "Energy Management Systems",
      imageSrc:
        "https://unsplash.com/photos/8A7EDKmMcTA/download?force=true&w=1920",
      description:
        "Maximize energy efficiency with our IoT-driven energy management systems. Monitor and control energy usage across multiple facilities in real-time, enabling data-driven decisions that reduce costs and environmental impact.",
      example:
        "A commercial building complex utilized our energy management system to optimize HVAC operations, resulting in a 20% reduction in energy consumption and significant cost savings.",
    },

    {
      title: "Smart Retail Solutions",
      imageSrc:
        "https://unsplash.com/photos/LU-u5P3vxd4/download?force=true&w=1920",
      description:
        "Optimize your retail operations with IoT-driven smart retail solutions. From inventory management to customer engagement, our technology helps you deliver a seamless shopping experience while improving efficiency.",
      example:
        "A retail chain adopted our smart inventory management system, reducing stockouts by 20% and increasing customer satisfaction.",
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
      image:
        "https://unsplash.com/photos/LP-iUrOi5T0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzF8fGlubm92YXRlfGVufDB8fHx8MTcyNTk5Mjg0NHww&force=true&w=640",
      // image:
      //   "https://images.unsplash.com/photo-1704730827544-ad473ecae95d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGlubm92YXRlfGVufDB8fDB8fHww",
      // image: "/image2.jpg",
    },
    {
      id: 2,
      title: "Brand Elevation",
      description: "Branding & Strategy",
      items: ["Brand Strategy", "Identity Design", "Market Research"],
      image:
        "https://unsplash.com/photos/b4DtZhxJjPM/download?force=true&w=640",
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
      image:
        "https://unsplash.com/photos/FV_PxCqgtwc/download?force=true&w=640",
    },
    {
      id: 4,
      title: "Engage & Convert",
      description: "Customer Engagement",
      items: ["Digital Campaigns", "Loyalty Programs", "Customer Insights"],
      image:
        "https://unsplash.com/photos/cXdVyE4eJeg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTczfHx0cmVuZGluZyUyMGFycm93fGVufDB8fHx8MTcyNTk5MjUxMnww&force=true&w=640",
    },
    {
      id: 5,
      title: "Design & Transform",
      description: "Experience",
      items: ["CX Strategy", "Experience Design", "Creative"],
      image:
        "https://unsplash.com/photos/ZSPBhokqDMc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGRlc2lnbnxlbnwwfHx8fDE3MjU5OTMzMTd8MA&force=true&w=640",
    },
    // {
    //   id: 6,
    //   title: "Demand Gen",
    //   description: "Content & Creative",
    //   items: ["Content Strategy", "Content Marketing", "Social Activation"],
    // },
  ];

  return (
    <div className="">
      <Navbar slides={slides} />
      <main className="w-full">
        {/* iot & automation Services Overview */}
        <section className="container w-full mx-auto py-12 text-black p-5 sm:px-10 md:px-20">
          {/* <h2 className="text-center">
            <span className="cs-section-title uppercase font">
              automation-and-iot-services
            </span>
          </h2> */}
          <p className="text-center mt-10 font-exo text-2xl md:text-4xl">
            Driving innovation through advanced data analytics and AI-powered
            insights
          </p>
          <div className="my-10 sm:my-5 md:my-20 text-justify text-lg md:text-xl space-y-7 text-black font-exo2">
            <p>
              In an era where data is the foundation of business transformation,
              companies must harness the power of analytics to make informed,
              impactful decisions. Our services focus on turning complex data
              into actionable insights that drive innovation, operational
              efficiency, and business growth. The landscape is shifting toward
              data-driven strategies that influence every aspect of an
              organization, from product development to customer experience.
            </p>

            <p>
              At the forefront of this evolution, we integrate advanced
              technologies such as AI, machine learning, predictive analytics,
              and real-time data processing. These tools empower businesses to
              anticipate trends, optimize decision-making, and uncover new
              opportunities. By leveraging the full potential of data and
              analytics, we help companies gain a deeper understanding of
              customer behavior, streamline operations, and stay ahead in a
              rapidly evolving marketplace.
            </p>
            <p>
              With our expertise, businesses can unlock the true value of their
              data, transforming it into a strategic asset that drives
              competitive advantage and sustainable growth.
            </p>

            {/* <h3 className="text-xl md:text-2xl mt-4 font-semibold">
              “Save your time with us, let's automate the growth”
            </h3> */}
          </div>
        </section>

        {/* OUR APPROACH */}
        {/* <section className="bg-zinc-900 text-white py-10 px-5 sm:px-10 md:px-52 ">
          <div className="container mx-auto px-0">
            <div className="w-full mb-4 pb-2 text-left">
              <h2 className="text-xl md:text-2xl font-bold font-exo ">
                Our Approach
              </h2>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-24 w-24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      className="text-blue-600"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">Intelligent</p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-24 w-24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      className="text-blue-600"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">Predictive</p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-24 w-24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                      className="text-blue-600"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">Self-aware</p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-24 w-24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                      className="text-blue-600"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">Autonomous</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Our Expertise Section */}
        <section className="bg-gray-100 py-10 px-5 sm:px-10 md:px-52">
          <div className="container mx-auto">
            <div className="lg:w-3/4">
              {/* Left Side */}
              <div className="py-8 ">
                <h2 className="text-base sm:text-xl font-bold text-black uppercase">
                  Our Expertise
                </h2>
                <h3 className="text-4xl md:text-6xl text-black mt-4 border-l-4 border-blue-500 pl-4 font-exo">
                  Start your journey toward becoming a self-aware organization
                  with:
                </h3>
              </div>

              {/* Right Side - Accordions */}
              <div className="flex-1">
                {services.map((service, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={1 + index}>
                        <AccordionTrigger className="font-poppins text-lg font-medium text-gray-900">
                          {service.title}
                        </AccordionTrigger>
                        <AccordionContent className="font-poppins text-lg font-medium text-gray-800">
                          {service.description}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* our benefits */}
        <section className="bg-gray-100 py-12 pb-24 px-5 sm:px-10 md:px-52">
          <div className="container mx-auto ">
            <div className="text-left mb-8  ">
              <h2 className=" text-base sm:text-lg font-bold text-black uppercase">
                benefits
              </h2>
              <p
                className="text-xl font-medium mt-4 border-l-4 border-blue-500 pl-4 font-exo"
                // className="text-4xl md:text-6xl text-black mt-4 border-l-4 border-blue-500 pl-4 font-exo"
              >
                Unlock the potential of IoT for your business.
              </p>
            </div>
            <ul className="space-y-5 text-base ">
              <li>
                <span className="font-bold  text-black">
                  Explore New Business Horizons:
                </span>
                &nbsp; Envision and implement innovative business models by
                harnessing the power of digital transformation.
              </li>
              <li>
                <span className="font-bold  text-black">
                  Enhance Operational Flexibility:
                </span>
                &nbsp; Adapt quickly to changing market demands with agile and
                responsive business practices.
              </li>
              <li>
                <span className="font-bold  text-black">
                  Elevate Customer Satisfaction:
                </span>
                &nbsp; Streamline processes to remove friction, ensuring product
                and service consistency that delights customers.
              </li>
              <li>
                <span className="font-bold  text-black">
                  Promote Sustainability:
                </span>
                &nbsp; Lower emissions and energy use, contributing to a smaller
                carbon footprint while improving safety and quality of life.
              </li>
            </ul>
          </div>
        </section>
        {/* Our Offerings */}
        <section className="bg-black text-white py-24 pb-10 px-5 sm:px-10 md:px-52 ">
          <div className="container mx-auto px-0">
            <div>
              <h2 className="text-2xl md:text-3xl text-left mb-8 font-nunito">
                Our Offerings
              </h2>
            </div>
            <ImageCardSlider dataPoints={dataPoints} />
          </div>
        </section>

        {/* success Stories Section */}
        {/* <section className="py-24">
          <div className="container mx-auto px-5 sm:px-10 md:px-20 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center">
              {/* Case Study 1 */}
        {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Smart Home Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A homeowner implemented our smart home automation solution,
                  integrating lighting and security systems. This resulted in a
                  15% reduction in energy costs and significantly enhanced home
                  security.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Industrial IoT Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Industrial IoT solutions enabled a manufacturing plant to
                  implement predictive maintenance, reducing machine downtime by
                  25% and lowering maintenance costs by 20%.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Smart Grid Optimization
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A utility company adopted our smart grid solutions, which led
                  to a 10% reduction in energy losses and a 15% increase in
                  renewable energy integration, making their grid more efficient
                  and sustainable.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Connected Healthcare Revolution
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A hospital utilized our connected healthcare solutions for
                  remote patient monitoring, reducing hospital readmissions by
                  15% and improving overall patient satisfaction.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Energy Management Success
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A commercial building complex leveraged our energy management
                  systems to optimize HVAC operations, leading to a 20%
                  reduction in energy consumption and significant cost savings.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Smart Retail Transformation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our smart retail solutions helped a retail chain reduce
                  stockouts by 20% and enhance customer satisfaction through an
                  IoT-driven inventory management system.
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
        </section> */}

        <div className=""></div>
      </main>
    </div>
  );
}
