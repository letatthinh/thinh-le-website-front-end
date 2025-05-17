
import borderThemeConstant from '@constants/themes/border.js'
import {createSlice} from '@reduxjs/toolkit'
import borderThemeUtility from '@utilities/theme/border.js'

const borderThemeSlice = createSlice({
  name: 'borderTheme',
  initialState: borderThemeUtility
    .getById(borderThemeConstant.white.id),
  reducers: {
    updateBorderTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

export const {updateBorderTheme} = borderThemeSlice.actions
export default borderThemeSlice
