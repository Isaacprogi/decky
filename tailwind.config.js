/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors:{
        background:"rgba(var(--grape))",
        ujk:"rgba(var(--grape))",
        grape:"rgba(var(--grape))",
        grape:"rgba(var(--grape))"
      }
    },
  },
  plugins: [],
}