"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    color: "#00aaff",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 78 },
      { name: "TailwindCSS", level: 88 },
      { name: "HTML/CSS", level: 92 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: "🤖",
    color: "#a855f7",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 72 },
      { name: "NLP", level: 70 },
      { name: "scikit-learn", level: 78 },
      { name: "OpenCV", level: 65 },
      { name: "Pandas/NumPy", level: 82 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: "🗄️",
    color: "#7c3aed",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-[#f0f0ff] font-medium">{name}</span>
        <span className="text-[#8892a4] font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00aaff03] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 02. skills_matrix</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-[#8892a4] mt-4 max-w-xl mx-auto">
            A curated set of technologies I use to build intelligent, scalable systems
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#f0f0ff] text-sm">{cat.title}</h3>
                  <span className="text-xs font-mono" style={{ color: cat.color }}>
                    {cat.skills.length} technologies
                  </span>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={`${cat.title}-${skill.name}`}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges row */}
        <motion.div
          className="mt-12 flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {["Python", "React", "Next.js", "TensorFlow", "Node.js", "MongoDB", "Git", "Flask", "TailwindCSS", "Keras", "OpenCV", "PostgreSQL"].map(tech => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-xs font-mono glass hover:glow-border transition-all duration-200 text-[#8892a4] hover:text-[#00aaff] cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}