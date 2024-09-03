import shadowThemeConstant from '@/constants/themes/shadow'
import shadowThemeUtility from '@/utilities/theme/shadow'
import {createSlice} from '@reduxjs/toolkit'

const shadowThemeSlice = createSlice({
  name: 'shadowTheme',
  initialState: shadowThemeUtility
    .getById(shadowThemeConstant.white.id),
  reducers: {
    updateShadowTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

export const {updateShadowTheme} = shadowThemeSlice.actions
export default shadowThemeSlice
