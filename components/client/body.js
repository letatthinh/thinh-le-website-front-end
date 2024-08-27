'use client'
import NavigationBar from '@/components/client/navigation-bar'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

/* [Tip]:
  Modern use case to create a structured selector
  to select multiple slices from state (https://reselect.js.org/api/createstructuredselector/#modern-use-case)
  It's generally not necessary to use useCallback with createSelector/createStructuredSelector.
*/
const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function Body({children, className}) {
  const {backgroundTheme, textTheme} = useSelector(selectTheme)

  return <body
    className={stringUtility.merge([
      `${backgroundTheme.primaryColor} ${textTheme.secondaryColor}`,
      'min-w-60', className
    ])}>
    <header>
      <NavigationBar />
    </header>
    <main>
      {children}
    </main>
  </body>
}
