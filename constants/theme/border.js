const shared = {
  after: {
    accentColor: 'after:border-sky-400'
  },
  accentColor: 'border-sky-400'
}

const white = {
  id: 0,
  before: {
    accentColor: 'before:border-sky-400',
    top: {
      secondaryColor: 'before:border-t-black'
    }
  },
  primaryColor: 'border-white',
  secondaryColor: 'border-black',
  ...shared
}

const black = {
  id: 1,
  before: {
    accentColor: 'before:border-sky-400'
  },
  primaryColor: 'border-black',
  secondaryColor: 'border-white',
  ...shared
}

const borderThemeConstant = {
  white,
  black
}

export default borderThemeConstant
