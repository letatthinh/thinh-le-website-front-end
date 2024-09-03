import shadowThemeConstant from '@/constants/themes/shadow'

const getById = (_id) => {
  return _id === shadowThemeConstant.white.id
    ? shadowThemeConstant.white
    : shadowThemeConstant.black
}

const shadowThemeUtility = {
  getById
}

export default shadowThemeUtility
