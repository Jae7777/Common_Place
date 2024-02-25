import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero': "url('/hero.jpg')"
      },
      screens: {
        'xs': '540px'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
        vaporyellow: {
          100: "#fdffdf",
          200: "#fbffc0",
          300: "#f8ffa0",
          400: "#f6ff81",
          500: "#f4ff61",
          600: "#c3cc4e",
          700: "#92993a",
          800: "#626627",
          900: "#313313"
        },
        vapororange: {
          100: "#ffebcc",
          200: "#ffd699",
          300: "#ffc266",
          400: "#ffad33",
          500: "#ff9900",
          600: "#cc7a00",
          700: "#995c00",
          800: "#663d00",
          900: "#331f00"
        },
        vaporblue: {
          100: "#d7dee3",
          200: "#afbdc6",
          300: "#879baa",
          400: "#5f7a8d",
          500: "#375971",
          600: "#2c475a",
          700: "#213544",
          800: "#16242d",
          900: "#0b1217"
        },
        vapordarkblue: {
          100: "#ceced7",
          200: "#9d9eaf",
          300: "#6c6d87",
          400: "#3b3d5f",
          500: "#0a0c37",
          600: "#080a2c",
          700: "#060721",
          800: "#040516",
          900: "#02020b"
        },
        vapordark: {
          100: "#ced0d3",
          200: "#9ca1a8",
          300: "#6b717c",
          400: "#394251",
          500: "#081325",
          600: "#060f1e",
          700: "#050b16",
          800: "#03080f",
          900: "#020407"
        },
        vaporpink: {
          100: "#ffdff4",
          200: "#ffc0e8",
          300: "#ffa0dd",
          400: "#ff81d1",
          500: "#ff61c6",
          600: "#cc4e9e",
          700: "#993a77",
          800: "#66274f",
          900: "#331328"
        },
        vaporhotpink: {
          100: "#f1d0e6",
          200: "#e4a1cd",
          300: "#d671b4",
          400: "#c9429b",
          500: "#bb1382",
          600: "#960f68",
          700: "#700b4e",
          800: "#4b0834",
          900: "#25041a"
        },
        vaporcyan: {
          100: "#defbff",
          200: "#bef7ff",
          300: "#9df4ff",
          400: "#7df0ff",
          500: "#5cecff",
          600: "#4abdcc",
          700: "#378e99",
          800: "#255e66",
          900: "#122f33"
        },
      }
    },
  },
  plugins: [],
};
export default config;
