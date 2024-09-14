// import CapabilitiesCarousel from "@/app/_components/CapabilityCarousel";
import Navbar from "@/app/_components/navbar";
import Head from "next/head";
import Image from "next/image";

export default function ArtificialIntelligence() {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/gACEhIgXmEo/download?ixid=M3wxMjA3fDB8MXxjb2xsZWN0aW9ufDV8WGhRZ1JsM04xMFl8fHx8fDJ8fDE3MjQzNTA1ODh8&force=true&w=1920",
      // heading: "Empowering Your Business with AI",
      // description:
      // "We deliver global engineering services that help manufacturers design, develop, and realize competitive, customer-centric products. From full program management to specialized engineering support, we tailor solutions to meet your needs throughout the product lifecycle.",
      // buttonText: "/Artificia lntelligence",
      // buttonLink: "/services/contact-us/artificial-intelligence",
      heading: "Innovative Engineering Solutions",
      description:
        "We provide tailored engineering services to help manufacturers design and deliver competitive, customer-focused products throughout the entire lifecycle.",
      buttonText: "/Engineering & R&D",
      buttonLink: "/services/contact-us/engineering-and-rd",
    },
  ];
  const services = [
    {
      title: "AI-Powered Analytics",
      imageSrc:
        "https://unsplash.com/photos/qwtCeJ5cLYs/download?force=true&w=1920",
      description:
        "Leverage advanced analytics driven by AI to uncover hidden patterns, predict trends, and make informed decisions. Our analytics solutions help you optimize operations, enhance customer experiences, and drive business growth.",
      example:
        "A retail company used our AI-powered analytics to identify customer purchasing patterns, leading to a 20% increase in sales through targeted marketing campaigns.",
    },
    {
      title: "Intelligent Automation",
      imageSrc:
        "https://unsplash.com/photos/sz1CHL7Pky0/download?force=true&w=1920",
      description:
        "Streamline your operations with intelligent automation. From automating routine tasks to deploying advanced chatbots, our AI-driven solutions help you save time, reduce costs, and boost productivity.",
      example:
        "A logistics company automated its inventory management using our AI solutions, reducing operational costs by 30% and increasing efficiency.",
    },
    {
      title: "Natural Language Processing (NLP)",
      imageSrc:
        "https://unsplash.com/photos/gVQLAbGVB6Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8YXV0b21hdGlvbnxlbnwwfHx8fDE3MjM2MjM5NTd8MA&force=true&w=1920",
      description:
        "Enhance your communication with AI-powered Natural Language Processing. Our NLP solutions can help you analyze customer feedback, automate text-based tasks, and create intelligent chatbots that understand and respond to human language.",
      example:
        "A customer service provider implemented our NLP chatbot, reducing response times by 50% and improving customer satisfaction.",
    },
    {
      title: "AI Consulting & Strategy",
      imageSrc:
        "https://unsplash.com/photos/UXEuCs7xUdA/download?ixid=M3wxMjA3fDB8MXxhbGx8OXx8fHx8fDJ8fDE3MjM2MTgwMDF8&force=true&w=1920",
      description:
        "Develop a comprehensive AI strategy with our consulting services. We help you identify the right AI opportunities, assess potential ROI, and implement solutions that align with your business goals.",
      example:
        "A financial services firm partnered with us to develop an AI strategy, resulting in a 15% reduction in operational risks and improved decision-making processes.",
    },
    {
      title: "Computer Vision",
      imageSrc:
        "https://unsplash.com/photos/rC8K8tzdjac/download?ixid=M3wxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNzIzNjE4MDAxfA&force=true&w=1920",
      description:
        "Use AI to interpret and analyze visual data with our computer vision solutions. From quality control in manufacturing to facial recognition for security, we provide innovative solutions to enhance your operations.",
      example:
        "A manufacturing company used our computer vision technology to automate quality checks, reducing defects by 25% and increasing production efficiency.",
    },
    {
      title: "AI-Enhanced Security",
      imageSrc: "/cyberSecurity.jpg",
      description:
        "Protect your business with AI-enhanced security measures. Our solutions provide advanced threat detection and response, keeping your sensitive data secure from cyber-attacks.",
      example:
        "A tech company implemented our AI-driven security solutions, reducing the risk of data breaches by 40% and improving overall cybersecurity.",
    },
  ];
  const dataPoints = [
    {
      id: 1,
      percentage: "73%",
      text: "of U.S. companies are utilizing AI in some capacity.",
      svg: (
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
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      ),
    },
    {
      id: 2,
      percentage: "$15.7T",
      text: "is projected to be contributed by AI to the global economy by 2030.",
      svg: (
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
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      percentage: "40%",
      text: " productivity improvement can be expected by 2035.",
      svg: (
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
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
    },
    {
      id: 4,
      percentage: "34.8%",
      text: "of businesses are expected to adopt AI by 2040.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="text-gray-800"
          viewBox="0 0 24 24"
        >
          <path d="M21 17h-3.586l1.293-1.293-1.414-1.414-4.293 4.293 4.293 4.293 1.414-1.414-1.293-1.293h3.586v-2zM2 2h7.586l-1.293 1.293 1.414 1.414 4.293-4.293-4.293-4.293-1.414 1.414 1.293 1.293h-7.586v2zm7 4v10h2v-10h-2zm-4 0v10h2v-10h-2zm8 0v10h2v-10h-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="">
      <Head>
        <title>AI Services - IT Consultancy</title>
        <meta
          name="description"
          content="Explore our cutting-edge Artificial Intelligence (AI) services designed to enhance business operations and decision-making."
        />
      </Head>
      <Navbar slides={slides} />
      <main className="w-full">
        {/* AI Services Overview */}
        <section className="container w-full mx-auto py-12 text-black px-10 sm:px-20 p-5 ">
          {/* <h2 className="text-center">
            <span className="cs-section-title uppercase font">
              Artificial Intelligence
            </span>
          </h2> */}
          <p className="text-center mt-10 font-nunito text-4xl">
            Empowering businesses with intelligent solutions
          </p>
          <div className="my-10 sm:my-5 md:my-20 text-justify text-lg md:text-xl space-y-7 text-black font-exo2">
            <p>
              Innovation is not just about ideas, it&apos;s about bringing
              simple solutions to complex problems. The true masterpieces of
              engineering are those where complex systems work together in
              harmony to provide simple and efficient solutions. In today&apos;s
              world, tech businesses evolve along with the rapid pace of
              technology. Engineering is no longer just the arrangement of
              physical machines, it now involves a sophisticated combination of
              software that powers machine efficiency.
            </p>

            <p>
              Our comprehensive technical assistance covers a wide range of
              engineering software, including CAD systems, simulation tools, and
              other specialized applications designed to enhance engineering
              precision and performance.
            </p>

            <h3 className="text-xl md:text-2xl mt-4 font-semibold">
              “Let&apos;s engineer a better future backed with Artificial
              Intelligence and Machine Learning”
            </h3>
          </div>

          {/* AI Data Points */}
          <div className="py-10 px-4 sm:px-0">
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
          </div>
        </section>
        {/* Our Services Section */}
        <div className="w-full bg-black">
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
          {/* <CapabilitiesCarousel slides={services} /> */}
        </div>

        {/* success Stories Section */}
        <section className=" py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Case Study 1 */}
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Retail Industry Transformation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A leading retail chain partnered with us to implement
                  AI-powered analytics, resulting in a 20% increase in sales and
                  improved inventory management.
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
                  Healthcare AI Integration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our AI solutions helped a healthcare provider improve patient
                  outcomes by 30% through predictive analytics and personalized
                  treatment plans.
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
                  Manufacturing Process Optimization
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We worked with a manufacturing company to integrate computer
                  vision for quality control, reducing defects by 25% and
                  increasing production efficiency.
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
