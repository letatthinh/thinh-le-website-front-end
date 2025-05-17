
import fillThemeConstant from '@constants/themes/fill.js'
import {createSlice} from '@reduxjs/toolkit'
import fillThemeUtility from '@utilities/theme/fill.js'

const fillThemeSlice = createSlice({
  name: 'fillTheme',
  initialState: fillThemeUtility
    .getById(fillThemeConstant.white.id),
  reducers: {
    updateFillTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

export const {updateFillTheme} = fillThemeSlice.actions
export default fillThemeSlice
