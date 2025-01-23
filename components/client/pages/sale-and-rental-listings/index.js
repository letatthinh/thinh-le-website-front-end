'use client'
import BlogClient from '@/components/client/blog'
import PanelBarClient
  from '@/components/client/pages/sale-and-rental-listings/panel-bar'
import panelName from '@/constants/pages/sale-and-rental-listings/panel-name'
import valueBox from '@/constants/pages/sale-and-rental-listings/value-box'
import projectConstant from '@/constants/project'
import SaleAndRentalListingsContext from '@/contexts/sale-and-rental-listings'
import stringUtility from '@/utilities/string'
import dynamic from 'next/dynamic'
import {useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

const MapClient = dynamic(
  () => import('@/components/client/pages/sale-and-rental-listings/map'),
  {ssr: false}
)

export default function SaleAndRentalListingsProjectPageClient({
  states,
  cities,
  initialSaleListings
}) {
  const {
    backgroundTheme,
    borderTheme,
    textTheme
  } = useSelector(selectTheme)

  const searchPanelRef = useRef(null)
  const filterPanelRef = useRef(null)

  const [listings, setListings] = useState(initialSaleListings)
  const [activePanelName, setActivePanelName] = useState(undefined)
  const [isSearchFormValidationEnabled, setIsSearchFormValidationEnabled]
    = useState(false)

  const getPanelByName = (_panelName) => {
    switch (_panelName) {
    case panelName.search:
      return searchPanelRef.current
    default: // 'filter'
      return filterPanelRef.current
    }
  }

  const showPanelByName = (_panelName) => {
    const panelElement = getPanelByName(_panelName)

    if (panelElement.classList.contains('hidden')) {
      panelElement.classList.toggle('hidden')
      setActivePanelName(_panelName)
    }
  }

  const hidePanelByName = (_panelName) => {
    const panelElement = getPanelByName(_panelName)

    if (!panelElement.classList.contains('hidden')) {
      panelElement.classList.toggle('hidden')
      setActivePanelName(undefined)
    }
  }

  const togglePanel = (_panelName) => {
    if (activePanelName) {
      if (activePanelName === _panelName) {
        hidePanelByName(activePanelName)
      } else {
        hidePanelByName(activePanelName)
        showPanelByName(_panelName)
      }
    } else {
      showPanelByName(_panelName)
    }
  }

  const onContentContainerClick = (_event) => {
    Object.values(panelName).forEach((_panelName) => {
      hidePanelByName(_panelName)
    })
    setIsSearchFormValidationEnabled(false)
  }

  const renderValueBoxBackgroundColorById = (_id) => {
    switch (_id) {
    case valueBox.bestDeal.id:
      return backgroundTheme.valid600
    case valueBox.medianPrice.id:
      return backgroundTheme.warning400
    default: // 'mostExpensive'
      return backgroundTheme.invalid600
    }
  }

  return <BlogClient
    dateCreated={projectConstant.saleAndRentalListings.dateCreated}
    title={projectConstant.saleAndRentalListings.title}
    contentClassName={stringUtility.merge([
      'relative',
      borderTheme.secondaryColor300
    ])}>
    <section
      className={stringUtility.merge([
        'mt-12 relative'
      ])}>
      <SaleAndRentalListingsContext.Provider
        value={{
          states, cities,
          listings, setListings,
          searchPanelRef, filterPanelRef,
          isSearchFormValidationEnabled, setIsSearchFormValidationEnabled,
          togglePanel
        }}>
        <PanelBarClient />
        <section
          className={stringUtility.merge([
            'p-4 border border-t-0 flex flex-col gap-4',
            backgroundTheme.primaryColor
          ])}
          onClick={onContentContainerClick}>
          {/* Value boxes */}
          <div className={'flex flex-col md:flex-row gap-4'}>
            {valueBox.allValueBoxes.map(
              (_valueBox, _index) => {
                return <section
                  key={_index}
                  className={stringUtility.merge([
                    'basis-1/3 p-4 border rounded-big-1',
                    'flex content-gap items-center',
                    borderTheme.secondaryColor300
                  ])}>
                  <div
                    className={stringUtility.merge([
                      renderValueBoxBackgroundColorById(_valueBox.id),
                      'p-2 w-fit rounded-normal h-fit',
                      textTheme.primaryColor
                    ])}>
                    {_valueBox.icon}
                  </div>
                  <div className={stringUtility.merge([
                    'flex flex-col'
                  ])}>
                    <p className={stringUtility.merge([
                      textTheme.secondaryColor600
                    ])}>{_valueBox.title}</p>
                    <p className={'mt-1 text-big-2 font-bold'}>$ 4,000,000</p>
                  </div>
                </section>
              })}
          </div>
          <div className={'flex flex-col lg:flex-row content-gap'}>
            <div className={'basis-1/2'}>test</div>
            <MapClient className={'basis-1/2'} />
          </div>
        </section>
      </SaleAndRentalListingsContext.Provider>
    </section>
  </BlogClient>
}
