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
      colors: {
        'vaporpink':        '#ff61c6',
        'vaporcyan':        '#5cecff',
        'vaporyellow':      '#f4ff61',
        'vapororange':      '#ff9900',
        'vaporblue':        '#375971',
        'vapordarkblue':    '#0a0c37',
        'vapordark':        '#081325',
      }
    },
  },
  plugins: [],
};
export default config;
