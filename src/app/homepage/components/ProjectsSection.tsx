"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";

const projects = [

{
  id: "shadowhire",
  title: "ShadowHire AI",
  subtitle: "AI Resume Evaluation Platform",
  description:
  "An intelligent hiring assistant that evaluates resumes, predicts hiring probability, analyzes skill gaps, and generates recruiter insights using NLP and LLM-based techniques.",
  stack: ["Python", "NLP", "Machine Learning", "LLM"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_shadowhire.png",
  imageAlt: "AI resume analysis system",
  github: "https://github.com/VPriya100code/ShadowHire_ai",
  demo: "#",
  tag: "AI Platform",
  tagColor: "#ec4899",
  featured: true
},

{
  id: "fraud",
  title: "Real-Time Fraud Detection",
  subtitle: "ML-powered transaction analysis system",
  description:
  "Built a real-time fraud detection system using machine learning models to identify suspicious transactions and reduce fraud risks.",
  stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Flask"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1552d4163-1772665825410.png",
  imageAlt: "Fraud detection dashboard",
  github: "https://github.com/VPriya100code",
  demo: "#",
  tag: "ML Security",
  tagColor: "#00aaff",
  featured: true
},

{
  id: "spamshield",
  title: "SpamShield",
  subtitle: "AI-powered Email & SMS Spam Classifier",
  description:
  "Spam detection system using TF-IDF and Naive Bayes with a Streamlit interface and automated safe reply suggestions.",
  stack: ["Python", "Streamlit", "Machine Learning", "TF-IDF"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_spamshield.png",
  imageAlt: "Spam detection AI",
  github: "https://github.com/VPriya100code/SpamShield",
  demo: "#",
  tag: "AI / ML",
  tagColor: "#a855f7",
  featured: true
},

{
  id: "cinesense",
  title: "CineSense",
  subtitle: "AI-powered movie recommendation system",
  description:
  "Movie recommendation engine using TF-IDF and cosine similarity to suggest movies based on user preferences.",
  stack: ["Python", "TF-IDF", "Cosine Similarity", "Streamlit"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_cinesense.png",
  imageAlt: "Movie recommendation system",
  github: "https://github.com/VPriya100code/CineSense",
  demo: "#",
  tag: "AI System",
  tagColor: "#6366f1",
  featured: true
},

{
  id: "quizgalaxy",
  title: "Quiz Galaxy",
  subtitle: "Interactive quiz web application",
  description:
  "Interactive quiz platform with scoring system, dynamic questions, and responsive UI.",
  stack: ["HTML", "CSS", "JavaScript"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_quizgalaxy.png",
  imageAlt: "Quiz web application",
  github: "https://github.com/VPriya100code/Quiz_Galaxy",
  demo: "#",
  tag: "Web App",
  tagColor: "#7c3aed",
  featured: true
},

{
  id: "agriassist",
  title: "AgroCure – AgriAssist",
  subtitle: "AI Chatbot for Crop Disease Diagnosis",
  description:
  "CNN-based crop disease detection system with multilingual chatbot support for farmers.",
  stack: ["Python", "TensorFlow", "Flask", "NLP"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17f82510a-1772665826282.png",
  imageAlt: "Crop disease detection AI",
  github: "https://github.com/VPriya100code",
  demo: "#",
  tag: "AI / ML",
  tagColor: "#a855f7",
  featured: false
},

{
  id: "restaurant",
  title: "Restaurant Management System",
  subtitle: "Full-stack web application",
  description:
  "Restaurant system with table booking, order tracking, and admin dashboard.",
  stack: ["React", "Node.js", "Express", "MySQL"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17dcd4178-1772665826354.png",
  imageAlt: "Restaurant management system",
  github: "https://github.com/VPriya100code",
  demo: "#",
  tag: "Full Stack",
  tagColor: "#00d4ff",
  featured: false
},

{
  id: "password",
  title: "Secure Password Generator",
  subtitle: "Cryptographically secure password tool",
  description:
  "Password generator with entropy visualization and customizable security options.",
  stack: ["Python", "React", "Web Crypto API"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1af179b87-1772665825308.png",
  imageAlt: "Password generator",
  github: "https://github.com/VPriya100code",
  demo: "#",
  tag: "Security",
  tagColor: "#f59e0b",
  featured: false
},

{
  id: "resume-builder",
  title: "AI Resume Builder",
  subtitle: "Smart resume generator",
  description:
  "Machine learning powered resume generator that creates professional resumes based on user inputs.",
  stack: ["Python", "Machine Learning", "Streamlit"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_resume.png",
  imageAlt: "AI resume generator",
  github: "https://github.com/VPriya100code/RESUME_BUILDER",
  demo: "#",
  tag: "AI Tool",
  tagColor: "#10b981",
  featured: false
},

{
  id: "todo-api",
  title: "Todo API",
  subtitle: "MERN stack task manager",
  description:
  "RESTful task management API built with MongoDB, Express, React, and Node.",
  stack: ["MongoDB", "Express", "React", "Node.js"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_todo.png",
  imageAlt: "Todo API dashboard",
  github: "https://github.com/VPriya100code/todo-api",
  demo: "#",
  tag: "Full Stack",
  tagColor: "#f59e0b",
  featured: false
}

];
function ProjectCard({ project, idx }: {project: typeof projects[0];idx: number;}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`glass rounded-2xl overflow-hidden project-card group ${project.featured ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      {/* Image */}
      <div className={`relative overflow-hidden ${project.featured ? "h-56 md:h-64" : "h-44"}`}>
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#05050870] to-transparent" />

        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-semibold"
          style={{ background: `${project.tagColor}22`, border: `1px solid ${project.tagColor}44`, color: project.tagColor }}>
          
          {project.tag}
        </div>

        {/* Featured badge */}
        {project.featured &&
        <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-mono bg-[#00aaff22] border border-[#00aaff44] text-[#00aaff]">
            ⭐ Featured
          </div>
        }
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-[#f0f0ff] mb-1">{project.title}</h3>
        <p className="text-xs font-mono text-[#00aaff] mb-3">{project.subtitle}</p>
        <p className="text-sm text-[#8892a4] leading-relaxed mb-4 line-clamp-3">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) =>
          <span key={`${project.id}-${tech}`} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#8892a4]">
              {tech}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg glass text-xs font-medium text-[#8892a4] hover:text-[#f0f0ff] hover:glow-border transition-all duration-200">
            
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00aaff] text-xs font-medium text-[#050508] hover:bg-[#00d4ff] transition-all duration-200">
            
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>);

}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 04. featured_projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-[#8892a4] mt-4 max-w-xl mx-auto">
            From AI chatbots to full-stack applications — projects that solve real problems
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) =>
          <ProjectCard key={project.id} project={project} idx={idx} />
          )}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}>
          
          <a
            href="https://github.com/VPriya100code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glow-border text-[#00aaff] text-sm font-medium hover:bg-[#00aaff10] transition-all duration-200">
            
            View All on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>);

}