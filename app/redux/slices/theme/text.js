import textThemeConstant from '@constants/themes/text.js'
import {createSlice} from '@reduxjs/toolkit'
import textThemeUtility from '@utilities/theme/text.js'

const textThemeSlice = createSlice({
  name: 'textTheme',
  initialState: textThemeUtility
    .getById(textThemeConstant.white.id),
  reducers: {
    updateTextTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

export const {updateTextTheme} = textThemeSlice.actions
export default textThemeSlice
