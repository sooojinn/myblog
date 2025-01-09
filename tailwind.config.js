/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        line: "var(--hr)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
