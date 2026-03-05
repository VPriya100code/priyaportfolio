"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about     — Learn about Priyadharshini",
    "  skills    — List technical skills",
    "  projects  — View projects",
    "  contact   — Get contact information",
    "  education — Academic background",
    "  clear     — Clear terminal",
  ],
  about: [
    "Priyadharshini V",
    "─────────────────────────────────",
    "Role    : CS Engineer | AI & Full Stack Developer",
    "Location: Chennai, India",
    "CGPA    : 8.4 / 10",
    "College : Chennai Institute of Technology",
    "",
    "Passionate about AI, ML, and building",
    "scalable web applications that solve",
    "real-world problems.",
  ],
  skills: [
    "Technical Skills",
    "─────────────────────────────────",
    "Languages  : Python, Java, JavaScript, C++",
    "Frontend   : React, Next.js, HTML, CSS, Tailwind",
    "Backend    : Node.js, Express.js, Flask",
    "AI/ML      : TensorFlow, Keras, scikit-learn, NLP",
    "Databases  : MySQL, MongoDB, PostgreSQL",
    "Tools      : Git, GitHub, VS Code, Google Colab",
  ],
  projects: [
    "Featured Projects",
    "─────────────────────────────────",
    "1. AgroCure – AI Chatbot for Crop Disease",
    "   Tech: Python, Flask, TensorFlow, NLP, MongoDB",
    "",
    "2. Real-Time Fraud Detection System",
    "   Tech: Python, scikit-learn, React, Flask",
    "",
    "3. Restaurant Management System",
    "   Tech: React, Node.js, Express, MySQL",
    "",
    "4. Quiz Galaxy – Interactive Quiz App",
    "   Tech: HTML, CSS, JavaScript",
    "",
    "5. Secure Password Generator",
    "   Tech: Python, React, Web Crypto API",
  ],
  contact: [
    "Contact Information",
    "─────────────────────────────────",
    "Email   : p72981087@gmail.com",
    "Phone   : +91 9789442675",
    "GitHub  : github.com/VPriya100code",
    "LinkedIn: linkedin.com/in/vpriyadharshiniicse122006",
    "",
    "Open to: Internships, AI Projects, Collaborations",
  ],
  education: [
    "Education",
    "─────────────────────────────────",
    "Degree  : B.E. Computer Science & Engineering",
    "College : Chennai Institute of Technology",
    "Year    : 2024 – 2028",
    "CGPA    : 8.4",
    "",
    "Certifications:",
    "  • Android Basics with Compose - Google",
    "  • AWS Cloud Practitioner Essentials",
    "  • Cyber Security - Cisco Networking Academy",
    "  • TCS iON Career Edge: Young Professional",
  ],
};

interface HistoryEntry {
  type: "input" | "output" | "error";
  text: string;
}

export default function TerminalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: "output", text: "Welcome to Priyadharshini's Developer Terminal v2.0" },
    { type: "output", text: "Type 'help' to see available commands." },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: HistoryEntry[] = [...history, { type: "input", text: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setHistory([{ type: "output", text: "Terminal cleared. Type 'help' for commands." }]);
      return;
    }

    if (commands[trimmed]) {
      commands[trimmed].forEach(line => {
        newHistory.push({ type: "output", text: line });
      });
    } else if (trimmed === "") {
      // do nothing
    } else {
      newHistory.push({ type: "error", text: `Command not found: '${trimmed}'. Type 'help' for available commands.` });
    }

    setHistory(newHistory);
    setCmdHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(newIdx);
      setInput(cmdHistory[newIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(newIdx);
      setInput(newIdx === -1 ? "" : cmdHistory[newIdx]);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00aaff03] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 06. developer_terminal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Interactive <span className="gradient-text">Terminal</span>
          </h2>
          <p className="text-[#8892a4] mt-4">Explore my portfolio through the command line</p>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: "1px solid rgba(0, 170, 255, 0.15)", boxShadow: "0 0 40px rgba(0, 170, 255, 0.05)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a12] border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-xs font-mono text-[#8892a4]">priyadharshini@portfolio:~</span>
          </div>

          {/* Terminal body */}
          <div
            className="bg-[#050508] p-4 h-80 overflow-y-auto font-mono text-sm cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((entry, i) => (
              <div key={i} className={`leading-6 ${
                entry.type === "input" ?"text-[#00d4ff]"
                  : entry.type === "error" ?"text-[#ef4444]" :"text-[#8892a4]"
              }`}>
                {entry.text}
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center gap-2 text-[#00d4ff]">
              <span>$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-[#f0f0ff] caret-[#00aaff]"
                autoFocus
                aria-label="Terminal input"
              />
              <span className="cursor-blink text-[#00aaff]">█</span>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Quick commands */}
          <div className="bg-[#0a0a12] border-t border-white/5 px-4 py-2 flex flex-wrap gap-2">
            {Object.keys(commands).map(cmd => (
              <button
                key={cmd}
                onClick={() => { handleCommand(cmd); inputRef.current?.focus(); }}
                className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8892a4] bg-white/5 hover:text-[#00aaff] hover:bg-[#00aaff10] transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}