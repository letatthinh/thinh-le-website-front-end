import Direction from '@/types/enums/direction'
import BasePropertyType from '@/types/properties/base'

export default interface FormControlPropertyType extends BasePropertyType {
  initialValue?: unknown
  controlLabel: string
  controlLabelClassName?: string
  controlLabelDirection?: Direction
  shouldShowLabel?: boolean
  controlId: string
  controlName?: string // example: <input name="firstName" />
  controlClassName?: string
  isDisabled?: boolean
  isVisible?: boolean
  value?: string
}
