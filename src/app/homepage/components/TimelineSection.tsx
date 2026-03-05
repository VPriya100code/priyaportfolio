"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2024",
    month: "August",
    title: "Started Computer Science Engineering",
    description: "Enrolled in B.E. Computer Science & Engineering at Chennai Institute of Technology. Began exploring programming fundamentals, data structures, and algorithms.",
    icon: "🎓",
    color: "#00aaff",
    tags: ["Education", "CSE"],
  },
  {
    year: "2025",
    month: "August",
    title: "Front-End Developer Intern – Edunet Foundation",
    description: "Designed and developed responsive web interfaces using HTML, CSS, and JavaScript. Participated in weekly sprint meetings, contributing to UI design discussions. Built Quiz Galaxy project.",
    icon: "💼",
    color: "#a855f7",
    tags: ["Internship", "Frontend", "HTML/CSS/JS"],
  },
  {
    year: "2025",
    month: "October",
    title: "Software Development Intern – Yugayatra Retail OPC Pvt. Ltd",
    description: "Contributing to development of internal software tools to improve operational workflows. Implementing new features and debugging existing modules to enhance user experience.",
    icon: "🚀",
    color: "#00d4ff",
    tags: ["Internship", "Full Stack", "Python"],
  },
  {
    year: "2025",
    month: "November",
    title: "Built AgroCure – AI Crop Disease Chatbot",
    description: "Implemented CNN-based image recognition for crop disease identification. Integrated multilingual NLP to assist farmers. Created admin dashboard for monitoring and statistics.",
    icon: "🤖",
    color: "#10b981",
    tags: ["AI/ML", "TensorFlow", "NLP", "Flask"],
  },
  {
    year: "2026",
    month: "March",
    title: "Developing Advanced AI Applications",
    description: "Expanding expertise in real-time fraud detection, machine learning systems, and full-stack applications. Participating in hackathons and open-source contributions.",
    icon: "⚡",
    color: "#f59e0b",
    tags: ["AI", "Hackathon", "Open Source"],
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 07. developer_journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[#8892a4] mt-4">The path that shaped me as a developer</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          {timelineEvents?.map((event, idx) => (
            <motion.div
              key={`${event?.year}-${event?.title}`}
              className={`relative flex gap-8 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Content card */}
              <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-16 md:pl-0`}>
                <div className="glass rounded-xl p-5 hover:glow-border transition-all duration-300 text-left">
                  {/* Date */}
                  <div className="text-xs font-mono mb-2" style={{ color: event?.color }}>
                    {event?.month} {event?.year}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#f0f0ff] text-base mb-2">{event?.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-[#8892a4] leading-relaxed mb-3">{event?.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {event?.tags?.map(tag => (
                      <span
                        key={`${event?.year}-${tag}`}
                        className="px-2 py-0.5 rounded text-[10px] font-mono"
                        style={{ background: `${event?.color}15`, color: event?.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center node */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-5 z-10">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm -translate-x-1/2 md:translate-x-0"
                  style={{
                    background: `${event?.color}22`,
                    border: `2px solid ${event?.color}44`,
                    boxShadow: `0 0 15px ${event?.color}22`,
                  }}
                >
                  {event?.icon}
                </div>
              </div>

              {/* Empty spacer for alternating layout on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}