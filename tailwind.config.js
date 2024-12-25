/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#374F3B',
          500: '#5A8261',
        }
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        yomogi: ['Yomogi', 'serif'],
      },
    },
  },
  plugins: [],
}

