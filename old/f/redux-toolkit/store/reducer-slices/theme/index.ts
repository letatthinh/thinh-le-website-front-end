import ThemeName from '@/types/enums/theme'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ThemeStateType from './types/theme-state'
import configuration from './utility'

const initialThemeState = configuration.getThemeByName(ThemeName.White)

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    updateThemeAction: (_state, _action: PayloadAction<ThemeStateType>) => {
      return _action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateThemeAction } = themeSlice.actions
export default themeSlice
