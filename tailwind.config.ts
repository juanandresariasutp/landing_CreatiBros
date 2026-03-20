import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'cb-white': '#FFFFFF',
        'cb-lavender-light': '#D9D9FF',
        'cb-lavender-med': '#B0AEFF',
        'cb-purple': '#8684FF',
        'cb-navy': '#454496',
        'cb-dark': '#343341',
        'cb-black': '#000000',
      },
      fontFamily: {
        arsenica: ['var(--font-arsenica)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
