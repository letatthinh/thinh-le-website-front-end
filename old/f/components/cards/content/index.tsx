'use client'
import useReduxTheme from '@/hooks/theme/use-global-theme'
import classNameUtility from '@/utilities/class-name'
import stringUtility from '@/utilities/string'
import Image from 'next/image'
import Link from 'next/link'
import ContentCardPropertyType from '../../../types/properties/cards/content'

export default function ContentCard({
  link,
  imageSource,
  imageAlternativeText,
  title,
  description
}: ContentCardPropertyType) {
  const { reduxTheme } = useReduxTheme()

  return (
    <article
      className={classNameUtility.mergeClassNames([
        reduxTheme.borderColor,
        'border-2 w-56'
      ])}>
      <Link href={link}>
        <section className='relative h-36'>
          <Image
            src={imageSource}
            alt={imageAlternativeText}
            fill={true}
            sizes='14rem'
            priority={true}
          />
        </section>
      </Link>
      <section
        className={classNameUtility.mergeClassNames([
          reduxTheme.borderColor,
          'h-6-625 p-3 overflow-hidden border-t-2'
        ])}>
        <p className='text-lg font-bold mb-1.5'>
          <Link href={link}>{title}</Link>
        </p>

        <p className='h-12 overflow-hidden'>
          {stringUtility.sliceOverflowStringAndReplaceWithDots(description, 40)}
        </p>
      </section>
    </article>
  )
}
