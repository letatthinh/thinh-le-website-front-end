import Direction from '@/types/enums/direction'
import classNameUtility from '@/utilities/class-name'

const getControlLabelDirectionClassNameByDirection = (
  _shouldShowLabel: boolean,
  _direction: Direction
): string => {
  let flexGap = ''

  if (_shouldShowLabel) {
    flexGap =
      _direction === Direction.Left || _direction === Direction.Right
        ? 'gap-3'
        : 'gap-1.5'
  }

  return classNameUtility.mergeClassNames([
    'flex',
    classNameUtility.getFlexDirectionClassNameByDirection(_direction),
    flexGap
  ])
}

const formControlUtility = {
  getControlLabelDirectionClassNameByDirection
}

export default formControlUtility
