import outlineThemeConstant from '@/constants/themes/outline'
import outlineThemeUtility from '@/utilities/theme/outline'
import {createSlice} from '@reduxjs/toolkit'

const outlineThemeSlice = createSlice({
  name: 'fillTheme',
  initialState: outlineThemeUtility
    .getById(outlineThemeConstant.white.id),
  reducers: {
    updateOutlineTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

export const {updateOutlineTheme} = outlineThemeSlice.actions
export default outlineThemeSlice
