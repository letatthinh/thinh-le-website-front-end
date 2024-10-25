import SignInPage from '@/components/pages/sign-in'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in'
}

export default function Page() {
  return <SignInPage />
}
