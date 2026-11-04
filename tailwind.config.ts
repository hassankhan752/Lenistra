import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080d18",
        panel: "#101827",
        muted: "#91a0b6",
        cyan: {
          50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9",
          400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490",
          800: "#155e75", 900: "#164e63", 950: "#083344", DEFAULT: "#69e3f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px rgba(105, 227, 245, .12)",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulseSoft: { "0%, 100%": { opacity: ".55" }, "50%": { opacity: "1" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
