import RangeSliderClient from '@/components/client/range-slider'
import stringUtility from '@/utilities/string'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme
  },
  createSelector
)

export default function FilterPanelClient({
  ref, className
}) {
  const {
    backgroundTheme
  } = useSelector(selectTheme)
  const [tempMax, setTempMax] = useState(100)

  const onPriceRangeChange = (handleValues) => {
    console.log(handleValues)
  }

  return <section
    ref={ref}
    className={stringUtility.merge([
      'content-p text-normal border border-t-0',
      backgroundTheme.primaryColor,
      className
    ])}>
    <button
      className={'mr-6'}
      onClick={() => setTempMax(tempMax + 1)}>
      increase max
    </button>
    <button onClick={() => setTempMax(tempMax - 1)}>
      decrease max
    </button>
    <RangeSliderClient
      min={0}
      max={tempMax}
      onChange={onPriceRangeChange} />
  </section>
}
