import backgroundThemeSlice from '@/redux-toolkit/slices/theme/background'
import borderThemeSlice from '@/redux-toolkit/slices/theme/border'
import shadowThemeSlice from '@/redux-toolkit/slices/theme/shadow'
import textThemeSlice from '@/redux-toolkit/slices/theme/text'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    backgroundTheme: backgroundThemeSlice.reducer,
    textTheme: textThemeSlice.reducer,
    borderTheme: borderThemeSlice.reducer,
    shadowTheme: shadowThemeSlice.reducer
  }
})

export default store
