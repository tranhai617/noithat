import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/lib/data";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerLinks = [
  {
    title: "Dịch vụ",
    links: [
      { href: "#services", label: "Thiết kế nội thất" },
      { href: "#services", label: "Thi công nội thất" },
      { href: "#services", label: "Cải tạo căn hộ" },
      { href: "#services", label: "Thiết kế biệt thự" },
    ],
  },
  {
    title: "Khám phá",
    links: [
      { href: "#projects", label: "Dự án nổi bật" },
      { href: "#gallery", label: "Thư viện ảnh" },
      { href: "#why-us", label: "Về chúng tôi" },
      { href: "#faq", label: "Câu hỏi thường gặp" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white/80">
      <div className="container-elite py-12 sm:py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="block text-xs tracking-[0.25em] uppercase text-[#C8A97E] mb-1">Elite</span>
              <span className="block text-xl font-semibold tracking-[0.12em] uppercase text-white">
                Interior Studio
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6 tracking-normal">
              Thiết kế nội thất cao cấp cho những không gian sống đẳng cấp. Hơn 12 năm kinh nghiệm, hơn 350 dự án thành công.
            </p>
            <div className="flex gap-3">
              <Link
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Theo dõi Elite Interior Studio trên Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
              >
                <FacebookIcon size={16} />
              </Link>
              <Link
                href={contactInfo.zalo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Liên hệ Zalo với Elite Interior Studio"
                className="w-9 h-9 flex items-center justify-center border border-white/20 hover:border-[#C8A97E] hover:text-[#C8A97E] transition-colors text-xs font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A97E]"
              >
                Z
              </Link>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-xs font-semibold tracking-normal uppercase mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[#C8A97E] transition-colors tracking-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-normal uppercase mb-5">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#C8A97E]" />
                <Link href={contactInfo.phoneHref} className="hover:text-[#C8A97E] transition-colors tracking-normal">
                  {contactInfo.phone}
                </Link>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail size={15} className="mt-0.5 shrink-0 text-[#C8A97E]" />
                <Link href={`mailto:${contactInfo.email}`} className="hover:text-[#C8A97E] transition-colors tracking-normal">
                  {contactInfo.email}
                </Link>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#C8A97E]" />
                <span className="tracking-normal">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-xs text-white/40 tracking-normal">
            © {new Date().getFullYear()} Elite Interior Studio. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs text-white/40 tracking-normal">
            Được thiết kế với ❤ tại Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
