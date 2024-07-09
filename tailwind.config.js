/* eslint-disable @typescript-eslint/no-var-requires */

const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: { GABIA: ["GabiaHeuldot"], HAKGYO: ["Hakgyoansim"] },
      colors: {
        GRAY_LIGHT: "#f1f3f5",
        GRAY: "#adb5bd",
        GRAY_DARK: "#868e96",
        GRAY_EXTRADARK: "#495057",
        BLACK: "#353538",

        /**
         * @description main page 배너 배경 색상
         */
        MAIN_BG_DARK: "rgba(73, 80, 87, 0.4)",
        MAIN_BG_LIGHT: "rgba(227, 227, 227, 0.5)",

        /**
         * @description footer 라이트 모드 시 배경 색상
         */
        FOOTER_BG_LIGHT: "rgb(227, 227, 227)",

        /**
         * @description 뉴스 카드 배경 색상
         */
        CARD_BG_DARK: "rgba(241, 243, 245, 0.3)",
        CARD_BG_LIGHT: "rgba(53, 53, 56, 0.2)",

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
