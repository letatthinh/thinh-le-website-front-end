import './globals.css'
import ReduxProvider from '@/redux-toolkit/provider'
import React from 'react'
import App from '.'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <App>{children}</App>
    </ReduxProvider>
  )
}
