/* eslint-disable @typescript-eslint/no-var-requires */

// const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        GRAY_LIGHT: "#f1f3f5",
        GRAY: "#adb5bd",
        GRAY_DARK: "#868e96",
        GRAY_EXTRADARK: "#495057",
        BLACK: "#353538",
        /**
         * @description drag: light yellow green
         */
        PRIMARY_LIGHT: "#f4fac3",

        /**
         * @description dark mode시 라벨 등: semi-dark yellow green
         */
        PRIMARY: "#b4d337",

        /**
         * @description 라벨 등: dark yellow green
         */
        PRIMARY_DARK: "#8da82c",
      },
    },
  },
  plugins: [],
};
