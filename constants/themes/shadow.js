const shared = {
  opacity: {
    twenty: {
      accentColor: 'shadow-white-accent-color/20'
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
