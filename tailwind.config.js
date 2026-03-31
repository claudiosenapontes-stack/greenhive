/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        charcoal: '#1a1a1a',
        gray: { DEFAULT: '#6b6b6b', light: '#e5e5e5', dark: '#2a2a2a' },
        'off-white': '#f8f8f6',
        olive: { DEFAULT: '#5a7c5a', light: '#7a9c7a' }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}