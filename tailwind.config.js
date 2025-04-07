/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#492D25',
        secondary: '#724935',
        background: '#E8E3DD',
        accent: '#EABF7C',
        accent2: '#BD8E4A',
        accent3: '#8D5E2F',
      }
    },
  },
  plugins: [],
}