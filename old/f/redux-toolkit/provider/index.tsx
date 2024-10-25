'use client'
import BasePropertyType from '@/types/properties/base'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function ReduxProvider({ children }: BasePropertyType) {
  return <Provider store={store}>{children}</Provider>
}
