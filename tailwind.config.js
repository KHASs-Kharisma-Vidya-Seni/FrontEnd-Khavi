import defaultTheme from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

// no-undef
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
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
      backdropBlur: {
        "10px": "10px",
      },
      colors: {
        "heading-article": "#F5F8F8",
        "background-khavi": "#F4F4F4",
        shark: {
          50: "#f6f7f9",
          100: "#edeef1",
          200: "#d7dae0",
          300: "#b3bac6",
          400: "#8a95a6",
          500: "#6c788b",
          600: "#566073",
          700: "#474e5d",
          800: "#3d444f",
          900: "#2e323a",
          950: "#24262d",
        },
        "wild-sand": {
          50: "#f4f4f4",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        laser: {
          50: "#f8f6ee",
          100: "#efe9d2",
          200: "#e1d2a7",
          300: "#cdb16e",
          400: "#c19a4e",
          500: "#b18741",
          600: "#986b36",
          700: "#7a512e",
          800: "#67432c",
          900: "#593a2a",
          950: "#331e15",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
};
