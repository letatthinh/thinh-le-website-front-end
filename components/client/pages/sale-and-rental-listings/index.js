'use client'
import BlogClient from '@/components/client/blog'
import PanelBarClient
  from '@/components/client/pages/sale-and-rental-listings/panel-bar'
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
    borderTheme: (_state) => _state.borderTheme
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
  initialListings
}) {
  const {
    backgroundTheme,
    borderTheme
  } = useSelector(selectTheme)

  const [listings, setListings] = useState(initialListings)

  const searchPanelRef = useRef(null)
  const filterPanelRef = useRef(null)

  const hidePanel = (_panel) => {
    if (!_panel.classList.contains('hidden')) {
      _panel.classList.toggle('hidden')
    }
  }

  const onContentContainerClick = (_event) => {
    hidePanel(searchPanelRef.current)
    hidePanel(filterPanelRef.current)
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
      Nợ 1: Add panel backdrop
      <SaleAndRentalListingsContext.Provider
        value={{states, cities, listings, setListings}}>
        <PanelBarClient
          searchPanelRef={searchPanelRef}
          filterPanelRef={filterPanelRef} />
        <section
          className={stringUtility.merge([
            'p-4 border border-t-0 flex',
            backgroundTheme.primaryColor
          ])}
          onClick={onContentContainerClick}>
          <div className={'basis-1/2'}>test</div>
          <MapClient className={'basis-1/2'} />
        </section>
      </SaleAndRentalListingsContext.Provider>
    </section>
  </BlogClient>
}
