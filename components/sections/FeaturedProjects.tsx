"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-[#F8F5F0]">
      <div className="container-elite">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeading
            tag="Dự án nổi bật"
            title="Những không gian chúng tôi đã tạo ra"
            subtitle="Mỗi dự án là một câu chuyện riêng — phản ánh cá tính và lối sống của gia chủ."
          />
          <Link
            href="#gallery"
            className="hidden md:flex items-center gap-2 text-sm font-medium tracking-normal text-[#C8A97E] hover:gap-3 transition-all group shrink-0"
          >
            Xem tất cả <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large feature project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative overflow-hidden cursor-pointer"
          >
            <ProjectCard project={projects[0]} size="large" />
          </motion.div>

          {/* Right column — 2 smaller */}
          <div className="flex flex-col gap-6">
            {projects.slice(1, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: (i + 1) * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <ProjectCard project={project} size="small" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, size }: { project: (typeof projects)[0]; size: "large" | "small" }) {
  const h = size === "large" ? "aspect-[4/3] md:aspect-square lg:aspect-[4/3]" : "aspect-[16/9]";
  return (
    <div className={`relative ${h} overflow-hidden group`}>
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs tracking-normal font-medium text-[#C8A97E]">{project.category}</span>
          <span className="text-white/40 text-xs">•</span>
          <span className="text-xs text-white/50">{project.area}</span>
        </div>
        <h3 className="font-display text-xl md:text-2xl font-light text-white mb-2 tracking-normal">{project.title}</h3>
        <p className="text-sm text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md tracking-normal">
          {project.description}
        </p>
        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-xs font-medium tracking-normal text-[#C8A97E]">Xem chi tiết</span>
          <ArrowUpRight size={14} className="text-[#C8A97E]" />
        </div>
      </div>
    </div>
  );
}
