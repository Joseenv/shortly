/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-cyan': 'hsl(180, 66%, 49%)',
        'primary-dark-violet': 'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',
        'neutral-grayish-violet': 'hsl(257, 7%, 63%)',
        'neutral-dark-blue': 'hsl(255, 11%, 22%)',
        'neutral-dark-violet': 'hsl(260, 8%, 14%)',
        'neutral-blue': 'hsl(225,33%,95%)'
      }
    },
  },
  plugins: [],
}

