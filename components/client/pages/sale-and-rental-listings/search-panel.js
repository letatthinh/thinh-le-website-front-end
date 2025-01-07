import PrimaryButtonClient from '@/components/client/buttons/primary'
import ComboBoxClient from '@/components/client/combo-box'
import SaleAndRentalListingsContext from '@/contexts/sale-and-rental-listings'
import stringUtility from '@/utilities/string'
import {Search01Icon} from '@hugeicons/react'
import {useContext, useMemo, useState} from 'react'

export default function SearchPanel({
  ref, className
}) {
  const {states, cities} = useContext(SaleAndRentalListingsContext)
  const [selectedStateNameOption, setSelectedStateNameOption]
    = useState('New Jersey')
  const [isFormValidationEnabled, setIsFormValidationEnabled]
    = useState(false)

  const stateNames = useMemo(() => {
    return states.map(_state => _state.name)
  }, [states])

  const cityNames = useMemo(() => {
    if (selectedStateNameOption) {
      let isStateFound = false
      const results = []

      for (let index = 0; index < cities.length; index++) {
        if (cities[index].state === selectedStateNameOption) {
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
  }, [cities, selectedStateNameOption])

  const onStateNameChange = (_state) => {
    setSelectedStateNameOption(_state)
  }

  const onSearchFormSubmit = (_event) => {
    _event.preventDefault()

    // Check the validity of the entire form
    if (!_event.target.checkValidity()) {
      setIsFormValidationEnabled(true)
      return
    }

    setIsFormValidationEnabled(false)

    const formData = new FormData(_event.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
  }

  return <section
    ref={ref}
    className={stringUtility.merge([
      'content-p text-normal border border-t-0',
      className
    ])}>
    {/* [Form tip]: noValidate is to disable built-in form validation */}
    <form onSubmit={onSearchFormSubmit} noValidate>
      <div className={'flex flex-col xs:flex-row content-gap'}>
        <ComboBoxClient
          label={'State (*)'}
          id={'state'}
          name={'state'}
          isRequired={true}
          enableValidation={isFormValidationEnabled}
          options={stateNames}
          defaultOption={selectedStateNameOption}
          comboboxOptionsClassName={'z-40'}
          onOptionChange={onStateNameChange} />
        <ComboBoxClient
          label={'City (*)'}
          id={'city'}
          name={'city'}
          isRequired={true}
          enableValidation={isFormValidationEnabled}
          options={cityNames}
          defaultOption={'Atlantic City'}
          isVirtualScrolling={true}
          comboboxOptionsClassName={'z-40'} />
      </div>
      <div className={'content-mt flex flex-col xs:flex-row content-gap'}>
        <ComboBoxClient
          label={'Property type'}
          id={'propertyType'}
          name={'propertyType'}
          options={['Single family']}
          comboboxOptionsClassName={'z-40'} />
        <ComboBoxClient
          label={'For'}
          id={'for'}
          name={'for'}
          options={['Sale', 'Rent']}
          defaultOption={'Sale'}
          comboboxOptionsClassName={'z-40'} />
      </div>
      <PrimaryButtonClient
        ariaLabel={'Search'}
        type={'submit'}
        className={'button-link-icon-text min-w-fit content-mt mx-auto'}>
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
}
