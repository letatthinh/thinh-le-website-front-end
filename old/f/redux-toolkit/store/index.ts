import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './reducer-slices/theme'

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
