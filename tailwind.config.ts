import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cocoa: "#5C3A2E",
        clay: "#8B5A3C",
        cream: "#F5EEE4",
        sand: "#EDDCC9",
        ink: "#2B1D14",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(90px) rotate(-4deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(-4deg)" },
        },
      },
      animation: {
        rise: "rise 1.1s cubic-bezier(.2,.8,.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
