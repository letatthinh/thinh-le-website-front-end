'use client'
import BlogClient from '@/components/client/blog'
import MapClient from '@/components/client/map'
import PanelBarClient
  from '@/components/client/pages/sale-and-rental-listings/panels'
import projectConstant from '@/constants/project'
import SaleAndRentalListingsContext from '@/contexts/sale-and-rental-listings'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

export default function SaleAndRentalListingsProjectPageClient({
  states,
  cities
}) {
  const {
    backgroundTheme,
    borderTheme
  } = useSelector(selectTheme)

  return <BlogClient
    dateCreated={projectConstant.saleAndRentalListings.dateCreated}
    title={projectConstant.saleAndRentalListings.title}
    contentClassName={stringUtility.merge([
      'relative',
      borderTheme.secondaryColor300
    ])}>
    <div className={stringUtility.merge([
      'mt-12 relative'
    ])}>
      <SaleAndRentalListingsContext.Provider
        value={{states, cities}}>
        <PanelBarClient />
        <section
          className={stringUtility.merge([
            'content-p border border-t-0 text-normal',
            backgroundTheme.primaryColor
          ])}>
          <MapClient />
        </section>
      </SaleAndRentalListingsContext.Provider>
    </div>
  </BlogClient>
}
