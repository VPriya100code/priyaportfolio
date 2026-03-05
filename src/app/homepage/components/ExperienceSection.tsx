"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Yugayatra Retail OPC Private Limited",
    period: "Oct 2025 – Present",
    type: "Current",
    color: "#00aaff",
    responsibilities: [
      "Contributing to development of internal software tools to improve operational workflows",
      "Implementing new features and debugging existing modules to enhance user experience",
      "Collaborating with senior developers for code reviews, testing, and backend improvements",
    ],
    stack: ["Python", "JavaScript", "Git", "SQL"],
  },
  {
    role: "Front-End Developer Intern",
    company: "Edunet Foundation",
    period: "Aug 2025 – Oct 2025",
    type: "Completed",
    color: "#a855f7",
    responsibilities: [
      "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript",
      "Worked on improving UI performance and cross-browser compatibility",
      "Participated in weekly sprint meetings, contributing to UI design discussions",
      "Built and deployed Quiz Galaxy — interactive quiz web application",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    project: "Quiz Galaxy",
  },
];

const certifications = [
{ name: "Google AI & ML Fundamentals", issuer: "Google Developers", icon: "🤖" },
{ name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", icon: "☁️" },
{ name: "Python for Data Science and AI", issuer: "IBM", icon: "🐍" },
{ name: "Cybersecurity Fundamentals", issuer: "Cisco Networking Academy", icon: "🛡️" },
{ name: "Android Basics with Jetpack Compose", issuer: "Google Developers", icon: "📱" },
{ name: "TCS iON Career Edge: Young Professional", issuer: "TCS iON", icon: "🏆" },
{ name: "Full Stack Development with Python", issuer: "EduSkills Academy", icon: "💻" }
];
const achievements = [
  "Participated in the Google AI Agentic Day Hackathon (Adobe India) — participation certificate",
  "Scored 95.48 percentile in Naukri Campus Young Turks 2025, India's largest skill contest",
  "Solved 300+ coding challenges on platforms like LeetCode, CodeChef, and SkillRack",
  "Completed Python Full Stack Development internship at EduSkills Academy",
"Developed machine learning projects including Fraud Detection and AI Chatbots",
"Active contributor to developer platforms like Dev.to and GeeksforGeeks"
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a855f705] to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 09. experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {experiences?.map((exp, idx) => (
            <motion.div
              key={`${exp?.company}-${idx}`}
              className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold"
                      style={{ background: `${exp?.color}20`, color: exp?.color }}
                    >
                      {exp?.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#f0f0ff] text-base">{exp?.role}</h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: exp?.color }}>{exp?.company}</p>
                </div>
                <span className="text-xs font-mono text-[#8892a4] text-right flex-shrink-0 ml-4">{exp?.period}</span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-4">
                {exp?.responsibilities?.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#8892a4] leading-relaxed">
                    <span style={{ color: exp?.color }} className="mt-0.5 flex-shrink-0">▸</span>
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {exp?.stack?.map(tech => (
                  <span
                    key={`${exp?.company}-${tech}`}
                    className="px-2 py-0.5 rounded text-[10px] font-mono"
                    style={{ background: `${exp?.color}10`, color: exp?.color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {exp?.project && (
                <div className="mt-3 text-xs font-mono text-[#8892a4]">
                  📦 Project: <span className="text-[#00d4ff]">{exp?.project}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-[#f0f0ff] mb-6 text-center">
            Certifications & <span className="gradient-text">Training</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {certifications?.map((cert, idx) => (
              <motion.div
                key={cert?.name}
                className="glass rounded-xl p-4 hover:glow-border transition-all duration-300 skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
              >
                <div className="text-2xl mb-2">{cert?.icon}</div>
                <div className="text-sm font-semibold text-[#f0f0ff] leading-snug mb-1">{cert?.name}</div>
                <div className="text-xs text-[#8892a4]">{cert?.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg font-bold text-[#f0f0ff] mb-4 flex items-center gap-2">
            <span>🏅</span> Achievements
          </h3>
          <ul className="space-y-3">
            {achievements?.map((ach, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#8892a4]">
                <span className="text-[#00aaff] mt-0.5 flex-shrink-0">⭐</span>
                {ach}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}