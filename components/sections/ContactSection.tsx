"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { contactInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // CMS-ready: in production, POST to /api/contact or Sanity/Payload
    setSubmitted(true);
  };

  const contactCards = [
    {
      icon: <Phone size={20} />,
      label: "Hotline",
      value: contactInfo.phone,
      href: contactInfo.phoneHref,
      sub: "Gọi ngay để được tư vấn",
    },
    {
      icon: <FacebookIcon size={20} />,
      label: "Facebook",
      value: "Elite Interior Studio",
      href: contactInfo.facebook,
      sub: "Nhắn tin trên Messenger",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "Zalo",
      value: contactInfo.phone,
      href: contactInfo.zalo,
      sub: "Chat qua Zalo",
    },
    {
      icon: <MapPin size={20} />,
      label: "Showroom",
      value: contactInfo.address,
      href: "https://maps.google.com",
      sub: contactInfo.workingHours,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-[#2F2F2F]">
      <div className="container-elite">
        <SectionHeading
          tag="Liên hệ"
          title="Bắt đầu hành trình của bạn"
          subtitle="Tư vấn miễn phí — không ràng buộc. Chúng tôi sẽ phản hồi trong vòng 2 giờ."
          light
        />

        <div ref={ref} className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact cards */}
          <div className="space-y-3 sm:space-y-4">
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-3.5 sm:gap-5 p-4 sm:p-5 border border-white/10 hover:border-[#C8A97E]/50 bg-white/[0.03] hover:bg-white/5 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#C8A97E]/15 text-[#C8A97E] shrink-0 group-hover:bg-[#C8A97E] group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <div className="text-xs tracking-normal font-medium text-white/50 mb-0.5">{card.label}</div>
                  <div className="text-white text-sm sm:text-base font-medium mb-0.5 tracking-normal">{card.value}</div>
                  <div className="text-xs text-white/40 tracking-normal">{card.sub}</div>
                </div>
              </motion.a>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="relative h-36 sm:h-40 overflow-hidden border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/20 to-[#2F2F2F] flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin size={22} className="text-[#C8A97E] mx-auto mb-1.5" />
                  <p className="text-white/60 text-xs tracking-normal">{contactInfo.address}</p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="text-xs text-[#C8A97E] hover:underline mt-1 block tracking-normal"
                  >
                    Xem trên Google Maps →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#C8A97E]/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-[#C8A97E]" />
                </div>
                <h3 className="text-white text-xl mb-3 font-display tracking-normal">Cảm ơn bạn!</h3>
                <p className="text-white/60 text-sm leading-relaxed tracking-normal max-w-sm mb-6">
                  Chúng tôi đã nhận được thông tin của bạn và chuyên viên tư vấn sẽ liên hệ lại trong vòng 2 giờ làm việc.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                  }}
                  className="px-6 py-2.5 border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white transition-colors text-xs font-medium tracking-normal"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl text-white mb-6 tracking-normal">Gửi yêu cầu tư vấn</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium tracking-normal text-white/60 mb-2">Họ tên *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors tracking-normal"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium tracking-normal text-white/60 mb-2">Số điện thoại *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      pattern="[0-9+ ]{9,15}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0901 234 567"
                      className="w-full bg-white/5 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors tracking-normal"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium tracking-normal text-white/60 mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors tracking-normal"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-medium tracking-normal text-white/60 mb-2">Dịch vụ quan tâm</label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#2F2F2F] border border-white/15 text-white/70 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors tracking-normal"
                  >
                    <option value="">Chọn dịch vụ...</option>
                    <option>Thiết kế nội thất</option>
                    <option>Thi công nội thất</option>
                    <option>Cải tạo căn hộ</option>
                    <option>Thiết kế biệt thự</option>
                    <option>Tư vấn phong cách</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium tracking-normal text-white/60 mb-2">Mô tả yêu cầu</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mô tả ngắn gọn về không gian và mong muốn của bạn..."
                    className="w-full bg-white/5 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors resize-none tracking-normal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C8A97E] text-white text-sm font-medium tracking-normal hover:bg-[#B8946A] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Gửi yêu cầu tư vấn
                  <Send size={16} />
                </button>

                <p className="text-xs text-white/30 text-center tracking-normal">
                  Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
