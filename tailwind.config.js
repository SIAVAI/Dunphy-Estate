/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "rubik": ["Rubik", "sans-serif"],
      "dm": ["DM Sans", "sans-serif"],
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

