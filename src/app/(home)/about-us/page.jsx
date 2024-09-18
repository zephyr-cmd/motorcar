import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Lightbulb,
  Heart,
  Brain,
  HandshakeIcon,
  Clock,
} from "lucide-react";
// import React from "react";
import Navbar from "@/app/_components/navbar";

const AboutUs = () => {
  const slides = [
    {
      type: "image",
      src: "https://unsplash.com/photos/U4-I4oH4xlg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGFuYWx5dGljc3xlbnwwfHx8fDE3MjYzNDA3MzN8MA&force=true&w=1920",
      heading: "Boost your results with powerful analytics",
      description:
        "Data drives business transformation. Our solutions deliver insights to innovate products and services, elevate customer experience and enhance business outcomes.",
      buttonText: "/data and analytics",
      buttonLink: "/services/contact-us/data-and-analytics",
    },
  ];
  return (
    <div>
      <Navbar slides={slides} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-800">
                TechConsult
              </div>
              <div className="space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </div>
            </nav>
          </div>
        </header> */}

        <main className="container mx-auto p-12">
          {/* About Us */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              About Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
              At TechConsult, we are passionate about leveraging technology to
              drive business success. With our team of expert consultants and
              cutting-edge solutions, we help organizations navigate the complex
              digital landscape and achieve their full potential.
            </p>
          </section>

          {/* Our Philosophy */}
          <section className="mb-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Our Philosophy
            </h2>
            <div className="flex items-center justify-center">
              <Lightbulb className="w-12 h-12 text-blue-500 mr-4" />
              <p className="text-xl text-gray-700 max-w-2xl">
                We believe in the power of innovation and collaboration. Our
                approach combines technical expertise with a deep understanding
                of business needs, enabling us to deliver solutions that drive
                real value and lasting impact.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
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
          </section>

          {/* Our Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
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
              <div className="flex items-start">
                <Brain className="w-8 h-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
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
          <section className="mb-16">
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
          </section>

          {/* Let's Talk (Call to Action) */}
          <section className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
            <p className="text-xl mb-6">
              Ready to transform your business with innovative IT solutions?
              We're here to help.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-6 py-3">
              Get in touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </section>
        </main>

        {/* <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 TechConsult. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default AboutUs;
