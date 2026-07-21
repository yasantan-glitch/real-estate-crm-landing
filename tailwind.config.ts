import type { Config } from "tailwindcss";

/**
 * Brand colors are defined as CSS variables in app/globals.css.
 * Change the theme in ONE place (globals.css / siteConfig) — never in components.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "rgb(var(--color-brand) / <alpha-value>)",
          soft: "rgb(var(--color-brand-soft) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
          tint: "rgb(var(--color-accent-tint) / <alpha-value>)",
        },
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 23 42 / 0.06), 0 8px 24px -8px rgb(15 23 42 / 0.12)",
        pop: "0 1px 2px rgb(15 23 42 / 0.05), 0 30px 60px -20px rgb(15 23 42 / 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
