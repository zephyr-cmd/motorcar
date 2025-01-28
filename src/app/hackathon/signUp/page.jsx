"use client";

import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { hackTeamAction } from "./formAction";
import { useRouter } from "next/navigation";

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

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

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
    <div className="min-h-fit bg-black rounded-2xl text-white">
      <div className="max-w-7xl mx-auto sm:px-4">
        <motion.form
          onSubmit={handleSubmit}
          className="py-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="w-full space-y-4">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="name" className="block text-sm mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                      disabled={pending}
                      required
                      aria-required="true"
                      aria-invalid={state?.errors?.name ? "true" : "false"}
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm mb-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="contactNumber"
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                      disabled={pending}
                      aria-invalid={
                        state?.errors?.contactNumber ? "true" : "false"
                      }
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                    disabled={pending}
                    required
                    aria-required="true"
                    aria-invalid={state?.errors?.email ? "true" : "false"}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <SubmitButton />
          <div>
            <p className="text-blue-700">
              Hurry! Only few slots are left. Do not miss this opportunity.
            </p>
          </div>

          {/* Error messages */}
          <div role="alert" aria-live="polite" className="min-h-[20px]">
            {Object.entries(state?.errors || {}).map(([key, error]) => (
              <p key={key} className="text-sm text-red-500">
                {error}
              </p>
            ))}
          </div>
        </motion.form>
      </div>

      {/* Loading overlay */}
      <AnimatePresence>
        {pending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-white/10 p-6 rounded-lg flex flex-col items-center gap-3">
              <motion.div
                className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <p className="text-sm text-gray-300">Registering your team...</p>
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
      className={`px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Registering..." : "Register Team"}
    </motion.button>
  );
}

// export default TeamSignUpForm;
