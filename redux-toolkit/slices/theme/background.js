import backgroundThemeConstant from '@/constants/themes/background'
import backgroundThemeUtility from '@/utilities/theme/background'
import {createSlice} from '@reduxjs/toolkit'

/* [Tip]:
  A slice is a piece of state in the store.
  A slice contains multiple reducers.
 */
const backgroundThemeSlice = createSlice({
  name: 'backgroundTheme', // [Tip]: A name, used in action types
  initialState: backgroundThemeUtility
    .getById(backgroundThemeConstant.white.id),
  /* [Tip]:
    Reducer is a function that updates the state managed by its corresponding slice.
    Redux Toolkit allows us to write "mutating" logic in reducers. It
    doesn't actually mutate the state because it uses the Immer library,
    which detects changes to a "draft state" and produces a brand new
    immutable state based off those changes.
   */
  reducers: {
    updateBackgroundTheme: (_state, _action) => {
      return _action.payload
    }
  }
})

// [Tip]: Action creators are generated for each case reducer function.
export const {updateBackgroundTheme} = backgroundThemeSlice.actions
export default backgroundThemeSlice
