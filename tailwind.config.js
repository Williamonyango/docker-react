/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7f9",
          100: "#e7eef2",
          200: "#c9d6df",
          300: "#aabecb",
          400: "#6d90a6", // lighter steel blue
          500: "#2f6d8a", // Primary: refined professional blue
          600: "#255770",
          700: "#1b4156",
          800: "#122c3b", // Headers / navbar background
          900: "#091a2e", // Base dark navy (matches logo background)
        },
        accent: {
          500: "#0ea271", // Emerald green, slightly deeper for harmony
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
