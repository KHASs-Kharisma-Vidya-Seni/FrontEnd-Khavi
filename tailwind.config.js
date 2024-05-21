import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Abhaya Libre"],
        ...defaultTheme.fontFamily.serif,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "5rem",
          xl: "6rem",
        },
        center: true,
      },
      lineHeight: {
        description: "160%",
      },
    },
  },
  plugins: [],
};
