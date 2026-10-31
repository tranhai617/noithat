"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PencilRuler, Hammer, Wrench, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  PencilRuler: <PencilRuler size={28} />,
  Hammer: <Hammer size={28} />,
  Wrench: <Wrench size={28} />,
  Building2: <Building2 size={28} />,
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section id="services" className="section-padding bg-[#2F2F2F]">
      <div className="container-elite">
        <SectionHeading
          tag="Dịch vụ"
          title="Giải pháp nội thất toàn diện"
          subtitle="Từ concept đến hoàn thiện — chúng tôi đồng hành cùng bạn trong suốt hành trình tạo dựng không gian sống."
          light
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Service tabs */}
          <div className="space-y-1" role="tablist" aria-label="Danh sách dịch vụ">
            {services.map((svc, i) => (
              <motion.button
                key={svc.id}
                role="tab"
                id={`service-tab-${svc.id}`}
                aria-selected={activeIdx === i}
                aria-controls={`service-panel-${svc.id}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-5 border-l-2 transition-all duration-300 group ${
                  activeIdx === i
                    ? "border-[#C8A97E] bg-white/5"
                    : "border-white/10 hover:border-[#C8A97E]/50 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`transition-colors duration-300 ${activeIdx === i ? "text-[#C8A97E]" : "text-white/30 group-hover:text-white/50"}`}>
                      {iconMap[svc.icon]}
                    </span>
                    <span className={`font-display text-base sm:text-lg tracking-normal transition-colors duration-300 ${activeIdx === i ? "text-white" : "text-white/60"}`}>
                      {svc.title}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className={`transition-all duration-300 shrink-0 ${activeIdx === i ? "text-[#C8A97E] translate-x-1" : "text-white/20"}`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service details */}
          <motion.div
            key={activeIdx}
            role="tabpanel"
            id={`service-panel-${active.id}`}
            aria-labelledby={`service-tab-${active.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 p-5 sm:p-8"
          >
            <div className="text-[#C8A97E] mb-4">{iconMap[active.icon]}</div>
            <h3 className="font-display text-xl sm:text-2xl text-white mb-3 sm:mb-4 tracking-normal">{active.title}</h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 tracking-normal">{active.description}</p>

            <ul className="space-y-3 mb-6 sm:mb-8" aria-label={`Chi tiết dịch vụ ${active.title}`}>
              {active.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#C8A97E] shrink-0" />
                  <span className="text-xs sm:text-sm text-white/70 tracking-normal">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-xs tracking-normal text-white/50">Khởi điểm từ</span>
                <div className="text-lg sm:text-xl font-light text-[#C8A97E] tracking-normal">
                  {active.priceFrom.includes(".")
                    ? active.priceFrom
                    : parseInt(active.priceFrom, 10).toLocaleString("vi-VN")}{" "}
                  đ
                </div>
              </div>
              <button
                type="button"
                className="w-full sm:w-auto text-center px-6 py-3 bg-[#C8A97E] text-white text-sm font-medium tracking-normal hover:bg-[#B8946A] transition-colors shadow-sm"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Tư vấn ngay
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
