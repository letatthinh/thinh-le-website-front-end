'use client'
import dateTimeUtility from '@/utilities/datetime'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function BlogClient({
  dateCreated,
  title,
  children
}) {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <section>
    <div className={stringUtility.merge([
      'container-layout section-pt section-px'
    ])}>
      <time
        dateTime={dateCreated}
        className={textTheme.secondaryColor600}>
        {dateTimeUtility.formatLongDate(dateCreated)}
      </time>
      <h1 className={'text-big-4 font-bold mt-2'}>
        {title}
      </h1>
      {children}
    </div>
  </section>
}
