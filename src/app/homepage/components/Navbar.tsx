"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppLogo from "@/components/ui/AppLogo";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-8 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div
        className={`flex items-center justify-between gap-6 px-4 py-2.5 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-glow-blue backdrop-blur-2xl"
            : "glass"
        }`}
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <AppLogo size={36} onClick={() => handleNavClick("#hero")} />
          <span className="font-mono text-sm text-[#00aaff] hidden sm:block">PV</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                active === link.href
                  ? "text-[#00aaff] bg-[#00aaff12]"
                  : "text-[#8892a4] hover:text-[#f0f0ff] hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8892a4] hover:text-[#00aaff] hover:bg-[#00aaff12] transition-all duration-200 border border-transparent hover:border-[#00aaff30]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.85 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <a
            href="public/resume.pdf"
            download
            className="px-4 py-1.5 rounded-lg text-xs font-semibold btn-neon glow-border text-[#00aaff] hover:bg-[#00aaff15] transition-all duration-200"
          >
            Resume
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#00aaff] text-[#050508] hover:bg-[#00d4ff] transition-all duration-200"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8892a4] hover:text-[#00aaff] transition-all duration-200"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            whileTap={{ scale: 0.85 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-5 h-0.5 bg-[#f0f0ff]"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-[#f0f0ff]"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-[#f0f0ff]"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute top-16 left-4 right-4 glass-strong rounded-2xl p-4 flex flex-col gap-1"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-sm text-[#8892a4] hover:text-[#f0f0ff] hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-white/5 mt-2 pt-2 flex gap-2">
              <a
                href="/resume.pdf"
                download
                className="flex-1 text-center py-2 rounded-lg text-xs font-semibold glow-border text-[#00aaff]"
              >
                Resume
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex-1 py-2 rounded-lg text-xs font-semibold bg-[#00aaff] text-[#050508]"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}