/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        matouPrimaryOne: "#023FBB",
        matouPrimaryTwo: "#F28705",
        matouAccentOne: "#023373",
        matouAccentTwo: "#636AF2",
        matouAccentThree: "#BEF0FA",
        matouAccentFour: "#FFC000",
        matouAccentFive: "#FFA03A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        inset: " inset 2px 2px 40px -20px rgba(0, 0, 0, 0.3)",
        "inset-s": " inset 2px 2px 30px -10px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xs: "500px",
      },
      aspectRatio: {
        "5/4": "5 / 4",
        "4/5": "4 / 5",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "16px" },
      });
    }),
  ],
};
