/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js, jsx}',
  './components/**/*.{js, jsx}',
  './constants/**/*.{js, jsx}',
  './hooks/**/*.{js, jsx}'
]

export const theme = {
  extend: {
    animation: {
      hamburger: 'hamburger 300ms ease-in-out infinite'
    },
    aspectRatio: {
      '3/2': '3 / 2',
      '4/3': '4 / 3'
    },
    backgroundImage: {
      'profile': 'url(\'/profile.webp\')',
      'sale-and-rental-listings': 'url(\'/projects/sale-and-rental-listings.webp\')'
    },
    colors: {
      'white-accent-color-300': '#d1d5db',
      'white-accent-color-800': '#3730a3',
      'black-accent-color-300': '#e2e8f0',
      'black-accent-color-800': '#450a0a'
    },
    flexBasis: {
      '3/10': '30%',
      '7/10': '70%'
    },
    gap: {
      '18': '4.5rem',
      '30': '7.5rem'
    },
    keyframes: {
      hamburger: {
        '0%, 100%': {transform: 'scale(1)'},
        '50%': {transform: 'scale(1.25, 0.75)'}
      }
    },
    maxWidth: {
      'screen-xs': '480px'
    },
    padding: {
      '18': '4.5rem',
      '30': '7.5rem'
    },
    screens: {
      'xs': '480px'
    },
    transitionProperty: {
      'box-shadow': 'box-shadow',
      'font-size': 'font-size',
      'max-width': 'max-width',
      'padding': 'padding',
      'width': 'width',
      'height': 'height'
    }
  }
}

export const plugins = []
