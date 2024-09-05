'use client'
import PrimaryLinkButtonClient from '@/components/client/buttons/links/primary'
import SecondaryLinkButtonClient
  from '@/components/client/buttons/links/secondary'
import stringUtility from '@/utilities/string'
import {DownloadCircle01Icon, SourceCodeCircleIcon} from '@hugeicons/react'
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

  return <section className={'bg-home-page-hero bg-cover bg-no-repeat bg-center'}>
    <div className={stringUtility.merge([
      'container-layout section-py lg:px-0'
    ])}>
      <article className={stringUtility.merge([
        backgroundTheme.opacity.ninety.primaryColor,
        'rounded-xl',
        'max-w-xl lg:max-w-screen-sm p-10 transition-max-width'
      ])}>
        <p className={stringUtility.merge([
          'inline-block p-2 rounded-r-xl rounded-tl-xl relative',
          'lg:text-lg transition-font-size',
          `${backgroundTheme.secondaryColor} ${textTheme.primaryColor}`,
          'before:absolute before:top-full before:left-0',
          'before:border-t-8 before:border-r-8',
          'before:border-b-0 before:border-l-0',
          borderTheme.before.top.secondaryColor,
          'before:border-r-transparent',
          'before:border-b-transparent before:border-l-transparent'
        ])}>Hi there!</p>
        <h1 className={stringUtility.merge([
          'text-5xl lg:text-6xl transition-font-size content-mt',
          `${textTheme.secondaryColor} font-bold`
        ])}>I&apos;m Thinh Le</h1>
        <p className={stringUtility.merge([
          'lg:text-lg transition-font-size content-mt',
          `${textTheme.secondaryColor}`
        ])}>
          Student at Stockton University in New Jersey.
          I’m seeking CPT/OPT opportunities to apply my skills
          in real-world projects.
        </p>
        <div className={stringUtility.merge([
          'content-mt lg:text-lg transition-font-size',
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
            href={'https://drive.google.com/uc?export=download&id=1F4EE1wTMwQxbjD4unf0SxIt0eXhjnUrk'}>
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
