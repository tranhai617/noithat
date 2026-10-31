"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>("1");

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="section-padding bg-[#F0EBE3]">
      <div className="container-elite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky heading */}
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              tag="FAQ"
              title="Câu hỏi thường gặp"
              subtitle="Những thắc mắc phổ biến mà gia chủ thường hỏi trước khi bắt đầu dự án."
            />
            <div className="mt-8 p-6 bg-[#C8A97E]/10 border-l-2 border-[#C8A97E]">
              <p className="text-sm text-[#2F2F2F]/70 leading-relaxed">
                Không tìm thấy câu trả lời bạn cần?{" "}
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#C8A97E] underline hover:no-underline"
                >
                  Liên hệ trực tiếp
                </button>{" "}
                với chuyên gia của chúng tôi — tư vấn hoàn toàn miễn phí.
              </p>
            </div>
          </div>

          {/* Right FAQs */}
          <div ref={ref} className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="border-b border-[#E8E0D5]"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                >
                  <span className={`text-base leading-relaxed transition-colors duration-300 ${
                    openId === faq.id ? "text-[#C8A97E]" : "text-[#2F2F2F] group-hover:text-[#C8A97E]"
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-6 h-6 flex items-center justify-center border transition-colors duration-300 mt-0.5 ${
                    openId === faq.id
                      ? "border-[#C8A97E] text-[#C8A97E]"
                      : "border-[#E8E0D5] text-[#2F2F2F]/40 group-hover:border-[#C8A97E] group-hover:text-[#C8A97E]"
                  }`}>
                    {openId === faq.id ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-[#2F2F2F]/65">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

