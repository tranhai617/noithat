"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  suffix: string;
  label: string;
}

export function AnimatedCounter({ value, suffix, label }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  useEffect(() => {
    if (isInView) motionVal.set(numeric);
  }, [isInView, motionVal, numeric]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-light text-[#C8A97E] mb-2 font-display tracking-normal"
      >
        {display}{suffix}
      </motion.div>
      <p className="text-sm tracking-normal font-medium text-[#2F2F2F]/60">{label}</p>
    </div>
  );
}
