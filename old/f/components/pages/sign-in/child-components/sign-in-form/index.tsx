import { UserServiceApiClient } from '../../../../../app/api/user-service'
import InputControl from '@/components/form-controls/inputs'
import inputTypeConstant from '@/constants/input-type'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import classNameUtility from '@/utilities/class-name'
import { useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import DefaultButton from '../../../../buttons/default'

export default function SignInForm() {
  const { getDefaultButtonThemeClassName } = useReduxTheme()
  const searchParameters = useSearchParams()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onUsernameInputChange = (
    _event: ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(_event.target.value)
  }

  const onPasswordInputChange = (
    _event: ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(_event.target.value)
  }

  const onSignInButtonClick = async (
    _event: React.MouseEvent<HTMLButtonElement>
  ) => {
    _event.preventDefault()

    const userClient = new UserServiceApiClient('https://localhost:7270')
    const user = await userClient.signIn({
      username,
      password
    })

    /*const response = await fetch("https://localhost:7270/api/Users/sign-in", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password
      })
    })*/

    // If no error and we have user data, return it
    if (user) {
      console.log('userSignInResponseDto', user)
    }
  }

  return <section
    className={`flex flex-col gap-6 mb-6`}>
    <InputControl
      controlLabel='Username'
      controlLabelClassName='font-bold'
      controlId='username'
      onChange={onUsernameInputChange}
    />
    <InputControl
      controlType={inputTypeConstant.password}
      controlLabel='Password'
      controlLabelClassName='font-bold'
      controlId='password'
      onChange={onPasswordInputChange}
    />
    <DefaultButton
      ariaLabel={'Sign in'}
      label={'Sign in'}
      className={classNameUtility.mergeClassNames([
        getDefaultButtonThemeClassName(),
        'block px-3 py-1.5 mx-auto'
      ])}
      onClick={onSignInButtonClick}/>
  </section>
}
