import classNameConstant from '@/constants/class-name'
import Direction from '@/types/enums/direction'
import GapSize from '@/types/enums/gap-size'
import ValidationMessageType from '@/types/enums/validation-message'

const getValidationMessageTextColorByType = (
  _validationMessage: ValidationMessageType
) => {
  switch (_validationMessage) {
    case ValidationMessageType.Error:
      return 'text-red-600'
    default:
      return ''
  }
}

const getGapClassNameBySize = (
  _gapSize: GapSize
) => {
  switch (_gapSize) {
    case GapSize.Small:
      return 'gap-1.5'
    case GapSize.Medium:
      return 'gap-3'
    case GapSize.Large:
      return 'gap-6'
    default:
      return ''
  }
}

const getContentCardsSectionClassNameByNumberOfColumns = (
  _numberOfColumns: number,
  _gapSize: GapSize,
): string => {
  const gapClassName = classNameUtility.getGapClassNameBySize(_gapSize)

  switch (_numberOfColumns) {
    case 2:
      return `${classNameConstant.section.contentCards2} ${gapClassName}`
    case 3:
      return `${classNameConstant.section.contentCards3} ${gapClassName}`
    case 4:
      return `${classNameConstant.section.contentCards4} ${gapClassName}`
    case 5:
      return `${classNameConstant.section.contentCards5} ${gapClassName}`
    default:
      return `${classNameConstant.section.contentCards6} ${gapClassName}`
  }
}

const getFlexDirectionClassNameByDirection = (
  _direction: Direction
): string => {
  if (_direction === Direction.Left || _direction === Direction.Right) {
    if (_direction === Direction.Right) {
      return `items-center flex-row-reverse`
    }

    return 'items-center'
  } else {
    return _direction === Direction.Top ? 'flex-col' : 'flex-col-reverse'
  }
}

const mergeClassNames = (_classNames: (string | undefined)[]) => {
  if (_classNames?.length) {
    let result = ''

    _classNames.forEach((_className, _index) => {
      if (_className) {
        if (_index !== 0) {
          let extraSpace = ' '

          if (_index === 1 && !_classNames[0]) {
            extraSpace = ''
          }

          result += extraSpace
        }

        result += _className
      }
    })

    return result
  }

  return ''
}

const classNameUtility = {
  getValidationMessageTextColorByType,
  getGapClassNameBySize,
  getContentCardsSectionClassNameByNumberOfColumns,
  getFlexDirectionClassNameByDirection,
  mergeClassNames
}

export default classNameUtility
