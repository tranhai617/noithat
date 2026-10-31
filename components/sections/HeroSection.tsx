"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-screen flex flex-col justify-start md:justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Elite Interior Studio — Thiết kế nội thất cao cấp"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75 md:bg-gradient-to-t md:from-black/75 md:via-black/30 md:to-black/20" />
      </div>

      {/* Floating label top-right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-24 sm:top-32 right-6 sm:right-8 md:right-16 z-10 text-right hidden sm:block"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-white/50">
          Luxury Interior Design
        </span>
        <br />
        <span className="text-xs tracking-[0.2em] uppercase text-white/50">
          Est. 2012
        </span>
      </motion.div>

      {/* Left vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute left-6 xl:left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <span
          className="text-xs tracking-normal text-white/60 font-medium"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Hồ Chí Minh — Hà Nội
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container-elite pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-16 md:pb-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-6"
        >
          <div className="w-5 sm:w-8 h-px bg-[#C8A97E]" />
          <span className="text-[11px] sm:text-xs tracking-widest uppercase text-[#C8A97E] font-medium">
            Elite Interior Studio
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[1.375rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white leading-[1.25] sm:leading-tight mb-3.5 sm:mb-6 tracking-normal"
          >
            Thiết kế không gian
            <br />
            <em className="not-italic" style={{ color: "#C8A97E" }}>
              sống đẳng cấp
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[13px] sm:text-base md:text-lg text-white/80 leading-[1.6] sm:leading-relaxed mb-6 sm:mb-10 max-w-xl tracking-normal line-clamp-3 sm:line-clamp-none"
          >
            Biến ý tưởng thành không gian sống hoàn hảo. Chúng tôi tạo ra những
            tổ ấm phản ánh cá tính và lối sống của từng gia chủ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-[#C8A97E] text-white text-xs sm:text-sm font-medium tracking-normal hover:bg-[#B8946A] transition-all duration-300 group w-full sm:w-auto shadow-md"
            >
              Nhận tư vấn miễn phí
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-4 border border-white/40 text-white text-xs sm:text-sm font-medium tracking-normal hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Xem dự án
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 sm:mt-16 pt-4 sm:pt-8 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 max-w-2xl"
        >
          {[
            { n: "350+", label: "Dự án" },
            { n: "12+", label: "Năm kinh nghiệm" },
            { n: "98%", label: "Hài lòng" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-lg sm:text-2xl font-light text-[#C8A97E] mb-0.5 sm:mb-1">{s.n}</div>
              <div className="text-[10px] sm:text-xs tracking-normal text-white/60 leading-tight sm:leading-normal">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - desktop/tablet only so it never overlaps mobile CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
      >
        <Link
          href="#projects"
          aria-label="Cuộn xuống xem dự án"
          className="p-2 text-white/50 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
