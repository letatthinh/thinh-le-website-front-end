'use client'
import FooterClient from '@/components/client/footer'
import Header from '@/components/client/header'
import MainClient from '@/components/client/main'
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
    backgroundTheme: (_state) => _state.backgroundTheme
  },
  createSelector
)

export default function BodyClient({children, className}) {
  const {backgroundTheme} = useSelector(selectTheme)

  return <body
    className={stringUtility.merge([
      `${backgroundTheme.primaryColor}`,
      'min-w-80 relative',
      className
    ])}>
    <Header />
    <MainClient>
      {children}
    </MainClient>
    <FooterClient />
  </body>
}
