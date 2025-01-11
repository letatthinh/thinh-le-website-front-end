import BodyClient from '@/components/client/body'
import ReduxProvider from '@/components/provider/redux'
import {Analytics} from '@vercel/analytics/react'
import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

// [Tip]: the home component will be passed into RootLayout as children
// So <body> is another component
export default function RootLayout({children}) {
  return <ReduxProvider>
    <html lang='en'>
      <BodyClient
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </BodyClient>
    </html>
  </ReduxProvider>
}
