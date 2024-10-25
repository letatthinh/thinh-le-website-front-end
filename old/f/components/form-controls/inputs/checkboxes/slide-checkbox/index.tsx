import formControlUtility from '@/components/form-controls/utility'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import Direction from '@/types/enums/direction'
import classNameUtility from '@/utilities/class-name'
import componentUtility from '@/utilities/component'
import { ChangeEvent, useState } from 'react'
import SlideCheckBoxControlPropertyType from '../../../../../types/properties/form-controls/input/checkboxes/slide-checkbox'

export default function SlideCheckBoxControl({
  controlLabel = '',
  controlLabelDirection = Direction.Top,
  controlLabelClassName = '',
  shouldShowLabel = true,
  controlId,
  controlName,
  initialValue,
  onChange
}: SlideCheckBoxControlPropertyType) {
  const { getSlideCheckBoxThemeClassName } = useReduxTheme()
  const [isChecked, setIsChecked] = useState<boolean>(initialValue ?? false)

  const onCheckBoxControlChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)

    if (onChange) {
      onChange(event)
    }
  }

  return (
    <>
      <label
        htmlFor={controlId}
        className={classNameUtility.mergeClassNames([
          formControlUtility.getControlLabelDirectionClassNameByDirection(
            shouldShowLabel,
            controlLabelDirection
          ),
          controlLabelClassName
        ])}>
        {componentUtility.renderByCondition(
          shouldShowLabel,
          <span>{controlLabel}</span>
        )}
        <span
          className={classNameUtility.mergeClassNames([
            getSlideCheckBoxThemeClassName(isChecked),
            'inline-block w-12 h-6 relative',
            'before:absolute before:top-0.5 before:left-0.5',
            'before:content-empty-string',
            'before:w-4 before:h-4 before:transition',
            isChecked ? 'before:translate-x-6' : ''
          ])}></span>
      </label>
      <input
        id={controlId}
        name={controlName ?? controlId}
        aria-label={controlLabel}
        type='checkbox'
        checked={isChecked}
        className='w-0 h-0'
        onChange={onCheckBoxControlChange}
      />
    </>
  )
}
