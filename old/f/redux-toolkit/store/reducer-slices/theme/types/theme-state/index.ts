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
    accentColor: string
  }
  hover: {
    background: {
      accentColor: string
    }
    text: {
      primaryColor: string
    }
  }
  text: {
    secondaryColor: string
    accentColor: string
  }
}
