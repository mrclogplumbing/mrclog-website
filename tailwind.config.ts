import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1A9FFF",
          "blue-hover": "#0080E0",
          "blue-pressed": "#0068C0",
          "blue-light": "#E8F5FF",
        },
        dark: "#1A1A2E",
        danger: "#EF4444",
        "danger-hover": "#DC2626",
        success: "#10B981",
        warning: "#F59E0B",
      },
      fontFamily: {
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        logo: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs:   ["0.75rem",  { lineHeight: "1rem" }],
        sm:   ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem",     { lineHeight: "1.5rem" }],
        lg:   ["1.125rem", { lineHeight: "1.75rem" }],
        xl:   ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.5rem" }],
        "5xl": ["3rem",     { lineHeight: "1.2" }],
        "6xl": ["3.75rem",  { lineHeight: "1.1" }],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        sm:   "0.25rem",
        md:   "0.5rem",
        lg:   "0.75rem",
        xl:   "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm:          "0 1px 2px rgba(0,0,0,0.05)",
        md:          "0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)",
        lg:          "0 10px 15px rgba(0,0,0,0.10), 0 4px 6px rgba(0,0,0,0.05)",
        xl:          "0 20px 25px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.04)",
        card:        "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)",
        "card-hover":"0 8px 24px rgba(26,159,255,0.15), 0 0 0 1px rgba(26,159,255,0.1)",
        "btn-blue":  "0 4px 14px rgba(26,159,255,0.4)",
        "btn-blue-hover": "0 6px 20px rgba(26,159,255,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
