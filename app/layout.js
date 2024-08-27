import Body from '@/components/client/body'
import ReduxProvider from '@/components/provider/redux'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

// [Tip]: the home component will be passed into RootLayout as children
// So <body> is another component
export default function RootLayout({children}) {
  return <ReduxProvider>
    <html lang='en'>
      <Body className={inter.className}>
        {children}
      </Body>
    </html>
  </ReduxProvider>
}
