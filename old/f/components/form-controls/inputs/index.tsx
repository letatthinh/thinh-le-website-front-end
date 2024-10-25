import InputContainer from '@/components/layouts/container/input'
import inputTypeConstant from '@/constants/input-type'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import Direction from '@/types/enums/direction'
import InputTextControlPropertyType from '@/types/properties/form-controls/input/texts/input-text'
import classNameUtility from '@/utilities/class-name'
import { ChangeEvent } from 'react'

export default function InputControl({
  className,
  controlLabel,
  controlLabelDirection,
  controlLabelClassName,
  shouldShowLabel = true,
  controlId,
  controlName,
  controlType,
  controlClassName,
  reference,
  isDisabled,
  onChange
}: InputTextControlPropertyType) {
  const { getInputThemeClassName } = useReduxTheme()

  const onInputTextControlChange = (_event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(_event)
    }
  }

  return (
    <>
      <InputContainer
        className={classNameUtility.mergeClassNames([className ?? ''])}
        controlLabel={controlLabel ?? ''}
        controlLabelDirection={controlLabelDirection ?? Direction.Top}
        controlLabelClassName={controlLabelClassName ?? ''}
        shouldShowLabel={shouldShowLabel ?? true}
        controlId={controlId}>
        <input
          ref={reference}
          id={controlId}
          name={controlName ?? controlId}
          aria-label={controlLabel}
          type={controlType ?? inputTypeConstant.text}
          className={classNameUtility.mergeClassNames([
            getInputThemeClassName(),
            'px-3 py-1.5 border-2 focus:outline-none',
            controlClassName ?? ''
          ])}
          onChange={(_event) => {
            onInputTextControlChange(_event)
          }}
          disabled={isDisabled}
        />
      </InputContainer>
    </>
  )
}
