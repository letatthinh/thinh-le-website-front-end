/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js, jsx}',
    './components/**/*.{js, jsx}',
    './constants/**/*.{js, jsx}',
    './hooks/**/*.{js, jsx}'
  ],
  theme: {
    extend: {
      animation: {
        hamburger: 'hamburger 300ms ease-in-out infinite'
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '4/3': '4 / 3'
      },
      backgroundImage: {
        'stockton': 'url(\'/background/stockton-background.avif\')',
        'profile': 'url(\'/profile.webp\')',
        'sale-and-rental-listings': 'url(\'/projects/sale-and-rental-listings.webp\')'
      },
      borderWidth: {
        '5': '0.3125rem'
      },
      colors: {
        'white-accent-color-100': '#e0f2fe',
        'white-accent-color-700': '#0369a1',
        'white-invalid-600': '#dc2626',
        'white-valid-600': '#059669',
        'white-warning-400': '#fbbf24',
        'black-accent-color-100': '#e2e8f0', // [Debt]
        'black-accent-color-700': '#450a0a', // [Debt]
        'black-invalid-600': '#0369a1', // [Debt]
        'black-valid-600': '#0369a1', // [Debt]
        'black-warning-400': '#0369a1' // [Debt]
      },
      flexBasis: {
        '3/10': '30%',
        '7/10': '70%'
      },
      keyframes: {
        hamburger: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.25, 0.75)'}
        }
      },
      screens: {
        'xxs': '320px',
        'xs': '480px'
      },
      spacing: {
        '1.75': '0.4375rem',
        '2.25': '0.5625rem',
        '2.5': '0.625rem',
        '3.25': '0.8125rem',
        '4.5': '1.125rem',
        '5.25': '1.3125rem',
        '5.5': '1.375rem',
        '5.75': '1.4375rem',
        '6.25': '1.5625rem',
        '6.5': '1.625rem',
        '7.75': '1.9375rem',
        '9.75': '2.4375rem',
        '10.75': '2.6875rem',
        '11.75': '2.9375rem',
        '15.5': '3.875rem',
        '19.75': '4.875rem', // big-6
        '18': '4.5rem',
        '19': '4.75rem',
        '30': '7.5rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem'
      },
      transitionProperty: {
        'box-shadow': 'box-shadow',
        'font-size': 'font-size',
        'max-width': 'max-width',
        'padding': 'padding',
        'width': 'width',
        'height': 'height',
        'range-slider-handle': 'width height border-width'
      }
    }
  },
  plugins: []
}

export default config
