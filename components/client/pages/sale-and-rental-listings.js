'use client'
import BlogClient from '@/components/client/blog'
import PrimaryButtonClient from '@/components/client/buttons/primary'
import ComboBoxClient from '@/components/client/combo-box'
import projectConstant from '@/constants/project'
import stringUtility from '@/utilities/string'
import {Search01Icon} from '@hugeicons/react'
import {useMemo, useState} from 'react'
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

export default function SaleAndRentalListingsProjectPageClient({
  states,
  cities
}) {
  /*const {
    backgroundTheme,
    outlineTheme,
    textTheme
  } = useSelector(selectTheme)*/
  const [stateNameOption, setStateNameOption]
    = useState('New Jersey')
  const [isFormValidationEnabled, setIsFormValidationEnabled]
    = useState(false)

  const stateNames = useMemo(() => {
    return states.map(_state => _state.name)
  }, [states])

  const cityNames = useMemo(() => {
    if (stateNameOption) {
      let isStateFound = false
      const results = []

      for (let index = 0; index < cities.length; index++) {
        if (cities[index].state === stateNameOption) {
          if (!isStateFound) {
            isStateFound = true
          }

          results.push(cities[index].name)
        } else {
          if (isStateFound) {
            return results
          }
        }
      }
    } else {
      return []
    }
  }, [cities, stateNameOption])

  const onStateNameChange = (_state) => {
    setStateNameOption(_state)
  }

  const onSearchFormSubmit = (_event) => {
    _event.preventDefault()

    if (!isFormValidationEnabled) {
      setIsFormValidationEnabled(true)
    }

    // Check the validity of the entire form
    if (!_event.target.checkValidity()) {
      return
    }

    const formData = new FormData(_event.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  return <BlogClient
    dateCreated={projectConstant.saleAndRentalListings.dateCreated}
    title={projectConstant.saleAndRentalListings.title}
    contentClassName={'relative text-normal'}>
    <section className={stringUtility.merge([
      'h-full min-w-80 max-w-md content-p border-2'
    ])}>
      {/* [Form tip]: noValidate is to disable built-in form validation */}
      <form onSubmit={onSearchFormSubmit} noValidate>
        <ComboBoxClient
          label={'State (*)'}
          id={'state'}
          name={'state'}
          isRequired={true}
          enableValidation={isFormValidationEnabled}
          defaultOption={stateNameOption}
          options={stateNames}
          onOptionChange={onStateNameChange} />
        <ComboBoxClient
          label={'City (*)'}
          id={'city'}
          name={'city'}
          isRequired={true}
          enableValidation={isFormValidationEnabled}
          options={cityNames}
          isVirtualScrolling={true}
          comboBoxClassName={'content-mt'} />
        <div className={'content-mt flex content-gap'}>
          <ComboBoxClient
            label={'Property type'}
            id={'propertyType'}
            name={'propertyType'}
            options={stateNames} />
          <ComboBoxClient
            label={'For'}
            id={'for'}
            name={'for'}
            options={[]} />
        </div>
        <PrimaryButtonClient
          ariaLabel={'Search'}
          type={'submit'}
          className={'button-link-icon-text min-w-fit content-mt'}>
          <div className={'wh-normal'}>
            <Search01Icon
              size={'100%'}
              variant={'solid'}
              type={'rounded'} />
          </div>
          Search
        </PrimaryButtonClient>
      </form>
    </section>
  </BlogClient>
}
