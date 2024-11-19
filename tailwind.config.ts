import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        MerriweatherBold: ["var(--font-MerriweatherBold)", "sans-serif"],
        MerriweatherLight: ["var(--font-MerriweatherLight)", "sans-serif"],
        WorkSans: ["var(--font-WorkSans)", "sans-serif"],
      },
      backgroundImage: {
        connexionImage: "url('/asset/Section.svg')",
      },
    },
  },
  plugins: [],
};
export default config;