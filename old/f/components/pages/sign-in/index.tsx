'use client'
import BackgroundImageButton from '@/components/buttons/background-image'
import SectionContainer from '@/components/layouts/container/section'
import SignInForm from '@/components/pages/sign-in/child-components/sign-in-form'
import signInConstant from '@/components/pages/sign-in/constant'
import Heading1 from '@/components/texts/h1'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import classNameUtility from '@/utilities/class-name'
import React from 'react'


export default function SignInPage() {
  const { reduxTheme } = useReduxTheme()

  const onSignInWithGoogleButtonClick = (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    _event.preventDefault()
  }

  return <>
    <SectionContainer>
      <Heading1>LOGIN</Heading1>
      <section
        className={classNameUtility.mergeClassNames([
          reduxTheme.borderColor,
          'sm:max-w-sm border-2 p-6 mx-auto'
        ])}>
        <section>
          <SignInForm />
        </section>
        <article>
          <p className='mb-1.5'>Or login via:</p>
          <section className='flex gap-x-3 justify-center'>
            <BackgroundImageButton
              label={signInConstant.googleSignInButton.label}
              className={signInConstant.googleSignInButton.className}
              onClick={onSignInWithGoogleButtonClick}
            />
          </section>
        </article>
      </section>
    </SectionContainer>
  </>
}
