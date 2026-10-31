"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-[#2F2F2F]">
      <div className="container-elite">
        <SectionHeading
          tag="Khách hàng nói gì"
          title="Những câu chuyện hài lòng"
          light
          center
        />

        {/* Large quote */}
        <div ref={ref} className="mt-16 relative">
          {/* Decorative quote mark */}
          <div
            className="absolute -top-8 left-0 text-8xl font-serif text-[#C8A97E]/20 leading-none select-none pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-3xl mx-auto text-center px-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 sm:mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C8A97E] text-[#C8A97E]" />
                ))}
              </div>

              <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed mb-8 sm:mb-10 tracking-normal">
                {t.content}
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#C8A97E]/50">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-white text-sm sm:text-base font-medium tracking-normal">{t.name}</div>
                  <div className="text-white/40 text-xs sm:text-sm tracking-normal">{t.role}</div>
                  <div className="text-[#C8A97E] text-xs font-medium tracking-normal mt-0.5 sm:mt-1">{t.project}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <button
              type="button"
              onClick={prev}
              aria-label="Xem đánh giá trước đó"
              className="w-9 h-9 sm:w-10 sm:h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Chọn khách hàng đánh giá">
              {testimonials.map((testi, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Xem đánh giá của ${testi.name}`}
                  aria-selected={i === current}
                  role="tab"
                  className={`transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] ${
                    i === current ? "w-6 h-1.5 bg-[#C8A97E]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Xem đánh giá tiếp theo"
              className="w-9 h-9 sm:w-10 sm:h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mini testimonials grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              onClick={() => setCurrent(i)}
              aria-label={`Xem chi tiết đánh giá từ ${t.name}`}
              className={`p-3 sm:p-4 text-left border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] ${
                current === i
                  ? "border-[#C8A97E] bg-white/[0.08]"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-white text-xs font-medium truncate tracking-normal">{t.name}</div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={10} className="fill-[#C8A97E] text-[#C8A97E]" />
                ))}
              </div>
              <p className="text-xs text-white/40 line-clamp-2 leading-relaxed tracking-normal">{t.content}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
