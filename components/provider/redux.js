'use client'
import { Provider } from 'react-redux'
import store from '@/redux-toolkit/store'

export default function ReduxProvider({children}) {
  return <Provider store={store}>{children}</Provider>
}
