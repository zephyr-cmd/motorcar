// import CapabilitiesCarousel from "@/app/_components/CapabilityCarousel";
import CardSlider from "@/app/_components/cardSlider";
import Navbar from "@/app/_components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ArtificialIntelligence() {
  const slides = [
    {
      type: "image",
      // src: "https://unsplash.com/photos/Ilpf2eUPpUE/download?force=true&w=1920",
      src: "https://unsplash.com/photos/-tzkyLKPvL4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fHNvbGFyfGVufDB8fHx8MTcyNDY1NjM5NXww&force=true&w=1920",
      heading: "Giving things a spark of life",
      description:
        "We help you harness cutting-edge automation and IoT solutions that boost growth, streamline operations, and encourage innovation.",
      buttonText: "/Automation and iot Services",
      buttonLink: "/services/contact-us/automation-and-iot-services",
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
            Transforming industries through intelligent automation and IoT
          </p>
          <p className="my-10 sm:m-5 md:m-20 text-justify text-lg md:text-xl space-y-7 text-black font-exo2">
            Automation and IoT are revolutionizing the way businesses operate,
            driving efficiency and innovation across all sectors. The shift from
            manual processes to intelligent, interconnected systems allows for
            real-time monitoring, predictive maintenance, and seamless
            operations. The future of automation and IoT services will be
            defined by the integration of advanced technologies like AI-driven
            automation, smart sensors, edge computing, and secure cloud
            connectivity. These innovations will enable businesses to optimize
            their operations, reduce costs, and create smarter, more responsive
            environments that adapt to evolving needs.
          </p>
          {/* AI Data Points */}
          {/* <div className="pb-12 text-black px-4 sm:px-0">
            <h2 className="text-2xl text-center mb-8 font-nunito">
              Current Statistics & Trends
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataPoints.map((point) => (
                <div
                  key={point.id}
                  className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-1000 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                    {point.svg}
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-blue-600">
                      {point.percentage}
                    </p>
                    <p className="mt-2 text-gray-600">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </section>

        {/* OUR APPROACH */}
        <section className="bg-zinc-900 text-white py-10 px-5 sm:px-10 md:px-52 ">
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
        </section>

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

        {/* Our Services Section */}
        {/* <div className="w-full bg-black">
          <section className="container mx-auto py-12 text-white  px-6">
            <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center font-exo">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div key={index} className="space-y-6">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="text-white">
                    <h3 className="text-3xl font-poppins">{service.title}</h3>
                    <p className=" leading-relaxed mt-4 font-nunito">
                      {service.description}
                    </p>
                    <p className=" leading-relaxed mt-2 font-nunito">
                      <strong>Example:</strong> {service.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div> */}

        {/* A Purposeful Strategy / Engineering Advisory Services */}
        <section className="relative min-h-screen overflow-hidden">
          <div className="flex w-full min-h-screen transition-transform ease-in duration-500">
            <div className=" relative flex justify-center items-center min-w-full">
              <Image
                src={
                  "https://unsplash.com/photos/m14vUTPKEEA/download?force=true&w=1920"
                }
                alt={`Slide`}
                fill
                priority={true}
                style={{ objectFit: "cover", overflow: "hidden" }}
              />

              <div className="absolute h-full w-full bg-black/50">
                <div className="absolute inset-y-1/2  h-fit py-10 px-5 sm:px-10 md:px-52 space-y-7 text-white">
                  <div>
                    <h2 className="text-sm sm:text-base font-bold uppercase">
                      A Purposeful Strategy
                    </h2>
                    <h3 className="text-2xl md:text-4xl mt-4 border-l-4 border-blue-500 pl-4 font-exo">
                      Automation and IoT Engineering Advisory Services
                    </h3>
                  </div>
                  <Link className="flex w-fit pl-5" href={"/"}>
                    <div className="text-xl sm:text-xl flex flex-row items-center gap-5 group relative overflow-hidden">
                      <div className="relative">
                        <span className="relative transition-all duration-300">
                          Read More
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-current origin-bottom-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-bottom-left group-hover:scale-x-100"></div>
                      </div>
                      <div className="bg-white rounded-full text-black p-1 overflow-hidden">
                        <svg
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:animate-slide-and-fade-once"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*OUR CAPABILITIES */}
        <section className="bg-gray-100 py-10 px-5 sm:px-10 md:px-52">
          <div className="container mx-auto">
            <div className="lg:w-3/4">
              <div className="py-8">
                <h2 className="text-base sm:text-xl font-bold text-black uppercase">
                  OUR CAPABILITIES
                </h2>
                <h3 className="text-4xl md:text-6xl text-black mt-4 border-l-4 border-blue-500 pl-4 font-exo">
                  Our solutions are driving transformation across industries.
                </h3>
              </div>
            </div>
            <div className="px-0">
              <div className="flex flex-wrap" role="list">
                <div className="w-full lg:w-1/2" role="listitem">
                  <Link
                    href="#"
                    className="relative pl-4 py-3 flex items-center h-full hover:bg-gray-200 transition-colors"
                  >
                    <p className="flex-grow text-lg font-semibold pl-10">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 industry-icon-publicservices">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </span>
                      Xia Smart Home
                    </p>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2" role="listitem">
                  <Link
                    href="#"
                    className="relative pl-4 py-3 flex items-center h-full hover:bg-gray-200 transition-colors"
                  >
                    <p className="flex-grow text-lg font-semibold pl-10">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 industry-icon-energy">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                          />
                        </svg>
                      </span>
                      Ada Intelligent Power Plant
                    </p>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2" role="listitem">
                  <Link
                    href="#"
                    className="relative pl-4 py-3 flex items-center h-full hover:bg-gray-200 transition-colors"
                  >
                    <p className="flex-grow text-lg font-semibold pl-10">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 industry-icon-manufacturing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                          />
                        </svg>
                      </span>
                      Xia Smart Energy
                    </p>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2" role="listitem">
                  <Link
                    href="#"
                    className="relative pl-4 py-3 flex items-center h-full hover:bg-gray-200 transition-colors"
                  >
                    <p className="flex-grow text-lg font-semibold pl-10">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 industry-icon-retail">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                          />
                        </svg>
                      </span>
                      Xia Smart Surveillance
                    </p>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2" role="listitem">
                  <Link
                    href="#"
                    className="relative pl-4 py-3 flex items-center h-full hover:bg-gray-200 transition-colors"
                  >
                    <p className="flex-grow text-lg font-semibold pl-10">
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 industry-icon-retail">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                          />
                        </svg>
                      </span>
                      Ada Smart Store
                    </p>
                  </Link>
                </div>
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
        {/* Explore More */}
        <section className="bg-black text-white py-24 pb-10 px-5 sm:px-10 md:px-52 ">
          <div className="container mx-auto px-0">
            <div>
              <h2 className="text-2xl md:text-3xl text-left mb-8 font-nunito">
                Explore More
              </h2>
            </div>
            <CardSlider dataPoints={dataPoints} />
          </div>
        </section>

        {/* success Stories Section */}
        <section className="py-24">
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
              </div> */}

              {/* Case Study 2 */}
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

              {/* Case Study 3 */}
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

              {/* Case Study 4 */}
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
              </div> */}

              {/* Case Study 5 */}
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

              {/* Case Study 6 */}
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
        </section>

        <div className=""></div>
      </main>
    </div>
  );
}
