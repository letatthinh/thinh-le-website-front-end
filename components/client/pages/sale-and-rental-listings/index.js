'use client'
import BlogClient from '@/components/client/blog'
import PanelBar
  from '@/components/client/pages/sale-and-rental-listings/panel-bar'
import ExpandableBox from '@/components/client/test'
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

  const onSearchIconButtonClick = (_event) => {
    _event.preventDefault()
  }

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
        <PanelBar />
      </SaleAndRentalListingsContext.Provider>
      <div className='flex justify-center items-center min-h-screen bg-gray-50'>
        <ExpandableBox />
      </div>
    </div>
  </BlogClient>
}
