/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: {
        50: "#e6f2ff", // Very light blue
        100: "#cce5ff", // Light blue
        400: "#3399ff", // Bright blue
        500: "#0080ff", // Slightly darker blue
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#e6f3ff", // Very light blue
        200: "#cce7ff", // Light blue
        300: "#3b9eff", // Bright medium blue
        400: "#1585ff", // Vivid blue
        500: "#0b6de1", // Deep blue
        600: "#0c58ea", // Slightly brighter deep blue
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
