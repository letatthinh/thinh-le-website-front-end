'use client'
import BlogClient from '@/components/client/blog'
import projectConstant from '@/constants/project'
import dateTimeUtility from '@/utilities/datetime'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function SaleAndRentalListingsProjectPageClient({
  children, className
}) {
  const {
    backgroundTheme,
    textTheme
  } = useSelector(selectTheme)

  return <BlogClient
    dateCreated={dateTimeUtility.formatLongDate(
      projectConstant.saleAndRentalListings.dateCreated
    )}
    title={projectConstant.saleAndRentalListings.title}
    contentClassName={'relative'}>
    a
  </BlogClient>
}
