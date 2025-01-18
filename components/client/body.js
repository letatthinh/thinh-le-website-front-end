'use client'
import FooterClient from '@/components/client/footer'
import HeaderClient from '@/components/client/header'
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

export default function BodyClient({children, className}) {
  const {backgroundTheme, textTheme} = useSelector(selectTheme)

  return <body
    className={stringUtility.merge([
      'min-w-80 relative text-normal',
      className,
      backgroundTheme.primaryColor,
      textTheme.secondaryColor,
      'font-[family-name:var(--font-geist-sans)]'
    ])}>
    <HeaderClient />
    <main>
      {children}
    </main>
    <FooterClient />
  </body>
}
