import Navbar from "@/app/_components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SoftwareProducts() {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/QBpZGqEMsKg/download?force=true&w=1920",
      heading: "Software designed to improve your products",
      description:
        "We help you transform products with our services to manufacture, service, and realize better outcomes.",
      buttonText: "/Software Products",
      buttonLink: "/services/contact-us/software-products",
    },
  ];
  const softwareDataPoints = [
    {
      id: 1,
      percentage: "70%",
      text: "of software implementations fail due to poor user adoption.",
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
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      percentage: "60%",
      text: "of business leaders see digital transformation as a critical growth driver.",
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
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      percentage: "37%",
      text: "of software spending is wasted due to underutilization.",
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
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      percentage: "26%",
      text: "more profitability for digitally mature firms compared to peers.",
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
  ];
  const services = [
    {
      title: "CMS Solutions",
      imageSrc: "/image.jpg",
      description:
        "Manage and publish your digital content effortlessly with our Content Management System (CMS) solutions. Our platform allows you to create, edit, and organize content, providing an intuitive interface for content creators and administrators.",
      example:
        "A media company used our CMS to revamp their website, leading to a 40% increase in user engagement through more efficient content management.",
    },
    {
      title: "Survey Design Tools",
      imageSrc: "/image.jpg",
      description:
        "Design and deploy surveys to effectively reach and interact with your audience. Our survey tools offer customizable templates, real-time analytics, and easy integration to help you gather valuable insights and feedback.",
      example:
        "A marketing firm used our survey design tools to collect customer feedback, which guided their product development and increased customer satisfaction by 30%.",
    },
    {
      title: "Online Forms Solutions",
      imageSrc: "/image.jpg",
      description:
        "Create and manage online forms tailored to your business needs. Our online forms solution offers drag-and-drop functionality, automated data collection, and seamless integration with other business tools.",
      example:
        "A recruitment agency used our online forms to streamline their job application process, reducing manual data entry time by 50% and improving applicant tracking.",
    },
    {
      title: "Booking Management App",
      imageSrc: "/image.jpg",
      description:
        "Schedule and manage appointments effortlessly with our booking management app. Designed for consultations and client interactions, our app provides an intuitive interface for booking, reminders, and calendar integration.",
      example:
        "A consulting firm integrated our booking management app, resulting in a 20% increase in client bookings and a significant reduction in scheduling conflicts.",
    },
    {
      title: "Online Meeting Software",
      imageSrc: "/image.jpg",
      description:
        "Facilitate seamless virtual meetings with our online meeting software. Our solution supports video conferencing, screen sharing, and real-time collaboration, ensuring smooth and productive online interactions.",
      example:
        "A remote team adopted our online meeting software, leading to a 35% increase in meeting efficiency and better team collaboration across different locations.",
    },
    {
      title: "Event Management Software",
      imageSrc: "/image.jpg",
      description:
        "Manage your events from start to finish with our comprehensive event management software. From planning and coordination to execution and feedback, our solution handles all aspects of event management with ease.",
      example:
        "An event planning company used our software to streamline their operations, resulting in a 50% reduction in planning time and enhanced event execution.",
    },
    {
      title: "Invoice Management Solutions",
      imageSrc: "/image.jpg",
      description:
        "Simplify your invoicing process with our robust invoice management solutions. Our software helps you create, send, and track invoices efficiently, ensuring timely payments and accurate financial records.",
      example:
        "A small business implemented our invoice management solution, improving their invoicing process and reducing payment delays by 40%.",
    },
    {
      title: "Billing Solutions",
      imageSrc: "/image.jpg",
      description:
        "Optimize your billing operations with our end-to-end billing solution. Our software covers all aspects of billing, from invoicing to payment processing, and integrates seamlessly with your financial systems.",
      example:
        "A service provider adopted our billing solution, which streamlined their billing process and reduced billing errors by 30%, improving cash flow management.",
    },
    {
      title: "Task Management Tools",
      imageSrc: "/image.jpg",
      description:
        "Enhance productivity with our collaborative task management tools. Designed for individuals and teams, our solution helps you track tasks, set priorities, and collaborate effectively to achieve your goals.",
      example:
        "A project team used our task management tools to organize their workflow, resulting in a 25% increase in project completion rates and improved team coordination.",
    },
  ];

  return (
    <div className="">
      <Navbar slides={slides} />
      <main className="w-full">
        {/* Software Services Overview */}
        <section className="container w-full mx-auto py-12 text-black px-10 sm:px-20 p-5 ">
          <p className="text-center mt-10 font-nunito text-4xl">
            Elevate business success through powerful software solutions
          </p>
          <p className="my-10 sm:m-5 md:m-20 text-justify space-y-7 text-black font-exo">
            Cutting-edge software is reshaping industries, offering unparalleled
            innovation and efficiency. Modern businesses are adopting
            comprehensive software platforms that simplify workflows, enhance
            decision-making, and foster growth. By embracing the latest in
            software technology, companies can deliver superior results, boost
            operational effectiveness, and stay ahead in a rapidly evolving
            market.
          </p>
          <div className="pb-12 text-black px-4 sm:px-0">
            <h2 className="text-2xl text-center mb-8 font-nunito">
              Current Statistics & Trends in Software Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softwareDataPoints.map((point) => (
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
        <div className="bg-black text-white">
          <div className="container  mx-auto p-6">
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
              {/* Left Side */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">
                  Software Product Offering
                </h2>
                <p className="text-gray-200">
                  Solve your business challenges with our value-added software
                  services across offerings from product software providers.
                </p>
              </div>

              {/* Right Side - Accordions */}
              <div className="flex-1">
                {services.map((service, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={1 + index}>
                        <AccordionTrigger>{service.title}</AccordionTrigger>
                        <AccordionContent>
                          {service.description}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                    {/* <p className=" leading-relaxed mt-2 font-nunito">
                      <strong>Example:</strong> {service.example}
                    </p>
                   </div>
                </div>
              ))}
            </div>
          </section> */}
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
                  CMS for a Leading Media House
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We partnered with a media company to deploy a customized CMS,
                  resulting in a 35% increase in content production efficiency
                  and improved audience engagement.
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
                  Survey Tool Enhancement for Market Research
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A market research firm used our survey design tool to gather
                  data more effectively, resulting in a 50% improvement in
                  survey completion rates and more accurate insights.
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
                  Appointment Scheduling Success
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A healthcare provider implemented our booking system to
                  streamline appointment scheduling, leading to a 40% reduction
                  in no-shows and improved patient satisfaction.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>
              {/* Case Study 4
              <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Forms for Business Needs
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our online form solutions helped a consulting firm automate
                  client onboarding, reducing paperwork by 70% and enhancing
                  customer satisfaction.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>

              
              {/* Case Study 6 */}
              {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Online Meeting Success Story
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A global corporation adopted our online meeting software,
                  resulting in a 25% increase in team collaboration and a
                  significant reduction in travel costs.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>  */}

              {/* Case Study 7 */}
              {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Event Management Software Implementation
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our event management solution enabled a major conference
                  organizer to manage events seamlessly, improving attendee
                  experience and operational efficiency.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div> */}

              {/* Case Study 8 */}
              {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Invoice Management Success
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A small business implemented our invoice management system,
                  reducing overdue payments by 40% and streamlining their
                  accounting processes.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div> */}

              {/* Case Study 9 */}
              {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Billing Solutions for SaaS
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A SaaS company used our billing solutions to automate their
                  subscription billing, reducing manual errors by 60% and
                  increasing revenue recognition accuracy.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div> */}

              {/* Case Study 10 */}
              {/* <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Task Management for Teams
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A marketing team used our task management tool to coordinate
                  campaign activities, reducing project delays by 25% and
                  improving team collaboration.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>  */}
            </div>
          </div>
        </section>

        <div className=""></div>
      </main>
    </div>
  );
}
