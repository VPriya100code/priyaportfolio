"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AppImage from "@/components/ui/AppImage";

// Particle system
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;y: number;
      vx: number;vy: number;
      size: number;opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#00aaff", "#00d4ff", "#7c3aed", "#a855f7"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 170, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }} />);


}

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient">
      
      <ParticleCanvas />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,170,255,0.06) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`,
          transition: "transform 0.3s ease"
        }} />
      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              className="flex items-center gap-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}>
              
              <div className="glass-strong px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-[#8892a4]">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              
              <p className="font-mono text-[#00aaff] text-sm mb-2 tracking-widest uppercase">
                {"// Hello, World! 👋"}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="text-[#f0f0ff]">V Priya</span>
                <span className="gradient-text">dharshini</span>
                <br />
                <span className="text-[#f0f0ff] text-4xl md:text-5xl lg:text-6xl"></span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              className="text-xl md:text-2xl font-semibold text-[#8892a4]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}>
              
              <TypeAnimation
                sequence={[
                "Computer Science Engineer",
                2000,
                "AI Developer",
                2000,
                "Full Stack Developer",
                2000,
                "ML Enthusiast",
                2000,
                "Problem Solver",
                2000]
                }
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#00aaff]" />
              
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-[#8892a4] text-base md:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}>
              
              Building intelligent systems and scalable web applications.
              Passionate about AI, ML, and crafting impactful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}>
              
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-neon px-6 py-3 rounded-xl font-semibold text-sm bg-[#00aaff] text-[#050508] hover:bg-[#00d4ff] transition-all duration-300 pulse-glow">
                
                View Projects →
              </button>
              <a
                href="public/resume.pdf"
                download
                className="btn-neon px-6 py-3 rounded-xl font-semibold text-sm glass glow-border text-[#00aaff] hover:bg-[#00aaff10] transition-all duration-300">
                
                Download Resume
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-neon px-6 py-3 rounded-xl font-semibold text-sm glass text-[#8892a4] hover:text-[#f0f0ff] hover:bg-white/5 transition-all duration-300">
                
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}>
              
              <span className="text-xs font-mono text-[#8892a4]">Find me on:</span>
              {[
              { label: "GitHub", href: "https://github.com/VPriya100code", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
              { label: "LinkedIn", href: "https://linkedin.com/in/vpriyadharshinicse122006", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              { label: "Email", href: "mailto:p72981087@gmail.com", icon: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" }].
              map((social) =>
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:glow-border hover:bg-[#00aaff10] transition-all duration-200 group">
                
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#8892a4] group-hover:fill-[#00aaff] transition-colors">
                    <path d={social.icon} />
                  </svg>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right: Profile visual */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>
            
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #00aaff22, #7c3aed22, #00aaff22)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
              

              {/* Inner glow ring */}
              <div className="absolute -inset-3 rounded-full border border-[#00aaff22]" />
              <div className="absolute -inset-1.5 rounded-full border border-[#00aaff44]" />

              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-blue float-anim">
                <AppImage
                  src="/images/priya.png"
                  alt="Priyadharshini V - Computer Science Engineer and AI Developer, smiling in professional attire"
                  fill
                  className="object-cover"
                  priority />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508aa] via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-strong px-3 py-2 rounded-xl text-xs font-mono text-[#00aaff]"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                
                🤖 AI Dev
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass-strong px-3 py-2 rounded-xl text-xs font-mono text-[#a855f7]"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
                
                💻 Full Stack
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 glass-strong px-3 py-2 rounded-xl text-xs font-mono text-emerald-400"
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                
                🎓 CSE
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}>
          
          {[
          { value: "10+", label: "Projects Built" },
          { value: "5+", label: "Internships" },
          { value: "8.5", label: "CGPA" },
          { value: "10+", label: "Certifications" }].
          map((stat) =>
          <div key={stat.label} className="glass rounded-xl p-4 text-center hover:glow-border transition-all duration-300">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-[#8892a4] mt-1">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}>
        
        <span className="text-xs font-mono text-[#8892a4]">scroll down</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-[#00aaff44] flex items-start justify-center p-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          
          <div className="w-1 h-2 rounded-full bg-[#00aaff]" />
        </motion.div>
      </motion.div>
    </section>);

}