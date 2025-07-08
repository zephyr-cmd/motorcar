"use client";
import { createCTA } from "@/app/_components/_serverActions";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { SubmitButtonNew } from "@/app/_components/submit-buttonNew";
import { useActionState } from "react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { contactArray } from "@/app/(home)/contact-us/contactType";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const ContactForm = () => {
  const [state, formAction] = useFormState(createCTA, initialState);
  const params = useParams();
  const router = useRouter();

  const contactTypeName = params?.contactType || "connect-with-an-expert";
  const [contactData, setContactData] = useState(null);

  // Effect to update contactData based on contactTypeName
  useEffect(() => {
    const selectedData = contactArray.find(
      (item) => item.id === contactTypeName
    );
    setContactData(selectedData || null);
  }, [contactTypeName]);

  // Handle toast and redirection
  useEffect(() => {
    let secondTimeout;
    if (state.status) {
      toast(`${state.message}`, {
        description: "Going to redirect to the Home page",
      });
      secondTimeout = setTimeout(() => {
        router.push(`/contact-us`);
      }, 2000);
    } else if (state.message) {
      toast(`${state.message}`);
    }
    return () => {
      clearTimeout(secondTimeout);
    };
  }, [state, router]);

  // const readableTitle = contactTypeName.replace(/-/g, " ");
  // console.log("L-52, Contact Type Name:", contactData);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-950 via-gray-950 to-gray-900 text-white font-sans relative">
      {/* Background Image */}
      <div className="fixed hidden lg:block inset-0 w-full h-full">
        <Image
          src={
            contactData?.image ||
            "https://unsplash.com/photos/4PU-OC8sW98/download?force=true&w=1920"
          }
          alt="Background"
          fill
          priority={true}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-gray-950 lg:via-gray-950/90 lg:to-gray-900/30" />
        {/* <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-black lg:via-black/90 lg:to-black/30" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-fit flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
          {/* Back Button */}
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 group mb-12"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Back
            </span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide flex flex-row">
              {/* Connect with an expert */}
              {contactData?.name && (
                <span className="block text-xl md:text-2xl text-slate-300 font-normal mt-2 capitalize">
                  {contactData?.name}
                </span>
              )}
              {contactData?.bio && (
                <span className="block text-xl md:text-2xl text-slate-300 font-normal mt-2 capitalize">
                  {" : "} {contactData?.bio}
                </span>
              )}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {contactData?.description && (
                <span>{contactData?.description}</span>
              )}
            </p>
          </div>

          {/* Form */}
          <form action={formAction} className="space-y-8 flex-1">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="w-full">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-white mb-3 uppercase tracking-wide"
                >
                  First name *
                </label>
                <input
                  id="first-name"
                  type="text"
                  name="firstName"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-slate-600 px-0 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-0 transition-colors duration-300"
                  placeholder="Enter your first name"
                />
                {state?.errors?.firstName && (
                  <p className="text-red-400 text-sm mt-2" aria-live="polite">
                    {state.errors.firstName}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-white mb-3 uppercase tracking-wide"
                >
                  Last name *
                </label>
                <input
                  id="last-name"
                  type="text"
                  name="lastName"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-slate-600 px-0 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-0 transition-colors duration-300"
                  placeholder="Enter your last name"
                />
                {state?.errors?.lastName && (
                  <p className="text-red-400 text-sm mt-2" aria-live="polite">
                    {state.errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-3 uppercase tracking-wide"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-0 border-b-2 border-slate-600 px-0 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-0 transition-colors duration-300"
                placeholder="Enter your email address"
              />
              {state?.errors?.email && (
                <p className="text-red-400 text-sm mt-2" aria-live="polite">
                  {state.errors.email}
                </p>
              )}
            </div>

            {/* Industry */}
            <div className="w-full">
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-white mb-3 uppercase tracking-wide"
              >
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                required
                className="w-full bg-transparent border-0 border-b-2 border-slate-600 px-0 py-3 text-blue-500 focus:outline-none focus:border-white focus:ring-0 transition-colors duration-300 appearance-none"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  className="text-blue-800 font-bold bg-transparent"
                >
                  Select your industry
                </option>
                <option value="capital-markets">Capital markets</option>
                <option value="retail">Retail</option>
                <option value="communications">
                  Communications, Media, Information Services
                </option>
                <option value="consumer">
                  Consumer goods and Distribution
                </option>
                <option value="energy">Energy, Resources, Utilities</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="banking">Banking</option>
                <option value="life-sciences">Life sciences</option>
                <option value="travel">Travel</option>
                <option value="high-tech">High tech</option>
                <option value="insurance">Insurance</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="public-service">Public services</option>
                <option value="logistics">Logistics</option>
                <option value="others">Others</option>
              </select>
              {state?.errors?.industry && (
                <p className="text-red-400 text-sm mt-2" aria-live="polite">
                  {state.errors.industry}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-3 uppercase tracking-wide"
              >
                Message *
              </label>
              <p className="text-sm text-slate-400 mb-3">
                Please specify the product or service you are enquiring about,
                if any
              </p>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-0 border-b-2 border-slate-600 px-0 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-white focus:ring-0 transition-colors duration-300 resize-none"
                placeholder="Enter your message..."
              />
              {state?.errors?.message && (
                <p className="text-red-400 text-sm mt-2" aria-live="polite">
                  {state.errors.message}
                </p>
              )}
            </div>

            {/* Acknowledgment */}
            <div className="w-full">
              <label
                htmlFor="acknowledge"
                className="flex items-start gap-4 cursor-pointer"
              >
                <input
                  id="acknowledge"
                  name="acknowledge"
                  type="checkbox"
                  value="Yes"
                  required
                  className="w-5 h-5 text-white bg-transparent border-2 border-slate-600 rounded focus:ring-white focus:ring-2 focus:ring-offset-0 checked:bg-white checked:border-white mt-1"
                />
                <span className="text-sm text-slate-300 leading-relaxed">
                  I acknowledge that Iris & Co. may use the information I
                  provide in this form, to respond to my request, and process it
                  as outlined in the{" "}
                  <Link
                    href="/in/privacy-policy"
                    target="_blank"
                    className="text-white underline hover:text-slate-300 transition-colors"
                  >
                    Privacy policy
                  </Link>
                </span>
              </label>
              {state?.errors?.acknowledge && (
                <p className="text-red-400 text-sm mt-2" aria-live="polite">
                  {state.errors.acknowledge}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-start pt-6">
              <SubmitButtonNew
                // variant="link"
                buttonName={
                  <div className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-slate-500 text-slate-300 font-medium rounded-full hover:bg-slate-600 hover:border-slate-400 transition-all duration-300 transform hover:scale-105">
                    <span className="font-medium">Submit</span>
                  </div>
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
