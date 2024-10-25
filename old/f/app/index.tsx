import Body from '@/components/body'
import BasePropertyType from '@/types/properties/base'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function App(
  { children }: BasePropertyType
) {

  return (
    <html lang='en'>
      <Body className={inter.className}>
        { children }
      </Body>
    </html>
  )
}
