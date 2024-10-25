import ThemeName from '@/types/enums/theme'
import themeConstant from '../constant'

const getThemeByName = (_themeName: ThemeName) => {
  return _themeName === ThemeName.White
    ? themeConstant.whiteThemeState
    : themeConstant.blackThemeState
}

const themeUtility = {
  getThemeByName
}

export default themeUtility
