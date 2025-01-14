import renderUtility from '@/utilities/render'
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
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function RangeSliderClient({
  label,
  min = 0,
  max = 100,
  behaviour = 'drag-tap',
  step,
  onChange,
  containerClassName,
  tooltipClassName
}) {
  const {
    backgroundTheme,
    borderTheme,
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
      behaviour: behaviour,
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
        base: 'noUi-base w-full h-full relative z-[1]',
        connects: stringUtility.merge([
          'noUi-connects w-full h-full relative z-[0] overflow-hidden',
          'rounded-full'
        ]),
        connect: stringUtility.merge([
          'noUi-connect will-change-transform absolute z-[1] top-0 right-0',
          'w-full h-full origin-top-left',
          backgroundTheme.accentColor700
        ]),
        origin: stringUtility.merge([
          'noUi-origin will-change-transform absolute z-[1] top-0 right-0',
          'w-full h-full origin-top-left h-0'
        ]),
        textDirectionRtl: 'noUi-txt-dir-rtl',
        horizontal: 'noUi-horizontal h-2',
        vertical: 'noUi-vertical',
        handle: stringUtility.merge([
          'noUi-handle backface-hidden absolute rounded-full cursor-pointer',
          'h-3 lg:h-4 w-3 lg:w-4 transition-range-slider-handle box-content',
          // top = (height - horizontal height) / 2
          '-top-[0.4375rem] lg:-top-[0.625rem]',
          // right = width / 2
          '-right-2.5 lg:-right-[0.8125rem] border-4 lg:border-5',
          backgroundTheme.primaryColor,
          borderTheme.secondaryColor300,
          borderTheme.active.accentColor700,
          borderTheme.hover.accentColor700
        ]),
        touchArea: 'noUi-touch-area',
        tap: 'noUi-state-tap',
        drag: 'noUi-state-drag',
        draggable: 'cursor-ew-resize',
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
        tooltip: stringUtility.merge([
          'noUi-tooltip absolute py-0.5 px-1 border rounded-small-1',
          'text-center whitespace-nowrap -translate-x-1/2 left-1/2',
          'bottom-5 lg:bottom-[1.5625rem]',
          backgroundTheme.primaryColor,
          borderTheme.secondaryColor300,
          tooltipClassName
        ])
      }
    })

    rangeSlider.noUiSlider.on('change', onChange)

    return () => {
      rangeSlider.noUiSlider.destroy()
    }
  }, [
    backgroundTheme.accentColor700,
    backgroundTheme.primaryColor,
    borderTheme.accentColor700,
    borderTheme.secondaryColor300,
    max, min, onChange, step]
  )

  return <div className={stringUtility.merge([
    textTheme.secondaryColor,
    containerClassName
  ])}>
    {renderUtility.renderIfTrue(label, <label
      className={'font-medium'}>
      {label}
    </label>)}
    <div className={stringUtility.merge([
      label ? 'mt-2' : '',
      'pb-1.5 lg:pb-[0.5625rem] pt-9 lg:pt-[2.6875rem]'
    ])}>
      <div
        ref={ref}></div>
    </div>
  </div>
}
