'use client'
import BackgroundImageButton from '@/components/buttons/background-image'
import SectionContainer from '@/components/layouts/container/section'
import SignInForm from '@/components/pages/sign-in/child-components/sign-in-form'
import signInConstant from '@/components/pages/sign-in/constant'
import Heading1 from '@/components/texts/h1'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import classNameUtility from '@/utilities/class-name'
import React from 'react'


export default function HomePage() {
  const { reduxTheme } = useReduxTheme()

  return <div className={'relative'}>
    Home
  </div>
}
