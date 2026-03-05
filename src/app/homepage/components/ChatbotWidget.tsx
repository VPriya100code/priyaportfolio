"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const knowledgeBase: Record<string, string> = {
  default: "Hi! I'm Priya's AI assistant. Ask me about her skills, projects, experience, or how to contact her! 👋",
  who: "Priyadharshini V is a Computer Science Engineering student at Chennai Institute of Technology (2024–2028) with a CGPA of 8.4. She's passionate about AI/ML and Full Stack Development, based in Chennai, India.",
  skills: "Priya's skills include:\n• Languages: Python, Java, JavaScript, C++\n• Frontend: React, Next.js, HTML/CSS, TailwindCSS\n• Backend: Node.js, Express.js, Flask\n• AI/ML: TensorFlow, Keras, scikit-learn, NLP, OpenCV\n• Databases: MySQL, MongoDB, PostgreSQL\n• Tools: Git, GitHub, VS Code",
  projects: "Priya has built:\n1. 🌱 AgroCure – AI Chatbot for Crop Disease (TensorFlow, NLP, Flask)\n2. 🛡️ Real-Time Fraud Detection System (scikit-learn, React)\n3. 🍽️ Restaurant Management System (React, Node.js, MySQL)\n4. 🎯 Quiz Galaxy – Interactive Quiz App (HTML/CSS/JS)\n5. 🔐 Secure Password Generator (Python, React)",
  contact: "You can reach Priya at:\n📧 p72981087@gmail.com\n📱 +91 9789442675\n🔗 linkedin.com/in/vpriyadharshiniicse122006\n💻 github.com/VPriya100code",
  experience: "Priya has completed:\n1. Software Development Intern @ Yugayatra Retail OPC Pvt. Ltd (Oct 2025–Dec 2025)\n2. Front-End Developer Intern @ Edunet Foundation (Aug–Oct 2025)\nShe's open to internships, AI projects, and collaborations!",
  education: "Priya is pursuing B.E. Computer Science & Engineering at Chennai Institute of Technology (2024–2028) with a CGPA of 8.4. She holds certifications from Google, AWS, Cisco, and TCS.",
  hire: "Priya is actively looking for internships and collaboration opportunities in AI/ML and Full Stack Development. Contact her at p72981087@gmail.com or connect on LinkedIn!",
  hackathon: "Priya participated in the Google AI Agentic Day Hackathon (Adobe India) and scored 95.48 percentile in Naukri Campus Young Turks 2025!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("who") || lower.includes("about") || lower.includes("priyadharshini") || lower.includes("priya")) return knowledgeBase.who;
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("language") || lower.includes("framework")) return knowledgeBase.skills;
  if (lower.includes("project") || lower.includes("built") || lower.includes("work")) return knowledgeBase.projects;
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("phone")) return knowledgeBase.contact;
  if (lower.includes("experience") || lower.includes("intern") || lower.includes("job")) return knowledgeBase.experience;
  if (lower.includes("education") || lower.includes("college") || lower.includes("degree") || lower.includes("cgpa")) return knowledgeBase.education;
  if (lower.includes("hire") || lower.includes("opportunity") || lower.includes("available") || lower.includes("collaborate")) return knowledgeBase.hire;
  if (lower.includes("hackathon") || lower.includes("achievement") || lower.includes("award")) return knowledgeBase.hackathon;
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) return "Hello! 👋 I'm Priya's AI assistant. Ask me anything about her skills, projects, experience, or contact info!";
  return "I can help you learn about Priya's skills, projects, experience, education, or contact details. What would you like to know? 🤔";
}

const suggestedQuestions = [
  "Who is Priyadharshini?",
  "What are her skills?",
  "What projects has she built?",
  "How can I contact her?",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "bot", text: knowledgeBase.default },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: getResponse(text),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#00aaff] text-[#050508] flex items-center justify-center shadow-glow-blue hover:bg-[#00d4ff] transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="w-6 h-6"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
            >
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.span
              key="chat"
              className="text-2xl"
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            >
              🤖
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(0, 170, 255, 0.2)", boxShadow: "0 0 40px rgba(0, 170, 255, 0.1)" }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* Header */}
            <div className="bg-[#0a0a12] px-4 py-3 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00aaff20] border border-[#00aaff33] flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <div className="text-sm font-semibold text-[#f0f0ff]">Ask AI about Priyadharshini</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-[#8892a4] font-mono">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="bg-[#050508] h-72 overflow-y-auto p-4 space-y-3">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user" ?"chatbot-bubble-user bg-[#00aaff] text-[#050508] font-medium" :"chatbot-bubble glass text-[#f0f0ff]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="chatbot-bubble glass px-3 py-2 flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#00aaff] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggested questions */}
            <div className="bg-[#050508] px-3 pb-2 flex flex-wrap gap-1.5 border-t border-white/5 pt-2">
              {suggestedQuestions.map(q => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[9px] px-2 py-1 rounded-full glass text-[#8892a4] hover:text-[#00aaff] hover:bg-[#00aaff10] transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="bg-[#0a0a12] border-t border-white/5 p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent text-xs text-[#f0f0ff] placeholder-[#8892a4] focus:outline-none"
                aria-label="Chat input"
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-7 h-7 rounded-lg bg-[#00aaff] flex items-center justify-center hover:bg-[#00d4ff] transition-colors"
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#050508" strokeWidth="2.5" className="w-3.5 h-3.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}