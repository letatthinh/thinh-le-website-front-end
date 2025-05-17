import backgroundThemeConstant from '@constants/themes/background.js'
import {createSlice} from '@reduxjs/toolkit'
import backgroundThemeUtility from '@utilities/theme/background.js'

const backgroundThemeSlice = createSlice({
  name: 'backgroundTheme',
  initialState: backgroundThemeUtility
    .getById(backgroundThemeConstant.white.id),

  reducers: {
    updateBackgroundTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

// [Tip]: Action creators are generated for each case reducer function.
export const {updateBackgroundTheme} = backgroundThemeSlice.actions
export default backgroundThemeSlice
