import React from 'react'
import BasePropertyType from '../base'

export default interface ButtonPropertyType extends BasePropertyType {
  ariaLabel?: string
  label?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  isDisabled?: boolean
  onClick?(_event: React.MouseEvent<HTMLButtonElement>): void
}
