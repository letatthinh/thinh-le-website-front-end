import backgroundThemeConstant from '@constants/themes/background.js'

const getById = (_id) => {
  return _id === backgroundThemeConstant.white.id
    ? backgroundThemeConstant.white
    : backgroundThemeConstant.black
}

const backgroundThemeUtility = {
  getById
}

export default backgroundThemeUtility
