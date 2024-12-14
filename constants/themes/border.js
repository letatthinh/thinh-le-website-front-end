const shared = {
  after: {
    accentColor800: 'after:border-white-accent-color-800'
  },
  hover: {
    accentColor800: 'hover:border-white-accent-color-800'
  },
  accentColor800: 'border-white-accent-color-800'
}

const white = {
  id: 0,
  before: {
    accentColor800: 'before:border-white-accent-color-800',
    top: {
      secondaryColor: 'before:border-t-black'
    }
  },
  primaryColor: 'border-white',
  secondaryColor: 'border-black',
  opacity: {
    ten: {
      secondaryColor: 'border-black/10'
    }
  },
  ...shared
}

const black = {
  id: 1,
  before: {
    accentColor800: 'before:border-black-accent-color-800'
  },
  primaryColor: 'border-black',
  secondaryColor: 'border-white',
  opacity: {
    ten: {
      secondaryColor: 'border-white/10'
    }
  },
  ...shared
}

const borderThemeConstant = {
  white,
  black
}

export default borderThemeConstant
