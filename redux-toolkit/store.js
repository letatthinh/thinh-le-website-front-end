import backgroundThemeSlice from '@/redux-toolkit/slices/theme/background'
import borderThemeSlice from '@/redux-toolkit/slices/theme/border'
import textThemeSlice from '@/redux-toolkit/slices/theme/text'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    backgroundTheme: backgroundThemeSlice.reducer,
    textTheme: textThemeSlice.reducer,
    borderTheme: borderThemeSlice.reducer
  }
})

export default store
