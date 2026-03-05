"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY, 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "p72981087@gmail.com",
      href: "mailto:p72981087@gmail.com",
      color: "#00aaff",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9789442675",
      href: "tel:+919789442675",
      color: "#a855f7",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chennai, India 600092",
      href: "#",
      color: "#10b981",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "vpriyadharshiniicse122006",
      href: "https://linkedin.com/in/vpriyadharshiniicse122006",
      color: "#0077b5",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00aaff04] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 11. get_in_touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#8892a4] mt-4 max-w-xl mx-auto">
            Open to internships, AI projects, and innovative collaborations. Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="font-bold text-[#f0f0ff] text-lg mb-2">Available for Opportunities</h3>
              <p className="text-sm text-[#8892a4] leading-relaxed mb-6">
                I&apos;m actively seeking internships and collaborative projects in AI/ML and Full Stack Development.
                Whether you have a project in mind or just want to say hello — my inbox is always open.
              </p>

              <div className="space-y-4">
                {contactInfo.map(info => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 rounded-xl glass hover:glow-border transition-all duration-200 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${info.color}15` }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#8892a4]">{info.label}</div>
                      <div className="text-sm font-medium text-[#f0f0ff] group-hover:text-[#00aaff] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hire/Collab CTA */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-bold text-[#f0f0ff] mb-2">Open to Collaborate</h3>
              <p className="text-sm text-[#8892a4] mb-4">
                Internships · AI Projects · Hackathons · Open Source
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-5 py-2 rounded-xl bg-[#00aaff] text-[#050508] font-semibold text-sm hover:bg-[#00d4ff] transition-all duration-200"
                >
                  Contact Me
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="px-5 py-2 rounded-xl glass glow-border text-[#00aaff] font-semibold text-sm hover:bg-[#00aaff10] transition-all duration-200"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="font-bold text-[#f0f0ff] text-lg">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="text-xs font-mono text-[#8892a4] mb-1.5 block">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Riya Sharma"
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-[#f0f0ff] placeholder-[#8892a4] focus:outline-none focus:border-[#00aaff] border border-transparent transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-mono text-[#8892a4] mb-1.5 block">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="riya@company.com"
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-[#f0f0ff] placeholder-[#8892a4] focus:outline-none focus:border-[#00aaff] border border-transparent transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-mono text-[#8892a4] mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Hi Priyadharshini, I'd love to discuss an internship opportunity..."
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-[#f0f0ff] placeholder-[#8892a4] focus:outline-none focus:border-[#00aaff] border border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 rounded-xl bg-[#00aaff] text-[#050508] font-bold text-sm hover:bg-[#00d4ff] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#050508] border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 rounded-xl px-4 py-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>✓</span> Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 rounded-xl px-4 py-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span>✗</span> Something went wrong. Please try again or email directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
