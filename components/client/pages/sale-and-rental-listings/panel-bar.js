import IconButtonClient from '@/components/client/buttons/icon'
import SearchPanel
  from '@/components/client/pages/sale-and-rental-listings/search-panel'
import stringUtility from '@/utilities/string'
import {PreferenceHorizontalIcon, Search01Icon} from '@hugeicons/react'
import {useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

const panelName = {
  search: 1,
  filter: 2
}

export default function PanelBar() {
  const {
    backgroundTheme,
    borderTheme
  } = useSelector(selectTheme)
  const [activePanelName, setActivePanelName] = useState(undefined)
  const searchPanelRef = useRef(null)
  const filterPanelRef = useRef(null)

  const getPanelRefByName = (_panelName) => {
    switch (_panelName) {
    case panelName.search:
      return searchPanelRef.current
    default: // 'filter'
      return filterPanelRef.current
    }
  }

  const togglePanelHiddenClassName = (_panelName) => {
    getPanelRefByName(_panelName).classList.toggle('hidden')
  }

  const hideOtherPanel = (_newActivePanelName) => {
    // Only execute when the new active panel is not the same as
    // the current active panel
    if (activePanelName && activePanelName !== _newActivePanelName) {
      togglePanelHiddenClassName(activePanelName)
    }
  }

  const togglePanel = (_panelName) => {
    hideOtherPanel(_panelName)
    togglePanelHiddenClassName(_panelName)

    if (getPanelRefByName(_panelName).classList.contains('hidden')) {
      setActivePanelName(undefined)
    } else {
      setActivePanelName(_panelName)
    }
  }

  const onSearchIconButtonClick = (_event) => {
    _event.preventDefault()
    togglePanel(panelName.search)
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
      'border p-4 rounded-t-big-1 text-normal',
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
    <SearchPanel ref={searchPanelRef} className={'hidden'} />
    <div ref={filterPanelRef} className={'hidden'}>a</div>

  </section>
}
