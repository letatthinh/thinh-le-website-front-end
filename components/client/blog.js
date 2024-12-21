'use client'
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
  children,
  contentClassName
}) {
  const {
    textTheme
  } = useSelector(selectTheme)

  return <section>
    <div className={stringUtility.merge([
      'container-layout section-pt section-px'
    ])}>
      <time>{dateCreated}</time>
      <h1 className={`text-h2 mt-2 ${textTheme.secondaryColor}`}>
        {title}
      </h1>
      <div className={stringUtility.merge([
        'mt-12',
        contentClassName
      ])}>
        {children}
      </div>
    </div>
  </section>
}
