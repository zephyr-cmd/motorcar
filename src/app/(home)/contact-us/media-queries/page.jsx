import {
  ArrowLeft,
  HandHeart,
  Mail,
  MessagesSquareIcon,
  SatelliteDishIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function mediaQueries() {
  return (
    <div id="">
      <div className="min-h-screen bg-gradient-to-r from-gray-950 via-gray-950 to-gray-900 text-white font-sans relative">
        {/* <div className="bg-gradient-to-r from-gray-950 via-gray-950 to-gray-900 text-white w-full min-h-screen relative flex items-center justify-between px-16"> */}
        {/* Background Image */}
        <div className="fixed hidden lg:block inset-0 w-full h-full">
          <Image
            src={"/images/contact-us/media-queries.jpg"}
            alt="Background"
            fill
            priority={true}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950/90 lg:to-gray-900/30" />
          {/* <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-black lg:via-black/90 lg:to-black/30" /> */}
        </div>
        <div className="relative z-10 min-h-screen flex-1 max-w-2xl space-y-12 w-full lg:w-1/2 flex flex-col px-6 py-8 md:px-12 md:py-12 lg:p-32">
          <Link
            href={"/contact-us"}
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-300 group"
          >
            <span className="material-symbols-outlined text-lg transform group-hover:-translate-x-1 transition-transform duration-300">
              <ArrowLeft />
            </span>
            <span className="text-sm font-medium tracking-wide">BACK</span>
          </Link>
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <SatelliteDishIcon className=" text-lg text-blue-500 " />
              </div>
              <h1 className="text-sm font-semibold text-slate-300 tracking-widest">
                PRESS AND MEDIA
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-slate-200 text-lg leading-relaxed">
                Thanks for reaching out — we&apos;re ready to connect you with
                the right voices. For all global media or press-related
                inquiries, please contact us at the email below. Our team will
                ensure you're connected with the appropriate spokesperson.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-500 ">
              <div className="space-y-4">
                <h3 className="text-primary-400 text-xl font-medium">
                  Aditya V.
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 group">
                    {/* <span className="material-symbols-outlined text-primary-500 text-lg">
                      Mail :
                    </span> */}
                    <Mail className="text-primary-500 text-lg" />
                    <Link
                      href="mailto:aditya.v@adalabs.in"
                      className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      aditya.v@adalabs.in
                    </Link>
                  </div>
                  {/* <div className="flex items-center space-x-3 group">
                    <span className="material-symbols-outlined text-primary-500 text-lg">
                      phone
                    </span>
                    <a
                      href="tel:+912267789999"
                      className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      +91 22 6778 9999
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <Link
            href={"/"}
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-slate-500 text-slate-300 font-medium rounded-full hover:bg-slate-600 hover:border-slate-400 transition-all duration-300 transform hover:scale-105 w-fit"
          >
            Back to Home
          </Link>
        </div>
        {/* <div className="hidden flex-1 h-full md:flex items-center justify-end">
          <div className="relative w-full max-w-lg">
            <Image
              src="/newsChannel.jpg"
              alt="Professional woman with microphone conducting interview"
              fill
              className="object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900 opacity-30 rounded-lg"></div>
          </div>
        </div> */}
        {/* Alternative Image Section with Fixed Dimensions */}
        {/* <div className="hidden lg:flex flex-1 items-center justify-end">
          <div className="relative max-w-lg">
            <Image
              src="/newsChannel.jpg"
              alt="Professional woman with microphone conducting interview"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900 opacity-30 rounded-lg "></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
