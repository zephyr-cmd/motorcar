import Navbar from "@/app/_components/navbar";
import Navbar2 from "@/app/_components/navbar2";
import {
  ArrowLeft,
  BoxIcon,
  CalendarCogIcon,
  ChevronRight,
  SatelliteDishIcon,
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  const slides = [
    {
      type: "image",
      // src: "https://unsplash.com/photos/BN7UlHMejko/download?force=true&w=1920",
      // src: "https://unsplash.com/photos/8oni9vTWj7U/download?force=true&w=1920",
      src: "/images/contact-us/hero.jpg",
      // heading: "Looking for tailored technology services? ",
      // description:
      //   "Share your requirements and let our expert team deliver innovative, scalable, and reliable IT solutions that drive real business results.",
      heading: "contact us",
      description: "Anything you'd like to talk about?",
      buttonText: "Request for Service",
      buttonLink: "/contact-us/request-for-services",
    },
  ];
  return (
    <div id="webcrumbs">
      <Navbar2 slides={slides} />
      <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white w-full min-h-screen relative p-8">
        {/* <Link
          href="/contact-us"
          className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 group mb-12 mt-8"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm font-medium tracking-wide uppercase">
            Back
          </span>
        </Link> */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 sm:mb-0 sm:my-16">
          {/* <div className="md:col-span-6 lg:col-span-6">
            <h1 className="text-6xl md:text-7xl font-light mb-6">
              What's on your mind?
              Looking for something specific?
              Anything you'd like to talk about?
            </h1>
          </div> */}

          <div className="flex justify-center items-center md:col-span-7 lg:col-span-7">
            <p className="text-gray-300 text-2xl font-sans ">
              We're here to help! Let us know what you&apos;re looking for, and
              we&apos;ll ensure you&apos;re connected with the right team.
            </p>
            {/* Next: "Add a contact form beneath this text" */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <Link
            href={"/contact-us/request-for-services"}
            aria-label="Request for Services"
            className="border border-gray-800 rounded-md p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors"
          >
            <BoxIcon className="material-symbols-outlined text-blue-500 mb-4 text-2xl" />
            <p className="font-medium">Request for Services</p>
            {/* Next: "Add a description and CTA button" */}
          </Link>
          <Link
            href={"/contact-us/media-queries"}
            aria-label="Media Queries"
            className="border border-gray-800 rounded-md p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors"
          >
            <SatelliteDishIcon className="material-symbols-outlined text-blue-500 mb-4 text-2xl" />
            <p className="font-medium">Media Queries</p>
            {/* Next: "Add contact details for media" */}
          </Link>
          <Link
            href="https://cal.com/adalabs/15min"
            target="_blank"
            aria-label="Book an Appointment"
            rel="noopener noreferrer"
            className="border border-gray-800 rounded-md p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors"
          >
            <CalendarCogIcon className="material-symbols-outlined text-blue-500 mb-4 text-2xl" />
            <p className="font-medium">Book an Appointment</p>
            {/* Next: "Add investor-specific content" */}
          </Link>
        </div>

        <div className="flex flex-col items-start justify-start md:items-center md:justify-center p-5 mt-28 bg-black/5 w-full rounded-md">
          <p className="text-gray-400 mb-6">Looking for something else?</p>

          <div className="flex flex-col sm:flex-row w-full items-start justify-start gap-5 sm:px-5">
            {[
              {
                href: "/contact-us/website-feedback",
                label: "Website feedback",
              },
              { href: "/contact-us/partnership", label: "Partnership" },
              { href: "/contact-us/csr", label: "CSR" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="group flex justify-start sm:justify-center cursor-pointer w-full"
              >
                <span className="mr-2">{item.label}</span>
                <div className="bg-gray-800 rounded-full p-1 group-hover:bg-blue-500 transition-colors flex items-center justify-center">
                  <ChevronRight className="h-4 w-4 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
