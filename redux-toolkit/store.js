import backgroundThemeSlice from '@/redux-toolkit/slices/theme/background'
import borderThemeSlice from '@/redux-toolkit/slices/theme/border'
import outlineThemeSlice from '@/redux-toolkit/slices/theme/outline'
import shadowThemeSlice from '@/redux-toolkit/slices/theme/shadow'
import textThemeSlice from '@/redux-toolkit/slices/theme/text'
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
