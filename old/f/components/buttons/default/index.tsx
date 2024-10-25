'use client'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import ButtonPropertyType from '@/types/properties/buttons'
import classNameUtility from '@/utilities/class-name'
import React from 'react'

export default function DefaultButton({
  className,
  spacingClassNameOverride,
  ariaLabel,
  label,
  type,
  isDisabled,
  onClick,
  children
}: ButtonPropertyType) {
  const { getDefaultButtonThemeClassName } = useReduxTheme()

  const onButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(_event)
    }
  }

  return (
    <button
      type={type ?? 'button'}
      aria-label={label ?? ariaLabel}
      className={classNameUtility.mergeClassNames([
        getDefaultButtonThemeClassName(),
        'block',
        spacingClassNameOverride ?? 'px-3 py-1.5',
        className ?? ''
      ])}
      onClick={onButtonClick}
      disabled={isDisabled ?? false}>
      {label}
      {children}
    </button>
  )
}
