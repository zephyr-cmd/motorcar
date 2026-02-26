"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const ConsultationSection = () => {
  const handleBookConsultation = () => {
    window.open(
      process.env.NEXT_PUBLIC_CALENDLY_URL,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="consultation-section" className="py-16 bg-black px-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold leading-[2] tracking-tight text-white">
          <span className="gradient-text">Idea in your mind?</span>
          <br className="my-8" />
          <span
            style={{
              background: "linear-gradient(90deg, #00c4cc, #7d2ae8)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Convert it into Reality.
          </span>
          <br className="my-8" />
          <span className="text-white/90">Don&apos;t wait</span>
        </h2>

        <Button
          onClick={handleBookConsultation}
          className="bg-gradient-to-r from-[#7d2ae8] to-[#00c4cc] text-white font-semibold text-lg px-10 py-6 rounded-2xl mt-8 shadow-[0_10px_40px_rgba(0,196,204,0.25)] hover:shadow-[0_14px_50px_rgba(125,42,232,0.35)] transition-shadow duration-300"
        >
          Book Free Consultation Now
          <Sparkles className="ml-3 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default ConsultationSection;
