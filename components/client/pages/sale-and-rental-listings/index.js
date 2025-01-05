'use client'
import BlogClient from '@/components/client/blog'
import IconButtonClient from '@/components/client/buttons/icon'
import ExpandableBox from '@/components/client/test'
import projectConstant from '@/constants/project'
import stringUtility from '@/utilities/string'
import {Search01Icon} from '@hugeicons/react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import SidePanel from './side-panel'

const selectTheme = createStructuredSelector(
  {
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

export default function SaleAndRentalListingsProjectPageClient({
  states,
  cities
}) {
  const {
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
      borderTheme.secondaryColor400
    ])}>
    <section className={stringUtility.merge([
      'p-4 sticky top-20 border rounded-big-1 bg-white',
      borderTheme.secondaryColor400
    ])}>
      <IconButtonClient
        ariaLabel={'Hamburger button'}
        onClick={onSearchIconButtonClick}
        className={'wh-normal'}>
        <Search01Icon
          size={'100%'}
          variant={'solid'}
          type={'rounded'} />
      </IconButtonClient>
    </section>
    <SidePanel states={states} cities={cities} />
    <button></button>
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <ExpandableBox />
    </div>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
    <p>a</p>
  </BlogClient>
}
