/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ['class', '.app-dark'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E8B4BC', // Rose gold suave
          50: '#fef7f8',
          100: '#fdeef0',
          200: '#fcdde3',
          300: '#fac2cc',
          400: '#f69baa',
          500: '#E8B4BC', // Rose gold principal
          600: '#d88a9a',
          700: '#c26577',
          800: '#a04d5f',
          900: '#864252',
          950: '#4a2127',
          hover: '#f69baa',
          active: '#d88a9a'
        },
        accent: {
          DEFAULT: '#C9A88A', // Dorado champagne suave
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d0',
          300: '#dcc9af',
          400: '#C9A88A', // Dorado champagne
          500: '#b8916f',
          600: '#a67d5f',
          700: '#8a6750',
          800: '#715546',
          900: '#5d473b',
          950: '#31241e',
          hover: '#dcc9af',
          active: '#b8916f'
        },
        secondary: {
          DEFAULT: '#F5E6E8', // Rosa pálido cremoso
          50: '#fefcfd',
          100: '#fef9fa',
          200: '#fdf3f5',
          300: '#fbe8eb',
          400: '#F5E6E8', // Rosa pálido principal
          500: '#e8c9cd',
          600: '#d5a6ac',
          700: '#be8389',
          800: '#9e6a6f',
          900: '#855a5e',
          950: '#4a2f32'
        },
        gold: {
          DEFAULT: '#D4AF7A', // Oro rosado metálico
          light: '#E8C9A0',
          dark: '#B8956A'
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'rose-gold-gradient': 'linear-gradient(135deg, #E8B4BC 0%, #D4AF7A 50%, #F5E6E8 100%)',
        'rose-gold-shimmer': 'linear-gradient(90deg, #E8B4BC 0%, #F5E6E8 25%, #D4AF7A 50%, #F5E6E8 75%, #E8B4BC 100%)',
      }
    },
  },
  backdropBlur: {
    xs: '2px',
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}
