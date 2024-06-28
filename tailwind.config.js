/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'royal-blue': '#3352E8',
        'mirage': '#161A27',
        'ebony': '#0A0E17',
        'dodger-blue': '#407BFF',
        'white': '#FFFFFF',
        'river-bed': '#454F5D',
        'background': '#334155',
        'transparent': '#1d4ed8',
        'current': '#FF3276',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'amber': '#fef3c7',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}
