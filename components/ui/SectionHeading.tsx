"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ tag, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={center ? "text-center" : ""}
    >
      {tag && (
        <span className={`block text-xs font-semibold tracking-normal uppercase mb-2.5 sm:mb-4 ${light ? "text-[#C8A97E]" : "text-[#C8A97E]"}`}>
          {tag}
        </span>
      )}
      <h2
        className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-normal mb-3 sm:mb-4 ${
          light ? "text-white" : "text-[#2F2F2F]"
        }`}
      >
        {title}
      </h2>
      <div className={`line-accent mb-4 sm:mb-6 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed tracking-normal max-w-2xl ${light ? "text-white/60" : "text-[#2F2F2F]/60"} ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
