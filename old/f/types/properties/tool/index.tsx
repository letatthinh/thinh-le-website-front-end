import BasePropertyType from '../base'

export default interface ToolPropertyType extends BasePropertyType {
  name: string
  buttonClassName?: string
  onRunButtonClick?(_event: React.MouseEvent<HTMLButtonElement>): void
  isRunButtonDisabled?: boolean
}
