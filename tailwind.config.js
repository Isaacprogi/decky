/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        b1: 'var(--b1)',
        b2: 'var(--b2)',
        b3: 'var(--b3)',
        b4: 'var(--b4)',
        t1: 'var(--t1)',
        t2: 'var(--t2)',
        t3: 'var(--t3)',
        l1: 'var(--l1)',
      },
    },
  },
  plugins: [],
}