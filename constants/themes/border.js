const shared = {
  after: {
    accentColor: 'after:border-dark-blue'
  },
  hover: {
    accentColor: 'hover:border-dark-blue'
  },
  accentColor: 'border-dark-blue'
}

const white = {
  id: 0,
  before: {
    accentColor: 'before:border-dark-blue',
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
    accentColor: 'before:border-dark-blue'
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
