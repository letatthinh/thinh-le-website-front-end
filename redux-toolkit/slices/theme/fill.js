import fillThemeConstant from '@/constants/themes/fill'
import fillThemeUtility from '@/utilities/theme/fill'
import {createSlice} from '@reduxjs/toolkit'

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
