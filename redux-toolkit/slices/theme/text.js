import textThemeConstant from '@/constants/themes/text'
import textThemeUtility from '@/utilities/theme/text'
import {createSlice} from '@reduxjs/toolkit'

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
