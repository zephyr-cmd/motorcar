"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";

const Section = (props) => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <section ref={SectionRef} className="relative h-screen overflow-hidden">
      <motion.div className="absolute -z-10 h-[120%] w-full" style={{ top: y }}>
        <div className="absolute inset-0 z-10 bg-black/30" />
        <Image src={props.image} alt="Overview" fill className="object-cover" />
      </motion.div>
      <div className="flex flex-col gap-4 p-24">
        <span className="text-xs uppercase">{props.tag}</span>
        <h1 className="max-w-[25ch] font-serif text-4xl">{props.title}</h1>
        <p className="max-w-[50ch]">{props.description}</p>
      </div>
    </section>
  );
};

export default Section;
