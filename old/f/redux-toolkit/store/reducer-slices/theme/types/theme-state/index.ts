export default interface ThemeStateType {
  after: {
    background: {
      primaryColor: string
      secondaryColor: string
    }
  }
  before: {
    background: {
      primaryColor: string
      secondaryColor: string
    }
  }
  background: {
    primaryColor: string
    secondaryColor: string
  }
  border: {
    accentColor800: string
  }
  hover: {
    background: {
      accentColor800: string
    }
    text: {
      primaryColor: string
    }
  }
  text: {
    secondaryColor: string
    accentColor800: string
  }
}
