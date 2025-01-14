import stringUtility from '@/utilities/string'
import noUiSlider from 'nouislider'
import {useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import './style.css'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme,
    outlineTheme: (_state) => _state.outlineTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function RangeSliderClient({
  min = 0,
  max = 100,
  step,
  onChange,
  className
}) {
  const {
    backgroundTheme,
    borderTheme,
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)

  const ref = useRef(null)

  useEffect(() => {
    const rangeSlider = ref.current

    if (!rangeSlider) {
      return
    }

    noUiSlider.create(rangeSlider, {
      start: [33, 66],
      behaviour: 'drag',
      step: step,
      connect: [false, true, false],
      tooltips: true,
      range: {
        'min': min,
        'max': max
      },
      cssPrefix: '', // defaults to 'noUi-',
      cssClasses: {
        target: stringUtility.merge([
          'noUi-target rounded-full border',
          backgroundTheme.primaryColor,
          borderTheme.secondaryColor300
        ]),
        base: 'noUi-base w-full h-full relative',
        connects: 'noUi-connects w-full h-full',
        connect: stringUtility.merge([
          'noUi-connect absolute top-0 w-full h-full origin-top-left',
          backgroundTheme.accentColor700
        ]),
        origin: 'noUi-origin absolute top-0 w-full h-full origin-top-left h-0',
        textDirectionRtl: 'noUi-txt-dir-rtl',
        horizontal: 'noUi-horizontal h-1.5 lg:h-2 transition-height',
        vertical: 'noUi-vertical',
        handle: stringUtility.merge([
          'noUi-handle backface-hidden absolute rounded-full cursor-pointer',
          'h-1.5 lg:h-2 w-1.5 lg:w-2 transition-wh -top-px right-0',
          backgroundTheme.secondaryColor
        ]),
        touchArea: 'noUi-touch-area',
        tap: 'noUi-state-tap',
        drag: 'noUi-state-drag',
        draggable: 'cursor-grabbing',
        active: 'noUi-active',
        pips: 'noUi-pips',
        value: 'noUi-value',
        valueSub: 'noUi-value-sub',
        marker: 'noUi-marker',
        markerSub: 'noUi-marker-sub',
        markerLarge: 'noUi-marker-large',
        pipsHorizontal: 'noUi-pips-horizontal',
        valueHorizontal: 'noUi-value-horizontal',
        rtl: 'noUi-rtl',
        markerHorizontal: 'noUi-marker-horizontal',
        pipsVertical: 'noUi-pips-vertical',
        valueVertical: 'noUi-value-vertical',
        markerVertical: 'noUi-marker-vertical',
        tooltip: 'noUi-tooltip'
      }
    })

    rangeSlider.noUiSlider.on('change', onChange)

    return () => {
      rangeSlider.noUiSlider.destroy()
    }
  }, [borderTheme.secondaryColor300, max, min, onChange, step])

  return <div
    ref={ref}
    className={className}></div>
}
