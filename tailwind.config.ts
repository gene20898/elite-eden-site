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
        // Elite Green: A range inspired by natural foliage,
        // useful for buttons, accents, or highlights.
        "elite-green": {
          100: "#E5F9E9",
          300: "#87E3AD",
          500: "#5A9F5D", // Primary shade
          700: "#2C8267",
          900: "#0C3C3B",
        },
        // Elite Bark: Earthy browns reminiscent of tree bark,
        // ideal for text, backgrounds, or secondary accents.
        "elite-bark": {
          100: "#E8D8C7",
          300: "#CBA994",
          500: "#A67C52", // Primary shade
          700: "#745A33",
          900: "#42361F",
        },
      },
      // A custom font that reflects a classic, elegant style.
      fontFamily: {
        elite: ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
