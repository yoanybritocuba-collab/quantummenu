import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-clash)", "system-ui", "sans-serif"],
      },
      colors: {
        electric: {
          50: "#edfcff",
          100: "#d6f7ff",
          200: "#b5f3ff",
          300: "#83edff",
          400: "#48dfff",
          500: "#1ec8ff",
          600: "#06a8e0",
          700: "#0785b4",
          800: "#0e6d93",
          900: "#115a7a",
        },
        neon: {
          green: "#39ff14",
          blue: "#00d4ff",
          cyan: "#0ff",
        },
        dark: {
          950: "#03040a",
          900: "#06080f",
          850: "#090c16",
          800: "#0d1120",
          750: "#111627",
          700: "#161d30",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30, 200, 255, 0.15), transparent)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "border-beam": "border-beam 4s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-beam": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
