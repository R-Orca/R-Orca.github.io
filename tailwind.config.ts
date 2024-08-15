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
        "dark": "#222222",
        "bright": "#EEEEEE",
        "clickable": "#B2D7D9",
        "clickable-dark": "#687C7D",
      }
    },
  },
  plugins: [],
};
export default config;
