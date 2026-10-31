"use client";

import { useState, useRef } from "react";
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-medium tracking-normal transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#C8A97E] text-white"
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
          className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative overflow-hidden cursor-pointer group break-inside-avoid ${
                img.size === "large" ? "aspect-[3/4]" : img.size === "medium" ? "aspect-square" : "aspect-[4/3]"
              }`}
              onClick={() => setLightboxSrc(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-4">
                <span className="text-white text-xs font-medium tracking-normal opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightboxSrc(null)}
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3]">
            <Image
              src={lightboxSrc}
              alt="Gallery"
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
