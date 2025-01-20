import IconButtonClient from '@/components/client/buttons/icon'
import FilterPanelClient
  from '@/components/client/pages/sale-and-rental-listings/panels/filter'
import SearchPanelClient
  from '@/components/client/pages/sale-and-rental-listings/panels/search'
import panelName from '@/constants/pages/sale-and-rental-listings/panel-name'
import SaleAndRentalListingsContext from '@/contexts/sale-and-rental-listings'
import stringUtility from '@/utilities/string'
import {PreferenceHorizontalIcon, Search01Icon} from '@hugeicons/react'
import {useContext} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

export default function PanelBarClient() {
  const {
    backgroundTheme,
    borderTheme
  } = useSelector(selectTheme)

  const {
    togglePanel,
    setIsSearchFormValidationEnabled
  } = useContext(SaleAndRentalListingsContext)

  const onSearchIconButtonClick = (_event) => {
    _event.preventDefault()
    setIsSearchFormValidationEnabled(false)
    togglePanel(panelName.search)
  }

  const onFilterIconButtonClick = (_event) => {
    _event.preventDefault()
    setIsSearchFormValidationEnabled(false)
    togglePanel(panelName.filter)
  }

  return <section className={stringUtility.merge([
    'sticky top-19 lg:top-20 z-40',
    backgroundTheme.primaryColor
  ])}>
    <div className={stringUtility.merge([
      'border p-4 rounded-t-big-1',
      'flex justify-end gap-4 items-center',
      borderTheme.secondaryColor300
    ])}>
      <IconButtonClient
        ariaLabel={'Search icon button'}
        onClick={onSearchIconButtonClick}
        className={'wh-normal'}>
        <Search01Icon
          size={'100%'}
          variant={'solid'}
          type={'rounded'} />
      </IconButtonClient>
      <IconButtonClient
        ariaLabel={'Filter icon button'}
        onClick={onFilterIconButtonClick}
        className={'wh-normal'}>
        <PreferenceHorizontalIcon
          size={'100%'}
          variant={'solid'}
          type={'rounded'} />
      </IconButtonClient>
    </div>
    <SearchPanelClient
      className={stringUtility.merge([
        'hidden absolute inset-x-0'
      ])} />
    <FilterPanelClient
      className={'hidden absolute inset-x-0'} />
  </section>
}
