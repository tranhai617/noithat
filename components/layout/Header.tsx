"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#projects", label: "Dự án" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#why-us", label: "Về chúng tôi" },
  { href: "#gallery", label: "Thư viện" },
  { href: "#contact", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D5]"
            : "bg-black/20 backdrop-blur-[2px]"
        }`}
      >
        <div className="container-elite flex items-center justify-between h-16 md:h-18 py-3 md:py-4">
          {/* Logo — Latin-only, tracking is safe here */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-xs sm:text-sm font-light tracking-[0.25em] uppercase text-[#C8A97E] transition-opacity group-hover:opacity-70">
              Elite
            </span>
            <span
              className={`text-base sm:text-lg font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#2F2F2F]" : "text-white"
              }`}
            >
              Interior Studio
            </span>
          </Link>

          {/* Desktop Nav — Vietnamese text: NO letter-spacing */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-normal transition-colors duration-300 ${
                  scrolled
                    ? "text-[#2F2F2F]/75 hover:text-[#C8A97E]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Mobile menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA — Shown on tablet & desktop */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm tracking-normal bg-[#C8A97E] text-white hover:bg-[#B8946A] transition-colors duration-300 shadow-sm"
            >
              Tư vấn ngay
            </Link>

            {/* Mobile/Tablet menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled || menuOpen ? "text-[#2F2F2F]" : "text-white"
              }`}
              aria-label={menuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F8F5F0] flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {/* Vietnamese nav links: tracking-normal to preserve diacritics */}
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-light tracking-normal text-[#2F2F2F] hover:text-[#C8A97E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Vietnamese CTA: tracking-normal */}
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block mt-4 px-8 py-3 text-sm tracking-normal bg-[#C8A97E] text-white"
                >
                  Tư vấn ngay
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
