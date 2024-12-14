const shared = {
  opacity: {
    twenty: {
      accentColor800: 'shadow-white-accent-color-800/20'
    }
  }
}

const white = {
  id: 0,
  ...shared
}

const black = {
  id: 1,
  ...shared
}

const shadowThemeConstant = {
  white,
  black
}

export default shadowThemeConstant
