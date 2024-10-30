import BodyClient from '@/components/client/body'
import ReduxProvider from '@/components/provider/redux'
import {Inter} from 'next/font/google'
import './globals.css'
import {Analytics} from '@vercel/analytics/react';

const inter = Inter({subsets: ['latin']})

// [Tip]: the home component will be passed into RootLayout as children
// So <body> is another component
export default function RootLayout({children}) {
  return <ReduxProvider>
    <html lang='en'>
      <BodyClient className={inter.className}>
        {children}
        <Analytics />
      </BodyClient>
    </html>
  </ReduxProvider>
}
