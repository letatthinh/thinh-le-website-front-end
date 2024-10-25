import React, { RefObject } from 'react'

export default interface BasePropertyType {
  id?: string
  className?: string
  spacingClassNameOverride?: string
  children?: React.ReactNode
  reference?: RefObject<HTMLElement>
}
