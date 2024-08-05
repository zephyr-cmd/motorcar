// components/ContactForm.js
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 text-black">
      {/* <Image
        src="/logo.svg"
        alt="Descriptive Alt Text"
        width={600} // Use actual image dimensions or adjust as needed
        height={400} // Use actual image dimensions or adjust as needed
        layout="responsive"
        className=" bg-blue-700 p-5"
      /> */}
      <h2 className="font-extrabold flex py-10 justify-center items-center text-5xl">
        #EngineeringTomorrow
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap border border-indigo-950">
        {/* Image Part */}
        <div className="w-full md:w-1/2 flex flex-col p-5 space-y-7 flex-shrink-0">
          <h2 className="font-extrabold text-3xl">Let&apos;s get in touch</h2>
          <p>
            Reach out to us today and find out how we can assist you in making a
            better world.
          </p>
        </div>

        {/* Form Part */}
        <div className="w-full md:w-1/2 flex-grow mt-6 md:mt-0">
          <form
            action="https://go.pardot.com/l/520631/2022-07-22/k7r42l"
            name="getintouch_custom_form"
            method="post"
            className="text-base  flex flex-col gap-5 p-4"
          >
            <input
              type="hidden"
              name="Form Referer Path"
              value="https://www.tatatechnologies.com/in?"
            />
            <input type="hidden" name="Region" value="India" />

            <label htmlFor="first-name">
              First name
              <input
                id="first-name"
                type="text"
                name="First Name"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="last-name">
              Last name
              <input
                id="last-name"
                type="text"
                name="Last Name"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                id="email"
                type="text"
                name="Email"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="company">
              Company
              <input
                id="company"
                type="text"
                name="Company"
                required
                className="w-full text-base block bg-transparent py-2 border-b border-current focus:outline-none focus:border-teal"
              />
            </label>

            <label htmlFor="industry">
              Industry
              <input
                id="industry"
                type="text"
                name="Industry"
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
              <option value="Industrial Heavy Machinery" className="text-black">
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
                name="Message"
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
              <button
                type="submit"
                className="flex items-center justify-end gap-2 bg-transparent cursor-pointer"
              >
                Submit
                <svg
                  className="block"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.558.558L11 6m0 0L5.558 11.442M11 6H0"
                    stroke="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
