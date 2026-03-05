"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AppImage from "@/components/ui/AppImage";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
  { icon: "🤖", title: "AI & ML", desc: "Building intelligent systems with TensorFlow, Keras, and NLP" },
  { icon: "🌐", title: "Full Stack", desc: "React, Next.js, Node.js, Express — end-to-end development" },
  { icon: "🎓", title: "CSE Student", desc: "B.E. Computer Science at Chennai Institute of Technology — CGPA 8.5" },
  { icon: "🔬", title: "Research Driven", desc: "Exploring AI chatbots, fraud detection, and crop disease diagnosis" }];


  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 01. about_me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + decoration */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#00aaff10] to-[#7c3aed10] blur-xl" />

              {/* Main image */}
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden glass-strong">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1faebea67-1772340489273.png"
                  alt="Developer workspace with laptop showing code, representing Priyadharshini's development environment"
                  fill
                  className="object-cover opacity-80" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508cc] via-[#05050850] to-transparent" />

                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-mono text-xs text-[#00aaff] mb-1">{"// currently_working_on"}</div>
                  <div className="text-sm font-semibold text-[#f0f0ff]">AI-powered applications</div>
                </div>
              </div>

              {/* Floating code snippet */}
              <motion.div
                className="absolute -right-8 -top-6 glass-strong rounded-xl p-3 w-52"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}>
                
                <div className="font-mono text-[10px] text-[#8892a4] leading-relaxed">
                  <span className="text-[#7c3aed]">const </span>
                  <span className="text-[#00d4ff]">priya</span>
                  <span className="text-[#f0f0ff]"> = {"{"}</span>
                  <br />
                  <span className="pl-3 text-[#00aaff]">  role:</span>
                  <span className="text-emerald-400"> &apos;AI Dev&apos;</span>
                  <span className="text-[#f0f0ff]">,</span>
                  <br />
                  <span className="pl-3 text-[#00aaff]">  cgpa:</span>
                  <span className="text-emerald-400"> 8.5</span>
                  <span className="text-[#f0f0ff]">,</span>
                  <br />
                  <span className="pl-3 text-[#00aaff]">  status:</span>
                  <span className="text-emerald-400"> &apos;open&apos;</span>
                  <br />
                  <span className="text-[#f0f0ff]">{"}"}</span>
                </div>
              </motion.div>

              {/* Bottom badge */}
              <motion.div
                className="absolute -left-6 bottom-8 glass-strong rounded-xl p-3"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}>
                
                <div className="text-xs font-mono text-[#a855f7]">📍 Chennai, India</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}>
            
            <div className="space-y-4 text-[#8892a4] leading-relaxed">
              <p className="text-base">
                I&apos;m <span className="text-[#f0f0ff] font-semibold">Priyadharshini V</span>, a passionate Computer Science Engineering student at the{" "}
                <span className="text-[#00aaff]">Chennai Institute of Technology</span> (2024–2028) with a CGPA of 8.5.
              </p>
              <p className="text-base">
                My expertise spans{" "}
                <span className="text-[#f0f0ff]">Artificial Intelligence, Machine Learning, and Full Stack Development</span>.
                I&apos;ve built intelligent systems including AI chatbots for crop disease diagnosis, fraud detection systems, and complete web applications.
              </p>
              <p className="text-base">
                I completed a{" "}
                <span className="text-[#00aaff]">Software Development Internship at Yugayatra Retail OPC Pvt. Ltd</span>{" "}
                and a Front-End Development Internship at Edunet Foundation, where I contributed to production systems and developed real-world web interfaces.
              </p>
              <p className="text-base">
                I&apos;m driven by curiosity and the desire to apply theoretical knowledge to solve meaningful, real-world problems.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {highlights?.map((item, i) =>
              <motion.div
                key={item?.title}
                className="glass rounded-xl p-4 hover:glow-border transition-all duration-300 skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}>
                
                  <div className="text-xl mb-2">{item?.icon}</div>
                  <div className="text-sm font-semibold text-[#f0f0ff] mb-1">{item?.title}</div>
                  <div className="text-xs text-[#8892a4] leading-relaxed">{item?.desc}</div>
                </motion.div>
              )}
            </div>

            {/* Education badge */}
            <div className="glass-strong rounded-xl p-4 flex items-center gap-4">
              <div className="text-3xl">🎓</div>
              <div>
                <div className="text-sm font-semibold text-[#f0f0ff]">B.E. Computer Science & Engineering</div>
                <div className="text-xs text-[#8892a4]">Chennai Institute of Technology • 2024–2028 • CGPA: 8.5</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);


}