const shared = {
  after: {
    accentColor: 'after:border-blue-800'
  },
  hover: {
    accentColor: 'hover:border-blue-800'
  },
  accentColor: 'border-blue-800'
}

const white = {
  id: 0,
  before: {
    accentColor: 'before:border-blue-800',
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
    accentColor: 'before:border-blue-800'
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
