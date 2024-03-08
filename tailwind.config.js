/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "spring-green": {
          50: "#edfff5",
          100: "#d5ffea",
          200: "#aeffd7",
          300: "#70ffb9",
          400: "#2bfd93",
          500: "#00eb75",
          600: "#00c05b",
          700: "#00964a",
          800: "#06753e",
          900: "#076036",
          950: "#00371c",
        },

        trinidad: {
          50: "#fff7ec",
          100: "#ffeed3",
          200: "#ffd9a5",
          300: "#ffbd6d",
          400: "#ff9632",
          500: "#ff770a",
          600: "#eb5600",
          700: "#cc4202",
          800: "#a1340b",
          900: "#822d0c",
          950: "#461404",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
