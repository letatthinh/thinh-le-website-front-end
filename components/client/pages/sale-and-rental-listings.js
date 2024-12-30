'use client'
import locationApi from '@/apis/location'
import BlogClient from '@/components/client/blog'
import ComboBoxClient from '@/components/client/combo-box'
import projectConstant from '@/constants/project'
import {useEffect, useState} from 'react'
//import {useSelector} from 'react-redux'
//import {createSelector, createStructuredSelector} from 'reselect'

/*const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    outlineTheme: (_state) => _state.outlineTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)*/

export default function SaleAndRentalListingsProjectPageClient() {
  /*const {
    backgroundTheme,
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)*/
  const [selectedStateName, setSelectedStateName] = useState('New Jersey')
  const [stateNames, setStateNames] = useState([])
  const [cityNames, setCityNames] = useState([])

  useEffect(() => {
    locationApi
      .getStateNames()
      .then(data => setStateNames(data))
  }, [])

  useEffect(() => {
    if (selectedStateName) {
      locationApi
        .getCitiesByStateName(selectedStateName)
        .then(data => setCityNames(data))
    }
  }, [selectedStateName])

  const onStateChange = (_state) => {
    setSelectedStateName(_state)
  }

  return <BlogClient
    dateCreated={projectConstant.saleAndRentalListings.dateCreated}
    title={projectConstant.saleAndRentalListings.title}
    contentClassName={'relative'}>
    <section className={'h-full min-w-80 max-w-screen-sm flex'}>
      <ComboBoxClient
        label={'State'}
        id={'state'}
        name={'state'}
        placeholder={'Select state'}
        defaultOption={selectedStateName}
        options={stateNames}
        onOptionChange={onStateChange} />
      <ComboBoxClient
        label={'City'}
        id={'city'}
        name={'city'}
        placeholder={'Select city'}
        options={cityNames} />
    </section>
  </BlogClient>
}
