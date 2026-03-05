"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Simulated GitHub contribution data
function generateContributions() {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      days?.push(rand < 0.4 ? 0 : rand < 0.6 ? 1 : rand < 0.8 ? 2 : rand < 0.93 ? 3 : 4);
    }
    weeks?.push(days);
  }
  return weeks;
}

const contributions = generateContributions();

const intensityColors = [
  "#1a1a2e",
  "#00aaff22",
  "#00aaff55",
  "#00aaff99",
  "#00aaff",
];

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Public Repos", value: "10+", icon: "📁" },
    { label: "Languages", value: "8+", icon: "💻" },
    { label: "Contributions", value: "200+", icon: "🟩" },
    { label: "Followers", value: "Growing", icon: "👥" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 08. github_analytics</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-[#8892a4] mt-4">Consistent contributions and open source work</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats?.map((stat, idx) => (
            <motion.div
              key={stat?.label}
              className="glass rounded-xl p-4 text-center hover:glow-border transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-2xl mb-1">{stat?.icon}</div>
              <div className="text-xl font-bold gradient-text">{stat?.value}</div>
              <div className="text-xs text-[#8892a4] mt-0.5">{stat?.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          className="glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#f0f0ff]">Contribution Graph</h3>
            <span className="text-xs font-mono text-[#8892a4]">Last 12 months</span>
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {contributions?.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week?.map((day, di) => (
                    <div
                      key={`${wi}-${di}`}
                      className="w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-default"
                      style={{ background: intensityColors?.[day] }}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-3 justify-end">
            <span className="text-[10px] text-[#8892a4]">Less</span>
            {intensityColors?.map((color, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ background: color }} />
            ))}
            <span className="text-[10px] text-[#8892a4]">More</span>
          </div>
        </motion.div>

        {/* Language stats */}
        <motion.div
          className="mt-6 glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-[#f0f0ff] mb-4">Top Languages</h3>
          <div className="space-y-3">
            {[
              { lang: "Python", pct: 45, color: "#3776ab" },
              { lang: "JavaScript", pct: 30, color: "#f7df1e" },
              { lang: "HTML/CSS", pct: 15, color: "#e34c26" },
              { lang: "Java", pct: 10, color: "#b07219" },
            ]?.map(item => (
              <div key={item?.lang}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#f0f0ff]">{item?.lang}</span>
                  <span className="text-[#8892a4] font-mono">{item?.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: item?.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item?.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/5">
            <a
              href="https://github.com/VPriya100code"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#00aaff] hover:text-[#00d4ff] transition-colors font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Full GitHub Profile → github.com/VPriya100code
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}