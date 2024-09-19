import Carousel from "@/app/_components/CapabilityCarousel";
import Navbar from "@/app/_components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlignHorizontalDistributeCenter } from "lucide-react";
import Link from "next/link";

export default function AutomationAndIoT() {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/tYaccl19A3Q/download?force=true&w=1920",
      heading: "Your vision, our roadmap for success",
      description:
        "We provide strategic solutions that optimize operations, accelerate growth, and unlock new opportunities for innovation.",
      buttonText: "/data and analytics",
      buttonLink: "/services/contact-us/data-and-analytics",
    },
  ];
  const services = [
    {
      title: "Executive IT Strategy Consulting",
      imageSrc: "/image1.jpg",
      description:
        "From strategic roadmaps to IT governance, our executive-level advisory services support CIOs in achieving operational agility and sustainable growth. We align IT initiatives with business goals for maximum impact.",
      example:
        "A large enterprise collaborated with our team to revamp its IT governance framework, resulting in a 20% increase in operational efficiency and more streamlined decision-making.",
    },
    {
      title: "Business Integration and Expansion",
      imageSrc: "/image2.jpg",
      description:
        "Drive seamless business growth through mergers, acquisitions, and integrations. We assist companies in aligning technological frameworks and processes to ensure a smooth transition, minimizing risks and maximizing value.",
      example:
        "After acquiring a tech startup, a global corporation used our services to integrate platforms, cutting operational costs by 10% and expanding service offerings without disruption.",
    },
    {
      title: "Future-Ready Enterprise Solutions",
      imageSrc: "/image3.jpg",
      description:
        "Empower your organization with next-gen technologies. We help transform business models, optimize digital processes, and deliver innovative solutions that keep you ahead of the competition.",
      example:
        "A manufacturing firm partnered with us to implement cloud-based enterprise solutions, reducing manual processes by 30% and increasing overall productivity.",
    },
    {
      title: "Cybersecurity and Risk Management",
      imageSrc: "/cyberSecurity.jpg",
      description:
        "Develop a robust cybersecurity strategy that protects your organization from digital threats. We provide risk assessments, compliance solutions, and frameworks to safeguard critical data and systems.",
      example:
        "A financial institution worked with our cybersecurity team to implement advanced threat detection systems, reducing security breaches by 40% in the first year.",
    },
    {
      title: "Optimized Supply Chain Management",
      imageSrc: "/introThumbnail.jpg",
      description:
        "Leverage cutting-edge technologies to optimize supply chain operations. From procurement to delivery, we streamline processes and enhance supply chain efficiency through automation and data analytics.",
      example:
        "Our supply chain solutions helped an e-commerce company reduce delivery times by 25% and improve inventory management, resulting in greater customer satisfaction.",
    },
    {
      title: "Innovation and Digital Transformation Consulting",
      imageSrc: "/adalabs.png",
      description:
        "Accelerate your innovation journey with our expert guidance. We provide comprehensive strategies for adopting emerging technologies, improving business agility, and fostering a culture of continuous improvement.",
      example:
        "A retail company embraced our innovation consulting services to implement AI-powered customer analytics, which boosted sales by 18% through personalized marketing strategies.",
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
            Strategies crafted to elevate your business performance
          </p>
          <div className="my-10 sm:my-5 md:my-20 text-justify text-lg md:text-xl space-y-7 text-black font-exo2">
            <p>
              In today's fast-evolving digital landscape, businesses must
              embrace change with agility and foresight. Our IT consulting
              services are designed to help you do just that by aligning your
              technology with your business objectives. Whether it's modernizing
              legacy systems, adopting cloud solutions, or leveraging data
              analytics, we provide customized strategies that drive growth,
              optimize costs, and streamline operations.
            </p>

            <p>
              By partnering with us, you gain access to expert guidance on
              harnessing emerging technologies like AI and automation to stay
              competitive. We focus on ensuring your IT investments create value
              across the organization, empowering you to meet changing customer
              needs and achieve long-term success.
            </p>

            {/* <h3 className="text-xl md:text-2xl mt-4 font-semibold">
              “Save your time with us, let's automate the growth”
            </h3> */}
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="bg-neutral-900 text-white py-10 px-5 sm:px-10 md:px-52">
          <div className="container mx-auto px-0">
            <div className="w-full mb-4 pb-2 text-left">
              <h2 className="text-xl md:text-2xl font-bold font-exo">
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
                    className="size-24 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">
                  Empower Business Insight
                </p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-24 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">
                  Data-Driven Insights
                </p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-24 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg> */}
                  <AlignHorizontalDistributeCenter className="size-24 text-blue-600" />
                </div>
                <p className="text-lg font-medium text-center">
                  Strengthen Agility
                </p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="flex justify-center items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-24 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">
                  Accelerate Growth
                </p>
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
                <p className="text-4xl md:text-6xl text-black mt-4 border-l-4 border-blue-500 pl-4 font-exo">
                  Plan for a smooth and secure digital transformation.
                </p>
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

        {/* Our Offerings */}
        <section className="bg-black text-white py-24 pb-10 px-5 sm:px-10 md:px-52 ">
          <div className="container mx-auto px-0">
            <div>
              <h2 className="text-2xl md:text-3xl text-left mb-8 font-nunito">
                Leading the Way
              </h2>
            </div>
            <Carousel slides={services} />
          </div>
        </section>

        {/* our benefits */}
        <section className="bg-gray-100 py-12 pb-24 px-5 sm:px-10 md:px-52">
          <div className="container mx-auto ">
            <div className="text-left mb-8">
              <h2 className="text-base sm:text-lg font-bold text-black uppercase">
                Benefits
              </h2>
              <p className="text-4xl md:text-6xl text-black mt-4 border-l-4 border-blue-500 pl-4 font-exo">
                Maximize business performance with expert consulting.
              </p>
            </div>
            <ul className="space-y-5 text-base">
              <li>
                <span className="font-bold text-black">
                  Drive Strategic Growth:
                </span>
                &nbsp; Identify opportunities and develop tailored strategies to
                scale your business and increase market share.
              </li>
              <li>
                <span className="font-bold text-black">
                  Optimize Operational Efficiency:
                </span>
                &nbsp; Streamline processes, reduce costs, and improve overall
                business agility to stay competitive in evolving markets.
              </li>
              <li>
                <span className="font-bold text-black">
                  Improve Decision-Making:
                </span>
                &nbsp; Leverage data-driven insights and expert advice to make
                informed decisions that foster long-term success.
              </li>
              <li>
                <span className="font-bold text-black">
                  Enhance Customer Experiences:
                </span>
                &nbsp; Implement customer-centric strategies that boost
                satisfaction, loyalty, and retention, ensuring your business
                remains client-focused.
              </li>
            </ul>
          </div>
        </section>

        {/* success Stories Section */}
        <section className="py-24">
          <div className="container mx-auto px-5 sm:px-10 md:px-20 ">
            <p className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">
              Success Stories
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center">
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Digital Transformation in Retail
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A global retail chain leveraged our digital transformation
                  strategy, resulting in a 20% improvement in supply chain
                  efficiency and a 25% boost in online sales through data-driven
                  personalization.
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
                  Financial Services Workflow Automation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our consultancy helped a leading financial institution
                  automate their customer service processes, reducing response
                  time by 30% and cutting operational costs by 15%, improving
                  overall client satisfaction.
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
                  Healthcare System Integration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Partnering with a major healthcare provider, we integrated
                  their data systems, streamlining patient records and reducing
                  manual entry errors by 40%, leading to enhanced operational
                  efficiency and better patient care.
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
                  Manufacturing Process Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A manufacturing firm used our consulting services to redesign
                  their production workflow, reducing lead times by 35% and
                  increasing overall production capacity by 20% without
                  additional capital investment.
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
