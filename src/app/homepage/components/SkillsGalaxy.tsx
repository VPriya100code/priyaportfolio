"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const orbitSkills = [
  { name: "Python", emoji: "🐍", color: "#3776ab", orbit: 1, duration: 8 },
  { name: "React", emoji: "⚛️", color: "#61dafb", orbit: 2, duration: 12 },
  { name: "AI/ML", emoji: "🤖", color: "#a855f7", orbit: 3, duration: 16 },
  { name: "Node.js", emoji: "🟢", color: "#68a063", orbit: 4, duration: 10 },
  { name: "TensorFlow", emoji: "🔥", color: "#ff6f00", orbit: 5, duration: 14 },
  { name: "MongoDB", emoji: "🍃", color: "#47a248", orbit: 6, duration: 9 },
];

export default function SkillsGalaxy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#00aaff03] to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 03. skills_galaxy</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Tech <span className="gradient-text">Universe</span>
          </h2>
          <p className="text-[#8892a4] mt-4">Interactive visualization of my technology ecosystem</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Galaxy visualization */}
          <motion.div
            className="relative flex-shrink-0"
            style={{ width: 500, height: 500 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Star field */}
            {Array.from({ length: 30 })?.map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-1 h-1 rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.4 + 0.1,
                  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}

            {/* Orbit rings */}
            {[120, 170, 220]?.map((r, i) => (
              <div
                key={`ring-${i}`}
                className="absolute rounded-full border border-[#00aaff10]"
                style={{
                  width: r * 2,
                  height: r * 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Center node */}
            <div
              className="absolute rounded-full flex items-center justify-center pulse-glow"
              style={{
                width: 80,
                height: 80,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, #00aaff33, #00aaff11)",
                border: "2px solid #00aaff44",
              }}
            >
              <div className="text-center">
                <div className="text-2xl">⚡</div>
                <div className="text-[8px] font-mono text-[#00aaff] mt-0.5">PV</div>
              </div>
            </div>

            {/* Orbiting skill nodes */}
            {orbitSkills?.map((skill) => (
              <div
                key={skill?.name}
                className={`absolute`}
                style={{
                  top: "50%",
                  left: "50%",
                  animation: `orbit${skill?.orbit} ${skill?.duration}s linear infinite`,
                }}
              >
                <div
                  className="relative -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex flex-col items-center justify-center cursor-pointer group"
                  style={{
                    background: `${skill?.color}22`,
                    border: `1px solid ${skill?.color}44`,
                    boxShadow: `0 0 10px ${skill?.color}22`,
                  }}
                >
                  <span className="text-sm">{skill?.emoji}</span>
                  {/* Tooltip */}
                  <div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `${skill?.color}dd`,
                      color: "#fff",
                    }}
                  >
                    {skill?.name}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.div
            className="flex-1 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {orbitSkills?.map((skill) => (
              <div
                key={skill?.name}
                className="glass rounded-xl p-4 hover:glow-border transition-all duration-300 skill-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{skill?.emoji}</span>
                  <span className="font-semibold text-sm text-[#f0f0ff]">{skill?.name}</span>
                </div>
                <div
                  className="h-1 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill?.color}, ${skill?.color}44)` }}
                />
              </div>
            ))}

            {/* Extra skills */}
            <div className="col-span-2 glass rounded-xl p-4">
              <div className="text-xs font-mono text-[#8892a4] mb-3">Additional Technologies</div>
              <div className="flex flex-wrap gap-2">
                {["Flask", "Git", "MySQL", "HTML/CSS", "Pandas", "NumPy", "scikit-learn", "OpenCV"]?.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 text-[#8892a4]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}