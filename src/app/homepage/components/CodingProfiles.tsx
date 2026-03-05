"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const profiles = [
  {
    platform: "GitHub",
    username: "VPriya100code",
    href: "https://github.com/VPriya100code",
    description: "Open source projects & code",
    stat: "10+ repos",
    color: "#f0f0ff",
    bg: "#161b22",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    platform: "LeetCode",
    username: "V_Priya_cit",
    href: "https://leetcode.com",
    description: "Data structures & algorithms",
    stat: "Solving daily",
    color: "#ffa116",
    bg: "#1a1a1a",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    platform: "HackerRank",
    username: "Priya_V_CSE",
    href: "https://www.hackerrank.com",
    description: "Competitive programming",
    stat: "5⭐ Python",
    color: "#00ea64",
    bg: "#1a1a1a",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 11.885 0 13-.642 1.115-9.107 6-10.392 6-1.284 0-9.75-4.885-10.39-6-.644-1.115-.644-11.885 0-13C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .258-.115.258-.258V6.4c0-.141-.117-.258-.258-.258H7.492c-.142 0-.258.117-.258.258v.25c0 .143.116.258.258.258h.701v10.142h-.701c-.142 0-.258.116-.258.258v.25c0 .141.116.258.258.258h2.972c.141 0 .258-.117.258-.258v-.25c0-.142-.117-.258-.258-.258h-.701v-4.574h4.074v4.574h-.701c-.141 0-.258.116-.258.258v.25c0 .141.117.258.258.258h2.972c.141 0 .259-.117.259-.258v-.25c0-.142-.118-.258-.259-.258h-.7V6.908h.7c.141 0 .259-.115.259-.258V6.4c0-.141-.118-.258-.259-.258h-2.972z" />
      </svg>
    ),
  },
  {
    platform: "CodeChef",
    username: "vpriyacit",
    href: "https://www.codechef.com",
    description: "Competitive coding challenges",
    stat: "Ranked",
    color: "#5b4638",
    bg: "#1a1a1a",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" style={{ color: "#5b4638" }}>
        <path d="M11.257.004C5.23.257.257 5.23.004 11.257-.248 17.283 4.48 22.43 10.5 22.989v-9.146H7.418V10.5H10.5V8.122c0-3.043 1.81-4.722 4.587-4.722 1.328 0 2.717.237 2.717.237V6.6h-1.53c-1.508 0-1.977.936-1.977 1.895V10.5h3.363l-.537 3.343h-2.826v9.146C20.52 22.43 24.248 17.283 23.996 11.257 23.743 5.23 18.77.257 12.743.004z" />
      </svg>
    ),
  },

];

export default function CodingProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 08. coding_profiles</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Find Me <span className="gradient-text">Online</span>
          </h2>
          <p className="text-[#8892a4] mt-4">Platforms where I sharpen my skills and contribute</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {profiles?.map((profile, idx) => (
            <motion.a
              key={profile?.platform}
              href={profile?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex flex-col gap-3 hover:glow-border transition-all duration-300 group skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `${profile?.color}15`, color: profile?.color }}
              >
                {profile?.icon}
              </div>
              <div>
                <div className="font-bold text-sm text-[#f0f0ff] group-hover:text-[#00aaff] transition-colors">
                  {profile?.platform}
                </div>
                <div className="text-xs font-mono text-[#8892a4] mt-0.5">@{profile?.username}</div>
              </div>
              <div className="text-xs text-[#8892a4]">{profile?.description}</div>
              <div className="text-xs font-mono mt-auto" style={{ color: profile?.color }}>
                {profile?.stat} →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}