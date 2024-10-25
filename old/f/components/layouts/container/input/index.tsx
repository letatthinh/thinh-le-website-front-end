import formControlUtility from '@/components/form-controls/utility'
import Direction from '@/types/enums/direction'
import InputTextControlPropertyType from '@/types/properties/form-controls/input/texts/input-text'
import classNameUtility from '@/utilities/class-name'
import componentUtility from '@/utilities/component'

export default function InputContainer({
  className,
  children,
  controlLabel,
  controlLabelDirection,
  controlLabelClassName,
  shouldShowLabel,
  controlId
}: InputTextControlPropertyType) {
  return (
    <article
      className={classNameUtility.mergeClassNames([
        formControlUtility.getControlLabelDirectionClassNameByDirection(
          shouldShowLabel ?? true,
          controlLabelDirection ?? Direction.Top
        ),
        className ?? ''
      ])}>
      <label
        htmlFor={controlId}
        className={controlLabelClassName}>
        {componentUtility.renderByCondition(
          shouldShowLabel ?? true,
          <span>{controlLabel}</span>
        )}
      </label>
      {children}
    </article>
  )
}
