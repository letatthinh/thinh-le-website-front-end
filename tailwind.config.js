/** @type {import('tailwindcss').Config} */
export const content = [
  './app/**/*.{js, jsx}',
  './components/**/*.{js, jsx}',
  './constants/theme/**/*.{js, jsx}',
  './utilities/class-name/**/*.{js, jsx}'
]

export const theme = {
  extend: {
    backgroundImage: {
      'hero': 'url("/background/hero-background.jpg")'
    },
    transitionProperty: {
      'font-size': 'font-size',
      'text': 'font-size',
      'box-model': 'max-width, padding' // [Tip]: add more box model properties here
    },
    animation: {
      hamburger: 'hamburger 300ms ease-in-out infinite'
    },
    keyframes: {
      hamburger: {
        '0%, 100%': {transform: 'scale(1)'},
        '50%': {transform: 'scale(1.25, 0.75)'}
      }
    }
  }
}

export const plugins = []
