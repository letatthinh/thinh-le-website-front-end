import backgroundThemeSlice from '@redux/slices/theme/background.js'
import borderThemeSlice from '@redux/slices/theme/border.js'
import outlineThemeSlice from '@redux/slices/theme/outline.js'
import shadowThemeSlice from '@redux/slices/theme/shadow.js'
import textThemeSlice from '@redux/slices/theme/text.js'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    backgroundTheme: backgroundThemeSlice.reducer,
    borderTheme: borderThemeSlice.reducer,
    outlineTheme: outlineThemeSlice.reducer,
    shadowTheme: shadowThemeSlice.reducer,
    textTheme: textThemeSlice.reducer
  }
})

export default store
