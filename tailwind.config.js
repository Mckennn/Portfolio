/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // primary: ["Playfair Display", "serif"],
        primary: ["PP Neue Montreal Book", "serif"],
        secondary: ["Mulish", "sans-serif"],
        third: ["JetBrains Mono", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1800px",
      },
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",
        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
};
