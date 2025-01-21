"use client";
import { useState, useEffect } from "react";
import { X, Plus, Sparkles, MoveLeftIcon, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const TeamRegistrationForm = () => {
  const [errors, setErrors] = useState({});
  const [isTeamNameVerifying, setIsTeamNameVerifying] = useState(false);
  const [isTeamNameAvailable, setIsTeamNameAvailable] = useState(null);
  const [teamNameDebounceTimer, setTeamNameDebounceTimer] = useState(null);
  const [formData, setFormData] = useState({
    teamName: "",
    members: [
      {
        name: "",
        email: "",
        college: "",
        contactNumber: "",
        city: "",
        state: "",
      },
    ],
    spoc: "",
  });

  // ... keeping all the existing handlers and validation functions ...
  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSpocChange = (email) => setFormData({ ...formData, spoc: email });

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData({
        ...formData,
        members: [
          ...formData.members,
          {
            name: "",
            email: "",
            college: "",
            contactNumber: "",
            city: "",
            state: "",
          },
        ],
      });
    }
  };

  const removeMember = (index) => {
    if (formData.members.length > 1) {
      const newMembers = formData.members.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        members: newMembers,
        spoc:
          formData.spoc === formData.members[index].email ? "" : formData.spoc,
      });
    }
  };

  // Function to verify team name
  const verifyTeamName = async (name) => {
    if (!name.trim()) {
      setIsTeamNameAvailable(null);
      return;
    }

    setIsTeamNameVerifying(true);
    try {
      const response = await fetch(`/api/v1/hackathon/fetch-team/${name}`, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Verification failed");

      const { data } = await response.json();
      setIsTeamNameAvailable(!data?.exists);
    } catch (error) {
      console.error("Team name verification failed:", error);
      setIsTeamNameAvailable(false);
    } finally {
      setIsTeamNameVerifying(false);
    }
  };

  const handleTeamNameChange = (e) => {
    const newTeamName = e.target.value;
    setFormData({ ...formData, teamName: newTeamName });

    // Clear previous timer
    if (teamNameDebounceTimer) {
      clearTimeout(teamNameDebounceTimer);
    }

    // Set new timer
    const newTimer = setTimeout(() => {
      verifyTeamName(newTeamName);
    }, 500); // 500ms debounce

    setTeamNameDebounceTimer(newTimer);
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (teamNameDebounceTimer) {
        clearTimeout(teamNameDebounceTimer);
      }
    };
  }, [teamNameDebounceTimer]);

  const validateForm = () => {
    const newErrors = {};

    // Team name validation including availability check
    if (!formData.teamName.trim()) {
      newErrors.teamName = "Required";
    } else if (!isTeamNameAvailable) {
      newErrors.teamName = "Team name is not available";
    }

    // ... rest of the validation logic ...
    formData.members.forEach((member, index) => {
      if (!member.name.trim()) newErrors[`name${index}`] = "Required";
      if (!member.email.trim()) {
        newErrors[`email${index}`] = "Required";
      } else if (!validateEmail(member.email)) {
        newErrors[`email${index}`] = "Invalid email";
      }
      if (!member.college.trim()) newErrors[`college${index}`] = "Required";
      if (!member.contactNumber.trim()) {
        newErrors[`contactNumber${index}`] = "Required";
      } else if (!validatePhone(member.contactNumber)) {
        newErrors[`contactNumber${index}`] = "Invalid number";
      }
      if (!member.city.trim()) newErrors[`city${index}`] = "Required";
      if (!member.state.trim()) newErrors[`state${index}`] = "Required";
    });

    if (!formData.spoc) newErrors.spoc = "Select SPOC";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isTeamNameAvailable) {
      setErrors({
        ...errors,
        teamName: "Please choose an available team name",
      });
      return;
    }
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-b border-white/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/hackathon" className="text-lg font-medium">
              <MoveLeftIcon className="size-8 text-blue-800" />
            </Link>
            <h1 className="text-lg font-medium">Team Registration</h1>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            form="registration-form"
            className="px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            Register Team
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <motion.form
          id="registration-form"
          onSubmit={handleSubmit}
          className="py-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="max-w-md relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative">
              <input
                type="text"
                value={formData.teamName}
                onChange={handleTeamNameChange}
                className={`w-full px-4 py-2 bg-white/5 border ${
                  isTeamNameAvailable === true
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
            {errors.teamName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-xs text-red-400"
              >
                {errors.teamName}
              </motion.p>
            )}
            {isTeamNameAvailable === false && !errors.teamName && (
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
              {formData.members.map((member, index) => (
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
                    {formData.members.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMember(index)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    {/* Name + Contact Number */}
                    <div className="grid grid-cols-2 gap-3">
                      <SleekInput
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        placeholder="Name"
                        error={errors[`name${index}`]}
                      />
                      <SleekInput
                        value={member.contactNumber}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "contactNumber",
                            e.target.value
                          )
                        }
                        placeholder="Contact"
                        error={errors[`contactNumber${index}`]}
                      />
                    </div>

                    {/* Email */}
                    <SleekInput
                      value={member.email}
                      onChange={(e) =>
                        handleMemberChange(index, "email", e.target.value)
                      }
                      placeholder="Email"
                      error={errors[`email${index}`]}
                    />

                    {/* College */}
                    <SleekInput
                      value={member.college}
                      onChange={(e) =>
                        handleMemberChange(index, "college", e.target.value)
                      }
                      placeholder="College"
                      error={errors[`college${index}`]}
                    />

                    {/* City + State */}
                    <div className="grid grid-cols-2 gap-3">
                      <SleekInput
                        value={member.city}
                        onChange={(e) =>
                          handleMemberChange(index, "city", e.target.value)
                        }
                        placeholder="City"
                        error={errors[`city${index}`]}
                      />
                      <SleekInput
                        value={member.state}
                        onChange={(e) =>
                          handleMemberChange(index, "state", e.target.value)
                        }
                        placeholder="State"
                        error={errors[`state${index}`]}
                      />
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                      <input
                        type="radio"
                        name="spoc"
                        checked={formData.spoc === member.email}
                        onChange={() => handleSpocChange(member.email)}
                        className="w-4 h-4 text-blue-800 bg-transparent border-white/20 focus:ring-blue-8000"
                      />
                      <span className="text-sm text-gray-400">Team SPOC</span>
                    </label>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Add Member Button */}
          {formData.members.length < 4 && (
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="button"
              onClick={addMember}
              className="w-full md:w-auto px-6 py-3 border border-white/10 rounded-lg text-sm text-gray-400 flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              <Plus size={16} />
              Add Member
            </motion.button>
          )}
        </motion.form>
      </div>
    </div>
  );
};

// Sleek Input Component
const SleekInput = ({ error, ...props }) => (
  <div className="relative">
    <input
      {...props}
      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
    />
    {error && (
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
    )}
  </div>
);

export default TeamRegistrationForm;
