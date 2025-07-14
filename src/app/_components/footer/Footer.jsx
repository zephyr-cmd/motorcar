"use client";

import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
// import { Separator } from "@/components/ui/separator.jsx";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/icons/socialMedia";
import Link from "next/link";
import { useState } from "react";
import Subscriber from "../subscriber";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setIsLoading(false);
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/adalabs.in/",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://x.com/AdaLabsInfo", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/adalabs.in/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/adalabs/posts/?feedView=all",
      label: "LinkedIn",
    },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Career", href: "/career" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Hire Developers from Us", href: "/contact-us/hire-from-us" },
  ];

  const services = [
    {
      label: "Artificial Intelligence",
      href: "/services/artificial-intelligence",
    },
    {
      label: "Engineering and R&D",
      href: "services/engineering-and-r&d",
    },
    {
      label: "Software Products",
      href: "/services/software-products",
    },
    {
      label: "Enterprise Solutions",
      href: "/services/enterprise-solutions",
    },
    {
      label: "Automation and IoT Services",
      href: "/services/automation-and-iot-services",
    },
    {
      label: "Customer Experience",
      href: "/services/customer-experience",
    },
    {
      label: "Data and Analytics",
      href: "/services/data-and-analytics",
    },
    {
      label: "Consulting",
      href: "/services/consulting",
    },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      <Subscriber />
      <div className="border-t border-white/10"></div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              What We Do
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button
              asChild
              className="h-10 px-5 bg-white text-black hover:bg-white/90 rounded-xl font-semibold transition-all duration-300 mb-4"
            >
              <Link
                href="https://adalabs.in/contact-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@adalabs.in</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">Saket, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 5678970000</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold gradient-text mb-1">
                @2025 Adalabs & Co.
              </h3>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-105"
                >
                  <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div> */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col-reverse gap-7 md:flex-row justify-between text-sm lg:text-lg">
          <div>
            <p>© 2025 Adalabs & Co. </p>
          </div>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
          <p>
            <span className="text-red-700">❤</span> from India
          </p>
        </div> */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.facebook.com/adalabs.in/"
              aria-label="Facebook"
              target="_blank"
            >
              <FacebookIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
            <Link
              href="https://www.instagram.com/adalabs.in/"
              aria-label="Instagram"
              target="_blank"
            >
              <InstagramIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
            <Link
              href="https://x.com/AdaLabsInfo"
              aria-label="Twitter"
              target="_blank"
            >
              <XIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/adalabs"
              aria-label="LinkedIn"
              target="_blank"
            >
              <LinkedinIcon className="h-5 w-5" textcolor="fill-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
