"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { beforeAfters } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

function BeforeAfterSlider({ before, after, title, location }: {
  before: string;
  after: string;
  title: string;
  location: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 2), 98));
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((p) => Math.max(p - 5, 2));
    } else if (e.key === "ArrowRight") {
      setSliderPos((p) => Math.min(p + 5, 98));
    }
  };

  return (
    <div className="space-y-4">
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Thanh trượt so sánh trước và sau: ${title}`}
        onKeyDown={handleKeyDown}
        className="relative aspect-[16/10] overflow-hidden cursor-ew-resize select-none touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
        onClick={(e) => updateSlider(e.clientX)}
        onMouseDown={() => { isDragging.current = true; }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => {
          if (e.touches[0]) updateSlider(e.touches[0].clientX);
        }}
        onTouchMove={handleTouchMove}
      >
        {/* After (full) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={`Sau cải tạo — ${title}`}
            fill
            className="object-cover pointer-events-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#C8A97E] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium tracking-normal text-white shadow-sm">
            Sau
          </div>
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="absolute inset-0" style={{ width: `${(100 / sliderPos) * 100}%` }}>
            <Image
              src={before}
              alt={`Trước cải tạo — ${title}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#2F2F2F]/80 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium tracking-normal text-white shadow-sm">
            Trước
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-px h-full bg-white/60" />
          <div className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-[#C8A97E] rounded" />
              <div className="w-0.5 h-4 bg-[#C8A97E] rounded" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg text-[#2F2F2F] tracking-normal">{title}</h3>
        <p className="text-sm text-[#2F2F2F]/50 tracking-normal">{location}</p>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#F0EBE3]">
      <div className="container-elite">
        <SectionHeading
          tag="Trước & Sau"
          title="Sự chuyển đổi diệu kỳ"
          subtitle="Kéo thanh trượt để thấy sự khác biệt trước và sau khi chúng tôi can thiệp."
          center
        />

        <div
          ref={ref}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
        >
          {beforeAfters.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                title={item.title}
                location={item.location}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
