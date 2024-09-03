/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js, jsx}',
  './components/**/*.{js, jsx}',
  './constants/themes/**/*.{js, jsx}',
  './hooks/**/*.{js, jsx}',
  './utilities/class-name/**/*.{js, jsx}'
]

export const theme = {
  extend: {
    backgroundImage: {
      'home-page-hero': 'url("/background/hero-background.jpg")'
    },
    transitionProperty: {
      'font-size': 'font-size',
      'text': 'font-size',
      'max-width': 'max-width',
      'box-model': 'max-width, padding',
      'box-shadow': 'box-shadow'
    },
    animation: {
      hamburger: 'hamburger 300ms ease-in-out infinite'
    },
    keyframes: {
      hamburger: {
        '0%, 100%': {transform: 'scale(1)'},
        '50%': {transform: 'scale(1.25, 0.75)'}
      }
    },
    screens: {
      'xs': '480px'
    },
    padding: {
      '15': '3.75rem'
    },
    maxWidth: {
      'screen-xs': '480px'
    }
  }
}

export const plugins = []
