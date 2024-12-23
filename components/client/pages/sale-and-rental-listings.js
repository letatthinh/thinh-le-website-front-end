'use client'
import BlogClient from '@/components/client/blog'
import projectConstant from '@/constants/project'
import stringUtility from '@/utilities/string'
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
    dateCreated={projectConstant.saleAndRentalListings.dateCreated}
    title={projectConstant.saleAndRentalListings.title}
    contentClassName={'relative'}>
    <section className={'h-full min-w-80 max-w-screen-sm'}>
      <div className={`text-normal ${textTheme.secondaryColor}`}>
        <label htmlFor='state-search' className={'font-medium'}>
          Price
        </label>
        <div className={stringUtility.merge([
          'flex items-center rounded-lg py-1 px-2 form-control-outline'
        ])}>
          <div
            className='shrink-0 text-base text-gray-500 select-none sm:text-sm/6'>$
          </div>
          <input
            id='state-search'
            type='text'
            name='stateSearch'
            className={stringUtility.merge([
              'block focus:outline-none'
            ])}
            placeholder='Please input here' />
        </div>
      </div>
    </section>
  </BlogClient>
}
