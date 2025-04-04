import defaultTheme from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        ...defaultTheme.screens, // Mantiene los breakpoints originales de Tailwind
      },

      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        oxanium: ["var(--font-oxanium)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
