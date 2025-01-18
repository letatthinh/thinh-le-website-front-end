import RangeSliderClient from '@/components/client/range-slider'
import stringUtility from '@/utilities/string'
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

  const onPriceRangeChange = (handleValues) => {
  }

  const setDisplayValue = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // No decimals
      maximumFractionDigits: 0 // No decimals
    })

    return formatter.format(value)
  }

  const setReturnValue = (value) => {
    return Number(value.replace(/[$,]/g, ''))
  }

  return <section
    ref={ref}
    className={stringUtility.merge([
      'p-4 border border-t-0',
      backgroundTheme.primaryColor,
      className
    ])}>
    <div className={'flex flex-col 2xl:flex-row content-gap'}>
      <RangeSliderClient
        label={'Price range'}
        min={0}
        max={5000000}
        step={10}
        toValue={setDisplayValue}
        fromValue={setReturnValue}
        onChange={onPriceRangeChange}
        containerClassName={'basis-1/2'}
        tooltipClassName={'text-small-1'} />
      <p className={'basis-1/2'}>a</p>
    </div>
  </section>
}
