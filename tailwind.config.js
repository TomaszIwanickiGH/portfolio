/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(228, 15%, 15%)',
        secondary: 'hsl(14, 100%, 65%)',
        darkGray: 'hsl(228, 15%, 20%)',
        lightGray: 'hsl(228, 8%, 65%)',
      },
    },
  },
  plugins: [],
}
