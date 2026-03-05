/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'accent-blue': '#00aaff',
        'accent-cyan': '#00d4ff',
        'accent-purple': '#7c3aed',
        'bg-primary': '#050508',
        'bg-secondary': '#0a0a12',
        'text-primary': '#f0f0ff',
        'text-secondary': '#8892a4',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
        'orbit-1': 'orbit1 8s linear infinite',
        'orbit-2': 'orbit2 12s linear infinite',
        'orbit-3': 'orbit3 16s linear infinite',
        'scan': 'scanLine 8s linear infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 170, 255, 0.3), 0 0 60px rgba(0, 170, 255, 0.1)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.3), 0 0 60px rgba(124, 58, 237, 0.1)',
        'card-hover': '0 30px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 170, 255, 0.08)',
      },
    },
  },
  plugins: [],
};