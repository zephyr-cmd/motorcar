import Link from "next/link";
import Subscribe from "./subscribe";
import { EnvelopeOpenIcon } from "@/components/icons/icons";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/socialMedia";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full p-5">
          <div className="flex flex-col gap-y-2">
            {/* <HospitalIcon className="text-[#c9ac5c] h-8 w-8" /> */}
            <p className="text-2xl font-bold">Adalabs & Co.</p>
            {/* <p className="text-sm sm:text-justify">Westend Marg, Saket, 110030</p>
          <p className="text-sm sm:text-justify">New Delhi, India</p> */}
            <p className="flex flex-col mt-5 gap-y-2">
              <Link
                href={"mailto:info@adalabs.in"}
                aria-label="mail to : info@adalabs.in"
                className="flex flex-row gap-2 items-center"
              >
                <EnvelopeOpenIcon className="h-5 w-5" textcolor="fill-white" />
                info@adalabs.in
              </Link>
              {/* <Link
              href={"tel:+91xxxxxxxxx"}
              aria-label="Phone Number +91-xxxxxx"
            >
              +91-XXXXXXXXXX
            </Link> */}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-y-2">
              {/* <p className="font-semibold text-lg">Menu</p> */}
              <Link
                className="hover:text-gray-300"
                href="/"
                aria-label="Go to Home"
              >
                Home
              </Link>
              <Link
                className="hover:text-gray-300"
                href="/coming-soon"
                aria-label="Blogs"
              >
                Blogs
              </Link>
              <Link
                className="hover:text-gray-300"
                href="/about-us"
                aria-label="About Us"
              >
                About Us
              </Link>
              <Link
                className="hover:text-gray-300"
                href="/contact-us "
                aria-label="contact-us"
              >
                Contact Us
              </Link>
              {/* <Link
              className="hover:text-gray-300"
              href="/coming-soon"
              aria-label="Contact Us"
            >
              Contact Us
            </Link> */}
            </div>
            <div className="flex flex-col gap-y-2">
              {/* <p className="font-semibold text-lg ">Utilities</p> */}
              <Link
                className="hover:text-gray-300"
                href="/hackathon"
                aria-label="hackathon"
              >
                Hackathon
              </Link>
              {/* <Link
                className="hover:text-gray-300"
                href="/coming-soon"
                aria-label="Careers"
              >
                Careers
              </Link> */}
              <Link
                className="hover:text-gray-300"
                href="/#locations"
                aria-label="locations"
              >
                Locations
              </Link>
            </div>
          </div>
          <Subscribe />
        </div>
        <div className="border-t border-gray-700 mt-8 pt-5 flex flex-col-reverse gap-7 md:flex-row lg:px-8 justify-between text-sm lg:text-lg mx-5">
          <div>
            <p>© 2025 Adalabs & Co. </p>
          </div>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
          <p>
            <span className="text-red-700">❤</span> from India
          </p>
        </div> */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com/adalabs.in/"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
            <Link
              href="https://www.instagram.com/adalabs.in/"
              aria-label="Instagram"
              target="_blank"
            >
              <InstagramIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
            <Link
              href="https://x.com/AdaLabsInfo"
              aria-label="Twitter"
              target="_blank"
            >
              <XIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/adalabs"
              aria-label="LinkedIn"
              target="_blank"
            >
              <LinkedinIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
