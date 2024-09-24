/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95a5a6',
        secondary: '#2e4053',
        accent: '#f4d03f',
        background: '#f8f9f9',
      }
    },
  },
  plugins: [],
}

