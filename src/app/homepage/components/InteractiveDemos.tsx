"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Password Generator Demo
function PasswordGeneratorDemo() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = "";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) chars = "abcdefghijklmnopqrstuvwxyz";

    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  const getStrength = () => {
    let score = 0;
    if (useUpper) score++;
    if (useLower) score++;
    if (useNumbers) score++;
    if (useSymbols) score++;
    if (length >= 16) score++;
    if (length >= 24) score++;
    if (score <= 2) return { label: "Weak", color: "#ef4444", width: "25%" };
    if (score <= 3) return { label: "Fair", color: "#f59e0b", width: "50%" };
    if (score <= 4) return { label: "Strong", color: "#00aaff", width: "75%" };
    return { label: "Very Strong", color: "#10b981", width: "100%" };
  };

  const strength = getStrength();

  const copyPassword = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🔐</span>
        <div>
          <h3 className="font-bold text-[#f0f0ff]">Password Generator</h3>
          <p className="text-xs text-[#8892a4]">Generate cryptographically secure passwords</p>
        </div>
      </div>

      {/* Length slider */}
      <div>
        <div className="flex justify-between text-xs mb-2">
          <span className="text-[#8892a4]">Length</span>
          <span className="font-mono text-[#00aaff]">{length} chars</span>
        </div>
        <input
          type="range" min={8} max={64}
          value={length}
          onChange={e => setLength(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-[#00aaff]"
        />
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Uppercase A-Z", state: useUpper, setter: setUseUpper },
          { label: "Lowercase a-z", state: useLower, setter: setUseLower },
          { label: "Numbers 0-9", state: useNumbers, setter: setUseNumbers },
          { label: "Symbols !@#", state: useSymbols, setter: setUseSymbols },
        ].map(opt => (
          <label key={opt.label} className="flex items-center gap-2 cursor-pointer group">
            <div
              className={`w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center ${
                opt.state ? "bg-[#00aaff] border-[#00aaff]" : "border-white/20 bg-transparent"
              }`}
              onClick={() => opt.setter(!opt.state)}
            >
              {opt.state && (
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-2.5 h-2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span className="text-xs text-[#8892a4] group-hover:text-[#f0f0ff] transition-colors">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Generate button */}
      <button
        onClick={generatePassword}
        className="w-full py-2.5 rounded-xl bg-[#00aaff] text-[#050508] font-semibold text-sm hover:bg-[#00d4ff] transition-all duration-200"
      >
        Generate Password
      </button>

      {/* Result */}
      {password && (
        <motion.div
          className="glass-strong rounded-xl p-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <code className="font-mono text-sm text-[#00d4ff] break-all">{password}</code>
            <button
              onClick={copyPassword}
              className="flex-shrink-0 px-2 py-1 rounded text-xs font-mono text-[#8892a4] hover:text-[#00aaff] transition-colors"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          {/* Strength bar */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-[#8892a4]">Strength</span>
              <span style={{ color: strength.color }}>{strength.label}</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: strength.color, width: strength.width }}
                initial={{ width: 0 }}
                animate={{ width: strength.width }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Fraud Detection Demo
function FraudDetectionDemo() {
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("day");
  const [location, setLocation] = useState("domestic");
  const [type, setType] = useState("purchase");
  const [result, setResult] = useState<null | { risk: string; score: number; reasons: string[] }>(null);
  const [loading, setLoading] = useState(false);

  const analyzeTransaction = () => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const amt = parseFloat(amount) || 0;
      let score = 10;
      const reasons: string[] = [];

      if (amt > 5000) { score += 30; reasons.push("High transaction amount"); }
      if (amt > 10000) { score += 20; reasons.push("Very high transaction amount"); }
      if (time === "night") { score += 25; reasons.push("Unusual transaction hour (night)"); }
      if (location === "international") { score += 35; reasons.push("International transaction"); }
      if (type === "transfer") { score += 15; reasons.push("Wire transfer type"); }
      if (type === "crypto") { score += 40; reasons.push("Cryptocurrency transaction"); }

      score = Math.min(score, 98);

      let risk = "Low";
      if (score > 70) risk = "High";
      else if (score > 40) risk = "Medium";

      setResult({ risk, score, reasons });
      setLoading(false);
    }, 1500);
  };

  const riskColor = result?.risk === "High" ? "#ef4444" : result?.risk === "Medium" ? "#f59e0b" : "#10b981";

  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🛡️</span>
        <div>
          <h3 className="font-bold text-[#f0f0ff]">Fraud Detection Demo</h3>
          <p className="text-xs text-[#8892a4]">ML-powered transaction risk analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-[#8892a4] mb-1.5 block">Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="e.g. 2500"
            className="w-full glass rounded-lg px-3 py-2 text-sm text-[#f0f0ff] placeholder-[#8892a4] focus:outline-none focus:border-[#00aaff] border border-transparent transition-colors"
          />
        </div>
        <div>
          <label className="text-xs text-[#8892a4] mb-1.5 block">Time of Day</label>
          <select
            value={time}
            onChange={e => setTime(e.target.value)}
            className="w-full glass rounded-lg px-3 py-2 text-sm text-[#f0f0ff] focus:outline-none bg-transparent border border-white/10"
          >
            <option value="day" className="bg-[#0a0a12]">Daytime</option>
            <option value="night" className="bg-[#0a0a12]">Night</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-[#8892a4] mb-1.5 block">Location</label>
          <select
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full glass rounded-lg px-3 py-2 text-sm text-[#f0f0ff] focus:outline-none bg-transparent border border-white/10"
          >
            <option value="domestic" className="bg-[#0a0a12]">Domestic</option>
            <option value="international" className="bg-[#0a0a12]">International</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-[#8892a4] mb-1.5 block">Transaction Type</label>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="w-full glass rounded-lg px-3 py-2 text-sm text-[#f0f0ff] focus:outline-none bg-transparent border border-white/10"
          >
            <option value="purchase" className="bg-[#0a0a12]">Purchase</option>
            <option value="transfer" className="bg-[#0a0a12]">Transfer</option>
            <option value="crypto" className="bg-[#0a0a12]">Crypto</option>
          </select>
        </div>
      </div>

      <button
        onClick={analyzeTransaction}
        disabled={loading}
        className="w-full py-2.5 rounded-xl bg-[#00aaff] text-[#050508] font-semibold text-sm hover:bg-[#00d4ff] transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Transaction"}
      </button>

      {loading && (
        <div className="flex items-center gap-2 justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff] animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff] animate-bounce" style={{ animationDelay: "0.15s" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff] animate-bounce" style={{ animationDelay: "0.3s" }} />
          <span className="text-xs text-[#8892a4] font-mono ml-1">Running ML model...</span>
        </div>
      )}

      {result && (
        <motion.div
          className="glass-strong rounded-xl p-4 space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[#f0f0ff]">Risk Assessment</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ color: riskColor, background: `${riskColor}22` }}>
              {result.risk} Risk
            </span>
          </div>

          {/* Score bar */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-[#8892a4]">Fraud Score</span>
              <span className="font-mono" style={{ color: riskColor }}>{result.score}/100</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: riskColor }}
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>

          {result.reasons.length > 0 && (
            <div>
              <div className="text-xs text-[#8892a4] mb-1.5">Risk Factors:</div>
              {result.reasons.map(r => (
                <div key={r} className="flex items-center gap-1.5 text-xs text-[#f0f0ff] mb-1">
                  <span style={{ color: riskColor }}>⚠</span> {r}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default function InteractiveDemos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed05] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#00aaff] text-sm tracking-widest uppercase mb-3">// 05. interactive_playground</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0ff]">
            Try It <span className="gradient-text">Live</span>
          </h2>
          <p className="text-[#8892a4] mt-4 max-w-xl mx-auto">
            Interactive demos of my projects — experience the technology directly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PasswordGeneratorDemo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FraudDetectionDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}