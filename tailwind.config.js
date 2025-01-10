/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
        background: "var(--background)",
      },
      typography: {
        DEFAULT: {
          css: {
            "*": {
              lineHeight: 1.7,
            },
            h1: {
              fontSize: "1.6rem",
            },
            h2: {
              fontSize: "1.4rem",
            },
            h3: {
              fontSize: "1.2rem",
            },
            p: {
              lineHeight: "1.7",
              wordBreak: "keep-all",
            },
            hr: {
              margin: "4rem 0",
            },
            a: {
              color: "var(--main)",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: "var(--code-bg)",
              color: "var(--code-color)",
              padding: "0.15em 0.4em",
              borderRadius: "4px",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
