import {
  BoxIcon,
  CalendarCogIcon,
  ChevronRight,
  SatelliteDishIcon,
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div id="webcrumbs">
      <div className="bg-gradient-to-r from-gray-950 via-gray-950 to-gray-900 text-white w-full min-h-screen relative p-8 ">
        {/* <button className="absolute top-8 right-8 rounded-full p-2 border border-gray-700 hover:bg-gray-900 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
          <div className="md:col-span-6 lg:col-span-6">
            <h1 className="text-6xl md:text-7xl mb-6 font-noto-sans font-thin">
              {/* What's on your mind? */}
              {/* Looking for something specific? */}
              Anything you'd like to talk about?
            </h1>
            {/* Next: "Add animation for this heading" */}
          </div>

          <div className="flex justify-center items-center md:col-span-5 lg:col-span-5">
            <p className="text-gray-300 text-2xl font-thin ">
              We're here to help! Let us know what you&apos;re looking for, and
              we&apos;ll ensure you&apos;re connected with the right team.
            </p>
            {/* Next: "Add a contact form beneath this text" */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <Link
            href={"/contact-us/request-for-services"}
            className="border border-gray-800 rounded-md p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors"
          >
            <BoxIcon className="material-symbols-outlined text-blue-500 mb-4 text-2xl" />
            <p className="font-medium">Request for Services</p>
            {/* Next: "Add a description and CTA button" */}
          </Link>
          <Link
            href={"/contact-us/media-queries"}
            className="border border-gray-800 rounded-md p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors"
          >
            <SatelliteDishIcon className="material-symbols-outlined text-blue-500 mb-4 text-2xl" />
            <p className="font-medium">Media Queries</p>
            {/* Next: "Add contact details for media" */}
          </Link>
          <Link
            href="https://cal.com/adalabs/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 rounded-md p-8 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors"
          >
            <CalendarCogIcon className="material-symbols-outlined text-blue-500 mb-4 text-2xl" />
            <p className="font-medium">Book an Appointment</p>
            {/* Next: "Add investor-specific content" */}
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-32 bg-black/5 p-8 rounded-md">
          <p className="text-gray-400 mb-6">
            Looking for something else ?{/* something else? */}
          </p>

          <div className="flex flex-col sm:flex-row w-full min-h-fit items-center justify-center gap-7 space-x-7">
            <Link
              href={"/contact-us/partnership"}
              className="flex items-center group cursor-pointer"
            >
              <p className="mr-2">Partnership</p>
              <div className="bg-gray-800 rounded-full p-1 group-hover:bg-blue-500 transition-colors">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            </Link>
            <Link
              href={"/contact-us/website-feedback"}
              className="flex items-center group cursor-pointer"
            >
              <p className="mr-2">Website feedback</p>
              <div className="bg-gray-800 rounded-full p-1 group-hover:bg-blue-500 transition-colors">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            </Link>
            <Link
              href={"/contact-us/csr"}
              className="flex items-center group cursor-pointer"
            >
              <p className="mr-2">CSR</p>
              <div className="bg-gray-800 rounded-full p-1 group-hover:bg-blue-500 transition-colors">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
