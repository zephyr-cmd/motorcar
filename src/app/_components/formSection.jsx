"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { createCTA } from "@/app/_components/_serverActions";
import { SubmitButton } from "@/app/_components/submit-button";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { ArrowRightIcon } from "@/components/icons/icons2";
const initialState = {
  message: "",
};

const ContactForm = () => {
  const [state, formAction] = useFormState(createCTA, initialState);
  const formRef = useRef(null);
  // console.log("L-17, state-------------->", state);
  useEffect(() => {
    let firstTimeout;
    let secondTimeout;

    if (state.status) {
      toast(`${state.message}`, {});

      firstTimeout = setTimeout(() => {
        secondTimeout = setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }, 2000);
      }, 2000);
    } else {
      toast(`${state.message}`, {});
    }

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, [state]); // Add `toast` to the dependencies if it comes from outside the component or ensure it's stable
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-black py-10">
      {/* <Image
        src="/logo.svg"
        alt="Descriptive Alt Text"
        width={600} // Use actual image dimensions or adjust as needed
        height={400} // Use actual image dimensions or adjust as needed
        layout="responsive"
        className=" bg-blue-700 p-5"
      /> */}
      {/* <h2 className="font-extrabold flex py-10 justify-center items-center text-2xl sm:text-4xl">
        #EngineeringTomorrow
      </h2> */}
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {/* Image Part */}
        <div className="w-full md:w-1/2 flex flex-col p-5 space-y-7 flex-shrink-0">
          <h2 className="font-extrabold text-3xl">Let&apos;s talk</h2>
          <p>
            Reach out to us today and find out how we can assist you in making a
            better world.
          </p>
        </div>

        {/* Form Part */}
        <div className="w-full md:w-1/2 flex-grow mt-6 md:mt-0">
          <form
            ref={formRef}
            action={formAction}
            className="text-base flex flex-col gap-5 p-4"
          >
            {/* <input type="hidden" name="Region" value="India" /> */}

            <label htmlFor="first name">
              First name
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="last name">
              Last name
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                id="email"
                type="text"
                name="email"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="company">
              Company
              <input
                id="company"
                type="text"
                name="company"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="industry">
              Industry
              <input
                id="industry"
                type="text"
                name="industry"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              >
                {/* <option value="" className="text-black">
                  Select an option
                </option>
                <option value="Automotive" className="text-black">
                  Automotive
                </option>
                <option value="Aerospace" className="text-black">
                  Aerospace
                </option>
                <option
                  value="Industrial Heavy Machinery"
                  className="text-black"
                >
                  Industrial Heavy Machinery
                </option>
                <option value="Other" className="text-black">
                  Other
                </option> */}
              </input>
            </label>

            {/* <label htmlFor="area-of-interest">
            Area of interest
            <select
              id="area-of-interest"
              name="Area of Interest"
              required
              className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
            >
              <option value="" className="text-black">
                Select an option
              </option>
              <option value="Services" className="text-black">
                Services
              </option>
              <option
                value="Software products - Siemens Digital Industries Software"
                className="text-black"
              >
                Software products - Siemens Digital Industries Software
              </option>
              <option
                value="Software products - Dassault Systèmes"
                className="text-black"
              >
                Software products - Dassault Systèmes
              </option>
              <option value="Software products - PTC" className="text-black">
                Software products - PTC
              </option>
              <option
                value="Software products – Hexagon D&amp;E"
                className="text-black"
              >
                Software products – Hexagon D&amp;E
              </option>
              <option value="Other" className="text-black">
                Other
              </option>
            </select>
          </label> */}

            <label htmlFor="message">
              Message
              <span className="text-sm block">
                Please specify the product or service you are enquiring about,
                if any
              </span>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              ></textarea>
            </label>

            <label htmlFor="acknowledge" className="flex gap-4 items-center">
              <input
                id="acknowledge"
                name="I acknowledge"
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
            </label>

            <div className="text-base flex justify-end mt-8">
              <SubmitButton
                variant="link"
                buttonName={
                  <div className="flex gap-2 text-lg items-center">
                    Submit <ArrowRightIcon />
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
