/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "var(--main)",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.7rem",
            },
            h2: {
              fontSize: "1.5rem",
            },
            h3: {
              fontSize: "1.3rem",
            },
            h4: {
              fontSize: "1.1rem",
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
            pre: {
              padding: "1em",
              borderRadius: "5px",
              marginBottom: "1em",
              overflowX: "auto",
            },
            code: {
              backgroundColor: "var(--code-bg)",
              color: "var(--code-color)",
              padding: "0.15em 0.4em",
              borderRadius: "4px",
            },
          },
        },
        sm: {
          css: {
            "*": {
              fontSize: "14px",
            },
            h1: {
              fontSize: "1.5rem",
            },
            h2: {
              fontSize: "1.3rem",
            },
            h3: {
              fontSize: "1.1rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
