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
        'cb-dark': '#0B0D17',
        'cb-black': '#000000',
      },
      fontFamily: {
        arsenica: ['var(--font-arsenica)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(-10%) scale(1)' },
          '50%': { transform: 'translateX(10%) scale(1.1)' },
        },
        'aurora-reverse': {
          '0%, 100%': { transform: 'translateX(10%) scale(1.1)' },
          '50%': { transform: 'translateX(-10%) scale(1)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'float-fast': 'float 4.5s ease-in-out infinite',
        aurora: 'aurora 25s ease-in-out infinite',
        'aurora-reverse': 'aurora-reverse 30s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
