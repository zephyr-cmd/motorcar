import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Lightbulb,
  Heart,
  Brain,
  HandshakeIcon,
  Clock,
  BrainCircuit,
  ChevronsLeftRightEllipsis,
  Star,
  Cog,
  Building,
  Code,
  GitGraph,
  Rocket,
  TreePalm,
  Globe,
  PersonStandingIcon,
} from "lucide-react";
// import React from "react";
import Navbar2 from "@/app/_components/navbar2";
import Link from "next/link";

const AboutUs = () => {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/5QgIuuBxKwM/download?force=true&w=2400",
      heading: "Who we are",
      description: "Empowering success through trust and vision",
      buttonText: "/data and analytics",
      buttonLink: "/services/contact-us/data-and-analytics",
    },
  ];
  return (
    <div>
      <Navbar2 slides={slides} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <main className="container mx-auto p-12">
          {/* About Us */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              About Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              we understand that no two businesses are alike. That's why we
              prioritize developing customized solutions that align with your
              unique business goals. Whether you require software design,
              artificial intelligence, or comprehensive digital solutions, we
              craft technologies that grow with you. Our approach is built on
              delivering results that are not only timely but also future-proof.
              In today's fast-paced environment, staying ahead of the curve is
              essential. We leverage the latest innovations — from Artificial
              Intelligence and Blockchain to Machine Learning and advanced
              software development — ensuring your business stays at the
              forefront of technological advancements.
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed mt-4">
              <strong>
                By doing this, we are reshaping the global perception of
                engineering, expanding its influence as the most effective means
                for humanity to tackle its greatest challenges and seize new
                opportunities.
              </strong>
            </p>
          </section>

          {/* Our Philosophy */}
          <section className="mb-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
            <div className="flex items-center justify-center">
              <Lightbulb className="w-12 h-12 text-blue-500 mr-4" />
              <p className="text-xl text-gray-700 max-w-2xl">
                Empowering the world to advance in science, technology,
                engineering, and management by enabling our customers to create
                smarter, more innovative products that drive progress in
                transportation, construction, agriculture, and beyond.
              </p>
            </div>
          </section>

          {/* Our Values */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity",
                  description:
                    "We uphold the highest ethical standards in all our interactions.",
                },
                {
                  title: "Innovation",
                  description:
                    "We constantly seek new and better ways to solve complex challenges.",
                },
                {
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, delivering top-quality results.",
                },
              ].map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}

          <section className="mb-16 space-y-20">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <p className="text-center text-gray-600 mb-8">
              We embody three key values that guide our work and define our
              impact. These values help us achieve excellence in everything we
              do.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* A Global Mindset */}
              <div className="flex items-start">
                <Globe className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    A Global Mindset
                  </h3>
                  <p className="text-gray-600">
                    Our diverse team works across 18 global delivery centers in
                    Asia-Pacific, Europe, and North America, sharing knowledge
                    and driving results for our clients worldwide.
                  </p>
                </div>
              </div>

              {/* One Team with Customers */}
              <div className="flex items-start">
                <PersonStandingIcon className="w-8 h-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    One Team with Customers
                  </h3>
                  <p className="text-gray-600">
                    We nurture a collaborative culture where Tata Technologies
                    and client teams work closely together, ensuring shared
                    growth and success.
                  </p>
                </div>
              </div>

              {/* A Can-Do Attitude */}
              <div className="flex items-start">
                <Rocket className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    A Can-Do Attitude
                  </h3>
                  <p className="text-gray-600">
                    Our global workforce is dedicated to overcoming challenges,
                    continuously innovating to create sustainable solutions for
                    the world’s toughest problems.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* IT Strategy & Planning */}
              <div className="flex items-start">
                <Brain className="w-8 h-8 text-purple-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    IT Strategy & Planning
                  </h3>
                  <p className="text-gray-600">
                    We help organizations align their IT initiatives with
                    business goals, ensuring technology drives growth and
                    efficiency.
                  </p>
                </div>
              </div>

              {/* Digital Transformation */}
              <div className="flex items-start">
                <BrainCircuit className="w-8 h-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Digital Transformation
                  </h3>
                  <p className="text-gray-600">
                    Our experts guide businesses through digital transformation,
                    leveraging emerging technologies to create competitive
                    advantages.
                  </p>
                </div>
              </div>

              {/* Automation & IoT Solutions */}
              <div className="flex items-start">
                <ChevronsLeftRightEllipsis className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Automation & IoT Solutions
                  </h3>
                  <p className="text-gray-600">
                    From smart factories to connected devices, we develop
                    automation and IoT solutions that enhance operational
                    efficiency and connectivity.
                  </p>
                </div>
              </div>

              {/* Customer Experience */}
              <div className="flex items-start">
                <Star className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customer Experience
                  </h3>
                  <p className="text-gray-600">
                    We craft personalized, seamless customer experiences that
                    drive engagement, loyalty, and satisfaction through
                    innovative digital platforms.
                  </p>
                </div>
              </div>

              {/* Engineering & R&D */}
              <div className="flex items-start">
                <Cog className="w-8 h-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Engineering & R&D
                  </h3>
                  <p className="text-gray-600">
                    Our R&D and engineering teams design cutting-edge solutions
                    that drive innovation, from product development to advanced
                    research initiatives.
                  </p>
                </div>
              </div>

              {/* Enterprise Solutions */}
              <div className="flex items-start">
                <Building className="w-8 h-8 text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Enterprise Solutions
                  </h3>
                  <p className="text-gray-600">
                    We provide end-to-end enterprise solutions that streamline
                    processes, improve efficiency, and drive business
                    transformation.
                  </p>
                </div>
              </div>

              {/* Software Products */}
              <div className="flex items-start">
                <Code className="w-8 h-8 text-indigo-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Software Products
                  </h3>
                  <p className="text-gray-600">
                    We build robust software products tailored to meet specific
                    industry demands, ensuring scalability, security, and
                    performance.
                  </p>
                </div>
              </div>

              {/* Data Analytics & AI */}
              <div className="flex items-start">
                <GitGraph className="w-8 h-8 text-teal-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Data Analytics & AI
                  </h3>
                  <p className="text-gray-600">
                    Leveraging data analytics and artificial intelligence, we
                    help businesses make informed decisions, predict trends, and
                    unlock new opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Partnership */}
          <section className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Trust & Partnership
            </h2>
            <div className="flex items-center justify-center">
              <HandshakeIcon className="w-12 h-12 text-yellow-500 mr-4" />
              <p className="text-xl text-gray-700 max-w-2xl">
                We build lasting partnerships with our clients, founded on
                trust, transparency, and shared success. Our commitment goes
                beyond project delivery – we're invested in your long-term
                growth and achievement.
              </p>
            </div>
          </section>

          {/* Our History */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
            <div className="relative border-l-4 border-gray-200 ml-6 pl-6 py-4">
              <Clock className="w-12 h-12 text-blue-500 absolute -left-6 top-0 bg-white" />
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">
                  2010 - Foundation
                </h3>
                <p className="text-gray-600">
                  TechConsult was founded with a vision to bridge the gap
                  between technology and business success.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">2015 - Expansion</h3>
                <p className="text-gray-600">
                  We expanded our services to include digital transformation and
                  cloud solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2023 - Industry Leader
                </h3>
                <p className="text-gray-600">
                  Today, we're recognized as a leading IT consultancy, serving
                  clients across various industries globally.
                </p>
              </div>
            </div>
          </section> */}

          {/* Let's Talk (Call to Action) */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
            <p className="text-xl mb-6">
              Ready to transform your business with innovative IT solutions?
              We're here to help.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-6 py-3">
              <Link
                href="/services/contact-us/get-in-touch"
                aria-label="Get in touch"
              >
                Get in touch
              </Link>
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
