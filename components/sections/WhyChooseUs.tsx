"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Award, Shield, Clock, Leaf } from "lucide-react";

const reasons = [
  {
    icon: <Award size={22} />,
    title: "Giải thưởng quốc tế",
    desc: "45+ giải thưởng thiết kế trong nước và quốc tế, khẳng định chất lượng đỉnh cao.",
  },
  {
    icon: <Shield size={22} />,
    title: "Bảo hành 5 năm",
    desc: "Cam kết bảo hành toàn bộ công trình thi công, hỗ trợ trong vòng 24 giờ.",
  },
  {
    icon: <Clock size={22} />,
    title: "Đúng tiến độ",
    desc: "98% dự án hoàn thành đúng hạn nhờ quy trình quản lý chặt chẽ, minh bạch.",
  },
  {
    icon: <Leaf size={22} />,
    title: "Vật liệu xanh",
    desc: "Ưu tiên vật liệu thân thiện môi trường, đảm bảo không gian sống lành mạnh.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-[#F8F5F0]">
      <div className="container-elite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85"
                alt="Elite Interior Studio showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-0 right-0 sm:-bottom-6 sm:-right-6 bg-[#C8A97E] p-4 sm:p-6 text-white shadow-xl"
            >
              <div className="text-2xl sm:text-4xl font-light mb-1">12+</div>
              <div className="text-[11px] sm:text-xs tracking-normal font-medium">Năm kinh nghiệm</div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <div ref={ref}>
            <SectionHeading
              tag="Tại sao chọn chúng tôi"
              title="Tiêu chuẩn vượt trội trong từng dự án"
              subtitle="Chúng tôi không chỉ thiết kế không gian — chúng tôi tạo ra những tác phẩm nghệ thuật sống bền vững theo thời gian."
            />

            {/* Reasons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10 mb-8 sm:mb-12">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#C8A97E]/10 text-[#C8A97E] mb-3 group-hover:bg-[#C8A97E] group-hover:text-white transition-colors duration-300">
                    {r.icon}
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#2F2F2F] mb-1.5 tracking-normal">{r.title}</h4>
                  <p className="text-xs sm:text-sm text-[#2F2F2F]/60 leading-relaxed tracking-normal">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 lg:pt-16 border-t border-[#E8E0D5] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
