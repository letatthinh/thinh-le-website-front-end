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
        'block aspect-3/2 bg-contain rounded-2xl',
        backgroundImageClass
      ])}>
    </Link>
    <div className='flex flex-col'>
      <time
        dateTime={date}
        className={stringUtility.merge([
          'text-sm lg:text-base transition-font-size',
          textTheme.secondaryColor600
        ])}>
        {dateTimeUtility.formatLongDate(date)}
      </time>
      <h3 className={'mt-2 font-bold text-xl lg:text-2xl transition-font-size'}>
        {title}
      </h3>
      <p className={`mt-6 line-clamp-3 ${textTheme.secondaryColor600}`}>
        {description}
      </p>
    </div>
    <div className={stringUtility.merge([
      'mt-auto flex gap-2 items-center',
      'text-sm lg:text-base transition-font-size',
      textTheme.secondaryColor600
    ])}>
      {tags.map((_tag, _index) => {
        return (
          <button
            key={_index}
            aria-label={_tag}
            className={stringUtility.merge([
              'font-medium rounded-full px-4 py-1',
              backgroundTheme.secondaryColor100
            ])}>{_tag}
          </button>
        )
      })}
    </div>
  </article>
}
