"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/icons2";
import { createCTA } from "@/app/_components/_serverActions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { SubmitButton } from "@/app/_components/submit-button";
import { useEffect, useState } from "react";
const initialState = {
  message: "",
};

const ContactForm = (params) => {
  const [state, formAction] = useFormState(createCTA, initialState);
  const industry = params?.params?.industry || "";
  // console.log("L-18, Industry-------------->", industry);
  const router = useRouter();
  useEffect(() => {
    // console.log("L-21, state-------------->", state);
    let secondTimeout;
    if (state.status) {
      toast(`${state.message}`, {
        description: "Going to redirect to the Home page",
      });
      secondTimeout = setTimeout(() => {
        router.push(`/services/${industry}`);
      }, 2000);
    } else {
      toast(`${state.message}`);
    }
    return () => {
      clearTimeout(secondTimeout);
    };
  }, [state, router, industry]);

  const industryName = industry.replace(/-/g, " ");
  return (
    <div className="text-white font-sans">
      <div className="div1|| absolute min-h-screen w-full flex flex-col md:flex-row">
        <Image
          src={
            "https://unsplash.com/photos/4PU-OC8sW98/download?force=true&w=1920"
          }
          alt={`Slide`}
          fill
          priority={true}
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div className="div2|| absolute min-h-screen w-full flex flex-col md:flex-row ">
        {/* Form Part */}
        <div className="w-full lg:w-1/2 flex-grow gap-7 pt-7 pl-5 sm:pl-7 bg-black md:bg-gradient-to-r from-black to-black ">
          <Link
            href={`/services/${industry}`}
            className="flex flex-row gap-2 text-base justify-start items-center"
          >
            <ArrowLeftIcon /> Back
          </Link>
          <div className="p-10 md:pl-20 pt-5">
            <div className="space-y-7 ">
              <p className="text-xl font-exo uppercase">
                Connect with an expert - {industryName}
              </p>
              <p className="text-xl font-sans">
                We just need a few details from your side to connect you with
                the right person.
              </p>
            </div>
            <form
              action={formAction}
              className="text-base flex flex-col gap-5 pt-16 sm:pt-2 lg:pt-4"
            >
              {/* <input type="hidden" name="Region" value="India" /> */}

              <div className=" flex flex-col sm:flex-row gap-7 w-full">
                <label className="w-full sm:w-1/2" htmlFor="first-name">
                  First name
                  <input
                    id="first-name"
                    type="text"
                    name="firstName"
                    required
                    className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
                  />
                  <p className="text-sm text-red-700" aria-live="polite">
                    {state?.errors?.firstName}
                  </p>
                </label>

                <label className="w-full sm:w-1/2" htmlFor="last-name">
                  Last name
                  <input
                    id="last-name"
                    type="text"
                    name="lastName"
                    required
                    className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
                  />
                  <p className="text-sm text-red-700" aria-live="polite">
                    {state?.errors?.lastName}
                  </p>
                </label>
              </div>

              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="text"
                  name="email"
                  required
                  className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
                />
                <p className="text-sm text-red-700" aria-live="polite">
                  {state?.errors?.email}
                </p>
              </label>
              <label htmlFor="industry">
                Industry
                <select
                  id="industry"
                  type="text"
                  name="industry"
                  required
                  className="w-full text-base block bg-black py-2 border-b border-current focus:outline-none focus:border-teal"
                >
                  <option value="">Select an option</option>
                  <option value="capital-markets">Capital markets</option>
                  <option value="retail">Retail</option>
                  <option value="communications">
                    Communications, Media, Information Services
                  </option>
                  <option value="consumer">
                    Consumer goods and Distribution
                  </option>
                  <option value="engergy">Energy, Resources, Utilities</option>
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
                <p className="text-sm text-red-700" aria-live="polite">
                  {state?.errors?.industry}
                </p>
              </label>
              <label htmlFor="message">
                Message
                <span className="text-sm block">
                  Please specify the product or service you are enquiring about,
                  if any
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  cols="50"
                  required
                  className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
                ></textarea>
                <p className="text-sm text-red-700" aria-live="polite">
                  {state?.errors?.message}
                </p>
              </label>

              <label htmlFor="acknowledge" className="flex gap-4 items-center">
                <input
                  id="acknowledge"
                  name="acknowledge"
                  type="checkbox"
                  value="Yes"
                  required
                  className="block"
                />
                <span className="text-sm">
                  I acknowledge that AdaLabs & Co. may use the information I
                  provide in this form, to respond to my request, and process it
                  as outlined in the{" "}
                  <Link
                    href="/in/privacy-policy"
                    target="_blank"
                    className="underline"
                  >
                    Privacy policy
                  </Link>
                </span>
                <p className="text-sm text-red-700" aria-live="polite">
                  {state?.errors?.acknowledge}
                </p>
              </label>

              <div className="text-base flex justify-end items-center mt-8">
                <SubmitButton
                  variant="link"
                  buttonName={
                    <div className="flex gap-2 text-base text-white">
                      Submit <ArrowRightIcon />
                    </div>
                  }
                />
              </div>
            </form>
          </div>
        </div>

        {/* Image Part */}
        <div className="img|| hidden md:flex lg:w-1/2 bg-gradient-to-r from-black to-black/80 flex-shrink-0">
          {/* <div className="absolute h-full w-full">
            <Image
              src={
                "https://unsplash.com/photos/YI_9SivVt_s/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8Mnx8MTcyMzc5NDkwNnw&force=true&w=1920"
              }
              alt={`Slide`}
              fill
              priority={true}
              style={{ objectFit: "cover", overflow: "hidden" }}
            />
          </div> */}
          {/* <div className="absolute h-full w-ful p-5 space-y-7 font-poppins">
            <h2 className="font-extrabold text-3xl">
              Connect with an expert -{props.industry}
            </h2>
            <p>
              We just need a few details from you first to connect you with the
              right person.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
