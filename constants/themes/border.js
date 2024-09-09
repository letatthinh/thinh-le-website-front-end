const shared = {
  after: {
    accentColor: 'after:border-white-accent-color'
  },
  hover: {
    accentColor: 'hover:border-white-accent-color'
  },
  accentColor: 'border-white-accent-color'
}

const white = {
  id: 0,
  before: {
    accentColor: 'before:border-white-accent-color',
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
    accentColor: 'before:border-black-accent-color'
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
