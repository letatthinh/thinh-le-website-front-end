const white = {
  id: 0,
  focus: {
    input: {
      accentColor800: 'focus:outline-white-accent-color-800'
    }
  },
  hasFocusWithin: {
    input: {
      accentColor800: 'has-[input:focus-within]:outline-white-accent-color-800'
    }
  },
  secondaryColor400: 'outline-gray-400',
  invalid: 'invalid:outline-red-600'
}

const black = {
  id: 1,
  hasFocusWithin: {
    input: {
      accentColor800: '?' // [Debt]
    }
  },
  secondaryColor400: 'outline-gray-400', // [Debt]
  invalid: 'invalid:outline-red-600'
}

const outlineThemeConstant = {
  white,
  black
}

export default outlineThemeConstant
