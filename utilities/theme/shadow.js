import shadowThemeConstant from '@/constants/theme/shadow'

const getById = (_id) => {
  return _id === shadowThemeConstant.white.id
    ? shadowThemeConstant.white
    : shadowThemeConstant.black
}

const shadowThemeUtility = {
  getById
}

export default shadowThemeUtility
