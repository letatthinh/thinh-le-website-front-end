'use client'
import NavigationBar from '@/components/navigation-bar'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import BasePropertyType from '@/types/properties/base'
import classNameUtility from '@/utilities/class-name'
import React from 'react'

export default function Body(
  {
    children,
    className
  }: BasePropertyType
) {
  const { reduxTheme } = useReduxTheme()

  return <body
    className={classNameUtility.mergeClassNames([
      `${reduxTheme.background.primaryColor} ${reduxTheme.text.secondaryColor}`,
      'container mx-auto px-4 transition-all',
      className
    ])}>
    <NavigationBar />
    {children}
  </body>
}
