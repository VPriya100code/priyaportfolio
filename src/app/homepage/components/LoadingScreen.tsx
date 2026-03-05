"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("done");
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  const lines = [
    "Initializing portfolio...",
    "Loading AI modules...",
    "Compiling projects...",
    "Rendering experience...",
    "Ready.",
  ];

  const currentLine = lines[Math.min(Math.floor(progress / 25), lines.length - 1)];

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              className="relative w-20 h-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border border-[#00aaff22]" />
              <div className="absolute inset-2 rounded-full border border-[#00aaff44]" />
              <div className="absolute inset-4 rounded-full border border-[#00aaffaa]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#00aaff] font-mono font-bold text-xl">PV</span>
              </div>
            </motion.div>

            {/* Name */}
            <div className="text-center">
              <motion.h1
                className="text-2xl font-bold font-mono gradient-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Priyadharshini V
              </motion.h1>
              <motion.p
                className="text-[#8892a4] text-sm font-mono mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {currentLine}
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: "linear-gradient(90deg, #00aaff, #7c3aed)",
                }}
              />
            </div>

            {/* Progress text */}
            <span className="text-[#8892a4] text-xs font-mono">
              {Math.min(Math.floor(progress), 100)}%
            </span>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 font-mono text-[#00aaff22] text-xs">
            {"// PORTFOLIO_BOOT_SEQUENCE"}
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[#00aaff22] text-xs">
            {"v2.0.26"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}