'use client'
import PrimaryLinkButtonClient from '@/components/client/buttons/links/primary'
import SecondaryLinkButtonClient
  from '@/components/client/buttons/links/secondary'
import stringUtility from '@/utilities/string'
import {DownloadCircle01Icon, SourceCodeCircleIcon} from '@hugeicons/react'
import Image from 'next/image'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    textTheme: (_state) => _state.textTheme,
    borderTheme: (_state) => _state.borderTheme
  },
  createSelector
)

export default function HomePageHeroSectionClient() {
  const {
    backgroundTheme,
    textTheme,
    borderTheme
  } = useSelector(selectTheme)

  return <section className={'relative'}>
    <Image
      className={'-z-10'}
      alt={'Home page\'s hero section background'}
      src={'/background/hero-background.avif'}
      fill
      // [Tip]: You should add the 'priority' property to the image
      // that will be the Largest Contentful Paint (LCP) element
      // for each page.
      // https://nextjs.org/docs/pages/building-your-application/optimizing/images#priority
      priority
      style={{
        objectFit: 'cover'
      }} />
    <div className={stringUtility.merge([
      'container-layout feature-py section-px'
    ])}>
      <article className={stringUtility.merge([
        backgroundTheme.opacity.ninety.primaryColor,
        'rounded-big-1',
        'max-w-2xl lg:max-w-screen-md p-12 transition-max-width'
      ])}>
        <p className={stringUtility.merge([
          'inline-block py-1 px-2 relative',
          'rounded-r-small-1 rounded-tl-small-1 text-small-1',
          `${backgroundTheme.secondaryColor} ${textTheme.primaryColor}`,
          'before:absolute before:top-full before:left-0',
          'before:border-t-8 before:border-r-8',
          'before:border-b-0 before:border-l-0',
          borderTheme.before.top.secondaryColor,
          'before:border-r-transparent',
          'before:border-b-transparent before:border-l-transparent'
        ])}>Hi there!</p>
        <h1 className={`text-h1 content-mt ${textTheme.secondaryColor}`}>
          Welcome to my page
        </h1>
        <p className={stringUtility.merge([
          'text-normal content-mt',
          `${textTheme.secondaryColor600}`
        ])}>
          Feel free to take a look around 🤪.
        </p>
        <div className={stringUtility.merge([
          'content-mt text-normal',
          'flex flex-col xs:flex-row gap-2',
          // [Tip]: Targeting a breakpoint range
          'xs:max-sm:justify-center'
        ])}>
          <PrimaryLinkButtonClient
            className={'button-link-icon-text min-w-fit justify-center'}
            href={''}>
            <SourceCodeCircleIcon
              size={21}
              variant={'solid'}
              type={'rounded'} />
            Projects
          </PrimaryLinkButtonClient>
          <SecondaryLinkButtonClient
            className={'button-link-icon-text min-w-fit justify-center'}
            href={'https://drive.google.com/file/d/10ymRXc22nbeJdHh2uB8Y43_y8m4vZ59d/view?usp=sharing'}>
            <DownloadCircle01Icon
              size={21}
              variant={'solid'}
              type={'rounded'} />
            Resume
          </SecondaryLinkButtonClient>
        </div>
      </article>
    </div>
  </section>
}
