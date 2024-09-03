import borderThemeConstant from '@/constants/themes/border'
import borderThemeUtility from '@/utilities/theme/border'
import {createSlice} from '@reduxjs/toolkit'

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
