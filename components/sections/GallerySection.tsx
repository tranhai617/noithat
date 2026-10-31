"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { galleryImages } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X } from "lucide-react";

const categories = ["Tất cả", "Phòng khách", "Phòng ngủ", "Phòng bếp", "Phòng tắm", "Biệt thự"];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxImg(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [lightboxImg]);

  const filtered =
    activeCategory === "Tất cả"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-[#F8F5F0]">
      <div className="container-elite">
        <SectionHeading
          tag="Thư viện ảnh"
          title="Những không gian truyền cảm hứng"
          subtitle="Khám phá bộ sưu tập công trình đã hoàn thiện của chúng tôi."
          center
        />

        {/* Filter tabs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Bộ lọc thư viện ảnh">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs font-medium tracking-normal transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] ${
                activeCategory === cat
                  ? "bg-[#C8A97E] text-white shadow-sm"
                  : "border border-[#E8E0D5] text-[#2F2F2F]/70 hover:border-[#C8A97E] hover:text-[#C8A97E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          ref={ref}
          layout
          className="mt-8 sm:mt-10 columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              role="button"
              tabIndex={0}
              aria-label={`Phóng to ảnh: ${img.alt}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative mb-3 sm:mb-4 overflow-hidden cursor-pointer group break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E] ${
                img.size === "large" ? "aspect-[3/4]" : img.size === "medium" ? "aspect-square" : "aspect-[4/3]"
              }`}
              onClick={() => setLightboxImg({ src: img.src, alt: img.alt })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxImg({ src: img.src, alt: img.alt });
                }
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-500 flex items-end p-4">
                <span className="text-white text-xs font-medium tracking-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImg.alt}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
            onClick={() => setLightboxImg(null)}
            aria-label="Đóng thư viện ảnh"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl w-full h-[75vh] max-h-[85vh]">
            <Image
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
