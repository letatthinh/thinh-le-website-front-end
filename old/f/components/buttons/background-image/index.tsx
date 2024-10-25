import ButtonPropertyType from '@/types/properties/buttons'
import classNameUtility from '@/utilities/class-name'
import React from 'react'

export default function BackgroundImageButton({
  className,
  label,
  type,
  isDisabled,
  onClick
}: ButtonPropertyType) {
  const onButtonClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(_event)
    }
  }

  return (
    <button
      type={type ?? 'button'}
      aria-label={label}
      className={classNameUtility.mergeClassNames([
        'block p-5 bg-contain bg-no-repeat',
        className ?? ''
      ])}
      onClick={onButtonClick}
      disabled={isDisabled ?? false}></button>
  )
}
