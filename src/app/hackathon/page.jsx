"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  ChevronDown,
  Calendar,
  Users,
  Award,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
  PlayIcon,
} from "lucide-react";
import Link from "next/link";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "@/components/icons/socialMedia";
import Image from "next/image";
const videoId = "lPIILsqq_vU";

export default function HackathonLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-indigo-900 text-white">
      <main>
        <BackgroundBeamsWithCollision className={"min-h-screen"}>
          <div className="flex flex-col overflow-y-auto">
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl text-center text-white font-thin tracking-tight relative z-20">
              Ada Hacks&nbsp;{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span>2025</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span>2025</span>
                </div>
              </div>
            </h2>
            <section className="container mx-auto px-4 py-10 text-center">
              <motion.p
                className="text-base md:text-lg lg:text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building impactful AI Agents & WebApps in a collaborative,
                creative environment.
              </motion.p>
              <motion.div
                className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center text-sm md:text-base">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center text-sm md:text-base">
                  <Users className="w-5 h-5 mr-2" />
                  <span>50 Teams Max</span>
                </div>
                <div className="flex items-center text-sm md:text-base">
                  <Award className="w-5 h-5 mr-2" />
                  <span>₹10,000 Prize</span>
                </div>
              </motion.div>
              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/hackathon/register"
                  aria-label="Register"
                  className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full transition-colors inline-flex items-center text-sm md:text-base "
                >
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </section>
          </div>
        </BackgroundBeamsWithCollision>

        <section id="about" className="bg-white text-gray-800 py-20 sm:px-5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              About the Hackathon
            </h2>
            <div className="flex flex-col sm:flex-row gap-14 px-5">
              <div className="sm:size-1/2">
                <h3 className="text-2xl font-semibold mb-4">Event Overview</h3>
                <p className="mb-4">
                  Join us for a week-long hackathon and an exclusive one-day
                  workshop. Learn the latest in AI, web development, and product
                  design from industry experts and gear up to innovate and win.
                </p>
                <p className="mb-4">
                  Collaborate with talented individuals to create cutting-edge
                  AI agents and web apps. Form a team of up to 4
                  members—developers, designers, or content creators—and bring
                  your boldest ideas to life.
                </p>
                <p className="mb-4">
                  Top-performing participants will also get exclusive internship
                  offers, giving you a chance to kickstart your career while
                  showcasing your skills.
                </p>
                <p className="mb-4">
                  The first 25 teams register for free. After that, spots are
                  available for a nominal fee. Seats are limited—secure your
                  spot today!
                </p>
              </div>

              <div className="sm:size-1/2">
                <h3 className="text-2xl font-semibold mb-4">Key Details</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Duration: 7 Days (1 Week)</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Capacity: Maximum of 50 Teams</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Prize: ₹10,000 for the Winning Team</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Theme: Building impactful AI Agents & WebApps</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    <span>Last Date for Registration: January 30, 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center relative p-8 sm:py-20 bg-black">
          <div className="relative">
            <Image
              src="/adaHacksThumbnail.png"
              alt="Video Thumbnail"
              width={940}
              height={450}
              className="w-full max-w-[940px] h-auto object-cover rounded-lg"
            />
            <button
              aria-label="Play"
              onClick={openModal}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-primary-50 size-16 sm:size-[80px] rounded-full flex items-center justify-center"
            >
              {/* <span className="text-2xl sm:text-4xl"> */}
              <PlayIcon />
              {/* </span> */}
            </button>
          </div>
        </div>

        <section id="schedule" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Hackathon Schedule
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Pre-Hackathon Kickoff
                </h3>
                <p className="mb-2">When: A week before the hackathon</p>
                <p className="mb-2">Where: Virtual Zoom Call</p>
                <ul className="list-disc list-inside">
                  <li>Meet fellow participants</li>
                  <li>Decide on the official start date</li>
                  <li>Vote on a project idea/theme</li>
                </ul>
              </div>
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Hackathon Week</h3>
                <p className="mb-2">Duration: 7 Days + One-Day Workshop</p>
                <ul className="list-disc list-inside">
                  <li>
                    Start with an intensive one-day workshop led by industry
                    experts
                  </li>
                  <li>
                    Learn the latest in AI, web development, and product design
                  </li>
                  <li>
                    Teams work remotely on their projects for the rest of the
                    week
                  </li>
                  <li>
                    Collaborate online through tools like Discord, Figma, and
                    GitHub
                  </li>
                  <li>Design, develop, and create content for your project</li>
                </ul>
              </div>

              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">
                  Weekend Virtual Meetup
                </h3>
                <p className="mb-2">When: Day 6 or Day 7</p>
                <p className="mb-2">Duration: 3 hours</p>
                <ul className="list-disc list-inside">
                  <li>Continue collaboration</li>
                  <li>Refine your project</li>
                  <li>Showcase progress and pitch ideas to the group</li>
                </ul>
              </div>
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Closing Event</h3>
                <ul className="list-disc list-inside">
                  <li>Teams present their final projects</li>
                  <li>Judges announce the winning team</li>
                  <li>Celebrate achievements and network with participants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="bg-white text-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Team Structure
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-8 text-center">
                Form a team of up to 4 members with the following roles:
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Developer</h3>
                  <p>Codes the core functionality of the project</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Designer</h3>
                  <p>Crafts the visual interface and user experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Content Writer/Marketer
                  </h3>
                  <p>
                    Creates compelling content, marketing plans, and
                    presentations
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-center mt-12 sm:mt-10 text-blue-950">
                  Teams can organize roles based on individual strengths.
                </p>
                <br />
                <p className="text-center mt-8 text-gray-500">
                  Register your team of 4 players to compete in the hackathon.
                  Don&apos;t have a full team? No problem! Register as an
                  individual, and we&apos;ll match you with other solo
                  individual to form a competitive team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Perks for Participants
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Networking Opportunities
                </h3>
                <p>
                  Connect with like-minded creators and potential collaborators
                </p>
              </div>
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Mentorship</h3>
                <p>
                  Receive personalized guidance from industry experts to
                  accelerate your growth and refine your skills.
                </p>
              </div>
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Product Development
                </h3>
                <p>
                  Leave with a potential product that could make its first
                  sales!
                </p>
              </div>
              <div className="bg-indigo-950 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Career Opportunities
                </h3>
                <p>
                  Explore exciting internship opportunities and unlock the path
                  to a full-time role!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="participate" className="bg-white text-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              How to Participate
            </h2>
            <div className="max-w-3xl mx-auto">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="bg-blue-950 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Team Registration
                    </h3>
                    <p>
                      Gather your team (maximum of 4 members) and sign up on our
                      website.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-950 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Participation Fee
                    </h3>
                    <p>
                      Complete the optional participation fee payment, if
                      applicable.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-950 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deadline</h3>
                    <p>
                      Registration closes once 50 teams have signed up, so act
                      fast!
                    </p>
                  </div>
                </li>
              </ol>
              <div className="mt-12 text-center">
                <Link
                  href="/hackathon/register"
                  aria-label="Register"
                  className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center"
                >
                  Register Your Team Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-indigo-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-thin text-center sm:text-left">
                AdaLabs & Co.
              </h2>
              <p className="mt-2 text-sm">
                Developing applications designed for the future.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/adalabs.in"
                aria-label="Go to facebook"
                target="_blank"
                className="hover:text-blue-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://x.com/AdaLabsInfo"
                aria-label="Go to X.com"
                target="_blank"
                className="hover:text-blue-900 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/adalabs"
                aria-label="Go to LinkedIn"
                target="_blank"
                className="hover:text-blue-900 transition-colors"
              >
                <LinkedInLogoIcon className="h-6 w-6" />
                {/* <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.124c-.213.042-.428.074-.642.098v-2.203c0-.564-.113-1.14-.469-1.608.969-.108 1.989-.332 2.892-.848.396-.226.743-.51 1.043-.84.409-.449.71-.972.891-1.545.181-.573.27-1.174.27-1.774 0-.965-.335-1.84-.877-2.544.276-.912.206-1.893-.219-2.738l-.125-.25-.385.063c-.464.075-1.09.285-1.82.765-.79-.202-1.614-.306-2.458-.313-.845.007-1.671.111-2.461.313-.726-.476-1.346-.686-1.809-.762l-.385-.063-.125.25c-.42.841-.499 1.822-.223 2.738-.542.704-.877 1.579-.877 2.544 0 .6.089 1.201.27 1.774.181.573.482 1.096.891 1.545.3.33.647.614 1.043.84.903.516 1.923.74 2.892.848-.297.389-.419.838-.456 1.289-.219.101-.458.178-.709.229-.265.053-.534.079-.804.079-.322 0-.644-.067-.955-.235-.312-.168-.576-.435-.783-.79-.147-.249-.345-.458-.59-.617-.241-.158-.498-.255-.77-.282l-.231-.025-.14.191c-.081.11-.116.219-.101.342.014.125.082.24.197.332.116.093.239.166.373.224l.021.009c.317.107.605.29.844.539.24.249.422.549.54.877.121.332.235.635.445.864.212.229.472.387.805.467.332.08.67.098 1.01.055.264-.034.52-.102.764-.207v1.473c-.214-.024-.429-.056-.642-.098C7.627 17.705 5 15.125 5 12c0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.125-2.627 5.705-5.984 6.124z" />
                </svg> */}
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white bg-black w-8 h-8 sm:w-10 sm:h-10 
                 flex items-center justify-center rounded-full 
                 hover:bg-gray-800 hover:scale-110 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-white"
          >
            &#x2715;
          </button>

          {/* Video Container with max-width and aspect ratio */}
          <div className="w-full max-w-[1200px] mx-auto relative">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
