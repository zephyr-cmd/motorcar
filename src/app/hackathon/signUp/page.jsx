"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { hackTeamAction } from "./formAction";
import { useRouter } from "next/navigation";
import { Users, Trophy, Timer, Star, CheckCircle } from "lucide-react";

const initialState = {
  errors: {},
  message: "",
  formData: {
    name: "",
    email: "",
    contactNumber: "",
  },
};

export default function TeamSignUpForm() {
  const [state, formAction] = useFormState(hackTeamAction, initialState);
  const router = useRouter();
  const [formData, setFormData] = useState(initialState.formData);
  const { pending } = useFormStatus();
  const [registrationCount, setRegistrationCount] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistrationCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Client-side validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (
      formData.contactNumber &&
      !/^\+?[\d\s-]{10,}$/.test(formData.contactNumber)
    ) {
      errors.contactNumber = "Invalid phone number";
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((error) => toast.error(error));
      return;
    }
    formAction(new FormData(e.target));
  };

  useEffect(() => {
    let redirectTimeout;

    if (state) {
      if (state.message?.length > 1) {
        toast.success(state.message);
      }

      if (state.status === 201) {
        redirectTimeout = setTimeout(() => {
          router.push("/");
        }, 4500);
      }

      if (state.errors?.members) {
        toast.error(state.errors.members);
      }
    }

    return () => {
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
    };
  }, [state, router]);

  return (
    <div className="min-h-fit bg-gradient-to-br from-black to-blue-900 rounded-2xl text-white p-6">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-8">
        <h1 className=" text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Join the Ultimate Hackathon Challenge
        </h1>
        <p className="text-sm sm:text-lg text-gray-300">
          Showcase Your Skills, Win Amazing Prizes, Launch Your Career
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
          <div className="text-base sm:text-xl font-bold">
            {registrationCount}+
          </div>
          <div className="text-sm text-gray-300">Participants</div>
        </div>
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
          <div className="text-base sm:text-xl font-bold">₹10K+</div>
          <div className="text-sm text-gray-300">In Prizes</div>
        </div>
        <div className="bg-white/10 p-4 rounded-lg text-center">
          <Timer className="w-6 h-6 mx-auto mb-2 text-red-400" />
          <div className="text-base sm:text-xl font-bold">7days</div>
          <div className="text-sm text-gray-300">Duration</div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          {[
            "Free Registration",
            "Industry Mentors",
            "Networking Opportunities",
            "Certificate of Participation",
          ].map((benefit, i) => (
            <div key={i} className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition-all"
                    disabled={pending}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition-all"
                    disabled={pending}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition-all"
                  disabled={pending}
                  required
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Submit Button */}
        <div className="text-center space-y-4">
          <SubmitButton />
          <p className="text-sm text-gray-400">
            Limited spots available. Register now to secure your place!
          </p>
        </div>

        {/* Social Proof */}
        {/* <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>
            Trusted by {registrationCount}+ developers from top colleges
          </span>
        </div> */}

        {/* Error Messages */}
        <div role="alert" aria-live="polite" className="min-h-[20px]">
          {Object.entries(state?.errors || {}).map(([key, error]) => (
            <p key={key} className="text-sm text-red-400 text-center">
              {error}
            </p>
          ))}
        </div>
      </motion.form>

      {/* Loading Overlay */}
      <AnimatePresence>
        {pending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-white/10 p-8 rounded-lg flex flex-col items-center gap-4">
              <motion.div
                className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <p className="text-gray-300">Securing your spot...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-base font-semibold shadow-lg transition-all ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Securing Your Spot..." : "Register Now - It's Free!"}
    </motion.button>
  );
}
