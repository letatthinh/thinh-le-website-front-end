import IconButtonClient from '@/components/client/buttons/icon'
import FilterPanelClient
  from '@/components/client/pages/sale-and-rental-listings/panels/filter'
import SearchPanelClient
  from '@/components/client/pages/sale-and-rental-listings/panels/search'
import panelName from '@/constants/pages/sale-and-rental-listings/panel-name'
import stringUtility from '@/utilities/string'
import {PreferenceHorizontalIcon, Search01Icon} from '@hugeicons/react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

export default function PanelBarClient({
  searchPanelRef,
  filterPanelRef
}) {
  const {
    backgroundTheme,
    borderTheme
  } = useSelector(selectTheme)
  const [activePanelName, setActivePanelName] = useState(undefined)
  const [
    shouldDisableFormValidation,
    setShouldDisableFormValidation
  ] = useState(undefined)

  const getPanelByName = (_panelName) => {
    switch (_panelName) {
    case panelName.search:
      return searchPanelRef.current
    default: // 'filter'
      return filterPanelRef.current
    }
  }

  const togglePanelHiddenClassName = (_panelName) => {
    const panel = getPanelByName(_panelName)
    panel.classList.toggle('hidden')

    if (panel.classList.contains('hidden')) {
      setActivePanelName(undefined)
    } else {
      setActivePanelName(_panelName)
    }
  }

  const hideTheOtherPanel = (_newActivePanelName) => {
    // Only execute when the new active panel is not the same as
    // the current active panel
    if (activePanelName && activePanelName !== _newActivePanelName) {
      togglePanelHiddenClassName(activePanelName)
    }
  }

  const togglePanel = (_panelName) => {
    hideTheOtherPanel(_panelName)
    togglePanelHiddenClassName(_panelName)
  }

  const onSearchIconButtonClick = (_event) => {
    _event.preventDefault()
    togglePanel(panelName.search)

    if (getPanelByName(panelName.search).classList.contains('hidden')) {
      setShouldDisableFormValidation(true)
    } else {
      setShouldDisableFormValidation(undefined)
    }
  }

  const onFilterIconButtonClick = (_event) => {
    _event.preventDefault()
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
      ref={searchPanelRef}
      shouldDisableFormValidation={shouldDisableFormValidation}
      className={stringUtility.merge([
        'hidden absolute inset-x-0'
      ])} />
    <FilterPanelClient ref={filterPanelRef}
      className={'hidden absolute inset-x-0'} />
  </section>
}
