"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { X, Plus, Sparkles, MoveLeftIcon, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import { hackTeamAction } from "./formAction";
import { useRouter } from "next/navigation";

const initialState = {
  errors: {},
  message: "",
};

export default function TeamRegistrationForm() {
  const [state, formAction] = useFormState(hackTeamAction, initialState);
  const [isTeamNameVerifying, setIsTeamNameVerifying] = useState(false);
  const [isTeamNameAvailable, setIsTeamNameAvailable] = useState(null);
  const [memberCount, setMemberCount] = useState(1);
  const teamNameDebounceTimerRef = useRef(null); // Reference for debounce timer
  const router = useRouter();
  const { pending } = useFormStatus();

  const verifyTeamName = async (name, signal) => {
    if (!name.trim()) {
      setIsTeamNameAvailable(null);
      return;
    }

    setIsTeamNameVerifying(true);
    try {
      const response = await fetch(`/api/v1/hackathon/fetch-team/${name}`, {
        cache: "no-store",
        signal, // Attach the abort signal
      });
      if (!response.ok) throw new Error("Verification failed");

      const { data } = await response.json();
      setIsTeamNameAvailable(!data?.exists);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Team name verification failed:", error);
        setIsTeamNameAvailable(false);
      }
    } finally {
      setIsTeamNameVerifying(false);
    }
  };

  const handleTeamNameChange = (e) => {
    const newTeamName = e.target.value;

    // Clear any existing debounce timer
    if (teamNameDebounceTimerRef.current) {
      clearTimeout(teamNameDebounceTimerRef.current);
    }

    // Set up a new timer
    const timer = setTimeout(() => {
      const controller = new AbortController(); // Create an abort controller
      verifyTeamName(newTeamName, controller.signal);
    }, 500);

    teamNameDebounceTimerRef.current = timer;
  };

  useEffect(() => {
    return () => {
      // Cleanup the timer on component unmount
      if (teamNameDebounceTimerRef.current) {
        clearTimeout(teamNameDebounceTimerRef.current);
      }
    };
  }, []);

  const addMember = () => {
    if (memberCount < 4) {
      setMemberCount((prev) => prev + 1);
    }
  };

  const removeMember = (index) => {
    if (memberCount > 1) {
      setMemberCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let redirectTimeout;
    // console.log("L-96, state--------------->", state);
    if (state.status === 201) {
      redirectTimeout = setTimeout(() => {
        router.push("/");
      }, 2000);
    }
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [state]);
  useEffect(() => {
    if (state.message) {
      toast(`${state.message}`, {
        // description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    }
  }, [state.message]);
  useEffect(() => {
    if (state?.errors) {
      toast(`${state?.errors?.members}`, {});
    }
  }, [state?.errors?.members]);

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-white/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/hackathon">
              <MoveLeftIcon className="size-8 text-blue-800" />
            </Link>
            <h1 className="text-base sm:text-lg font-medium">
              Team Registration
            </h1>
          </div>
          <h1 className=" text-lg sm:text-2xl font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ada Hacks
          </h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 pt-20">
        <motion.form
          action={formAction}
          className="py-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Team Name Input */}
          <motion.div
            className="max-w-md relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative">
              <input
                type="text"
                name="teamName"
                onChange={handleTeamNameChange}
                className={`w-full px-4 py-2 bg-white/5 border ${
                  isTeamNameVerifying === true
                    ? "border-blue-500"
                    : isTeamNameAvailable === true
                    ? "border-green-500"
                    : isTeamNameAvailable === false
                    ? "border-red-500"
                    : "border-white/10"
                } rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-lg font-medium placeholder-gray-500 pr-10`}
                placeholder="Enter Team Name"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {isTeamNameVerifying ? (
                  <motion.div
                    className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ) : isTeamNameAvailable === true ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : null}
              </div>
            </div>
            {isTeamNameAvailable === false && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-xs text-red-400"
              >
                Team name already exists
              </motion.p>
            )}
          </motion.div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {Array.from({ length: memberCount }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-800" />
                      <span className="text-sm text-gray-400">
                        Member {index + 1}
                      </span>
                    </div>
                    {memberCount > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMember(index)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                        disabled={pending}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name={`member${index}.name`}
                          placeholder="Name *"
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                          disabled={pending}
                        />
                      </div>
                      <input
                        type="tel"
                        name={`member${index}.contactNumber`}
                        placeholder="Mobile Number"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                        disabled={pending}
                      />
                    </div>

                    <input
                      type="email"
                      name={`member${index}.email`}
                      placeholder="Email *"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                      disabled={pending}
                    />

                    <input
                      type="text"
                      name={`member${index}.college`}
                      placeholder="College"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                      disabled={pending}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name={`member${index}.city`}
                        placeholder="City"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                        disabled={pending}
                      />
                      <input
                        type="text"
                        name={`member${index}.state`}
                        placeholder="State"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                        disabled={pending}
                      />
                    </div>

                    <div className="flex items-center gap-2 hover:bg-white/5 p-2 rounded-lg transition-colors">
                      <input
                        type="radio"
                        name="spoc"
                        value={index}
                        className="w-4 h-4 text-blue-800 bg-transparent border-white/20 focus:ring-blue-800"
                        disabled={pending}
                      />
                      <span className="text-sm text-gray-400">Team SPOC</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {memberCount < 4 && (
            <motion.button
              type="button"
              onClick={addMember}
              disabled={pending}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full md:w-auto px-6 py-3 border border-white/10 rounded-lg text-sm text-gray-400 flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              <Plus size={16} />
              Add Member
            </motion.button>
          )}
          <SubmitButton />
          {/* errors & messages */}
          <p className="text-sm text-red-700" aria-live="polite">
            {state?.message}
          </p>
          <p className="text-sm text-purple-700">{state?.errors?.members}</p>
        </motion.form>
      </div>

      {pending && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
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
        </div>
      )}
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
