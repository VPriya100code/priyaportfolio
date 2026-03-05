"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import SkillsGalaxy from "./components/SkillsGalaxy";
import ProjectsSection from "./components/ProjectsSection";
import InteractiveDemos from "./components/InteractiveDemos";
import TerminalSection from "./components/TerminalSection";
import TimelineSection from "./components/TimelineSection";
import GitHubSection from "./components/GitHubSection";
import CodingProfiles from "./components/CodingProfiles";
import ExperienceSection from "./components/ExperienceSection";

import ContactSection from "./components/ContactSection";
import ChatbotWidget from "./components/ChatbotWidget";
import Footer from "./components/Footer";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300"
        >
          {/* Scroll progress */}
          <ScrollProgress />

          {/* Hackathon banner */}
          <div className="hackathon-banner text-center py-2 px-4 relative z-50">
            <p className="text-xs font-mono text-[#8892a4]">
              🚀 Deployed using AI on{" "}
              <a
                href="https://kuberns.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00aaff] hover:text-[#00d4ff] transition-colors font-semibold"
              >
                Kuberns
              </a>
              {" "}–{" "}
              <span className="text-[#a855f7]">Kuberns AI Portfolio Hackathon 2026</span>
            </p>
          </div>

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <SkillsGalaxy />
            <ProjectsSection />
            <InteractiveDemos />
            <TerminalSection />
            <TimelineSection />
            <GitHubSection />
            <CodingProfiles />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating chatbot */}
          <ChatbotWidget />
        </motion.div>
      )}
    </>
  );
}