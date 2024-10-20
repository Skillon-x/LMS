/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#053527',
        secondary: '#7a9f79',
        tertiary: '#acd1af',
        cta: '#e74c3c',
        font: '#f6cc72',
        altCta: '#2ecc71',
        custom: '#315e26',
        customtwo : '#97cf8a',
      },
    },
  },
  plugins: [],
}