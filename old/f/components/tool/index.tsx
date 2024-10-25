import Paragraph from '@/components/texts/paragraph'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import ToolPropertyType from '@/types/properties/tool'
import classNameUtility from '@/utilities/class-name'
import DefaultButton from '../buttons/default'

export default function Tool({
  className,
  children,
  name,
  buttonClassName,
  onRunButtonClick,
  isRunButtonDisabled
}: ToolPropertyType) {
  const { reduxTheme } = useReduxTheme()

  return (
    <section
      className={classNameUtility.mergeClassNames([
        reduxTheme.borderColor,
        'border-2 p-3',
        className ?? ''
      ])}>
      <Paragraph className='font-bold'>{name}</Paragraph>
      {children}
      <DefaultButton
        ariaLabel='Run'
        className={`${buttonClassName} mt-3 mx-auto`}
        onClick={onRunButtonClick}
        isDisabled={isRunButtonDisabled}
      />
    </section>
  )
}
