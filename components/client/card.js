import dateTimeUtility from '@/utilities/datetime'
import stringUtility from '@/utilities/string'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function CardClient({
  link,
  backgroundImageClass,
  date,
  tags,
  title,
  description
}) {
  const {
    backgroundTheme,
    textTheme
  } = useSelector(selectTheme)

  return <article className={'flex flex-col content-gap'}>
    <Link
      aria-label={description}
      href={link}
      className={stringUtility.merge([
        'block aspect-3/2 bg-contain rounded-big-1',
        backgroundImageClass
      ])}>
    </Link>
    <div className='flex flex-col'>
      <time
        dateTime={date}
        className={stringUtility.merge([
          'text-small-1',
          textTheme.secondaryColor600
        ])}>
        {dateTimeUtility.formatLongDate(date)}
      </time>
      <Link aria-label={title} href={link}>
        <p className={'mt-2 font-bold text-big-2'}>{title}</p>
      </Link>
      <p className={stringUtility.merge([
        'content-mt line-clamp-3',
        textTheme.secondaryColor600
      ])}>
        {description}
      </p>
    </div>
    <div className={stringUtility.merge([
      'mt-auto flex gap-2 items-center text-small-1',
      textTheme.secondaryColor600
    ])}>
      {tags.map((_tag, _index) => {
        return (
          <button
            key={_index}
            aria-label={_tag}
            className={stringUtility.merge([
              'font-medium rounded-small-1 px-2 py-1',
              backgroundTheme.secondaryColor100
            ])}>{_tag}
          </button>
        )
      })}
    </div>
  </article>
}
