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
        primary: {
          100: "#FFFCFA",
          200: "#FFF5F0",
          300: "#FFEFE5",
          400: "#FFDECC",
          500: "#FFBE99",
          600: "#FFAE80",
          700: "#FF9E66",
          800: "#FF8D4C",
        },
        secondary: {
          100: "#B3B3B3",
          200: "#98989A",
          300: "#656567",
          400: "#59595A",
          500: "#4C4C4D",
          600: "#333333",
          700: "#262626",
          800: "#191919",
        },
      },
    },
  },
  plugins: [],
};
