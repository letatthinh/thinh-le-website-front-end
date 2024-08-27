'use client'
import ButtonLink from '@/components/link/button'
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

  return <div className={'bg-hero bg-auto bg-no-repeat bg-center'}>
    <div className={stringUtility.merge([
      'container-layout py-12 px-5'
    ])}>
      <div className={stringUtility.merge([
        backgroundTheme.opacity.ninety.primaryColor,
        'md:max-w-1/2 p-10 rounded-xl'
      ])}>
        <p className={stringUtility.merge([
          'inline-block relative px-2.5 py-1.5 rounded-r-xl rounded-tl-xl',
          `${backgroundTheme.secondaryColor} ${textTheme.primaryColor}`,
          'before:absolute before:-bottom-2 before:left-0',
          'before:border-t-8 before:border-r-8',
          'before:border-b-0 before:border-l-0',
          borderTheme.before.top.secondaryColor,
          'before:border-r-transparent',
          'before:border-b-transparent before:border-l-transparent'
        ])}>Hi there!</p>
        <hgroup className={textTheme.secondaryColor}>
          <h1 className={stringUtility.merge([
            'text-5xl sm:text-7xl font-bold transition-font-size mt-3'
          ])}>I&apos;m Thinh Le</h1>
          <p className={stringUtility.merge([
            'text-lg sm:text-xl transition-font-size mt-6'
          ])}>
            As a student at Stockton University in New Jersey
            who is passionate about coding and creating mini tools,
            I’m seeking CPT/OPT opportunities to apply my skills
            in real-world projects.
          </p>
        </hgroup>
        <div className={'mt-6 sm:text-lg flex gap-5'}>
          <ButtonLink
            className={stringUtility.merge([
              backgroundTheme.hover.accentColor,
              backgroundTheme.secondaryColor,
              textTheme.primaryColor,
              'flex gap-2 items-center'
            ])}>
            <SourceCodeCircleIcon
              size={21}
              variant={'solid'}
              type={'rounded'} />
            Projects
          </ButtonLink>
          <ButtonLink
            className={stringUtility.merge([
              borderTheme.secondaryColor,
              textTheme.secondaryColor,
              'flex gap-2 items-center border-2'
            ])}
            href={'https://drive.google.com/uc?export=download&id=1F4EE1wTMwQxbjD4unf0SxIt0eXhjnUrk'}>
            <DownloadCircle01Icon
              size={21}
              variant={'solid'}
              type={'rounded'} />
            Resume
          </ButtonLink>
        </div>
      </div>
    </div>
  </div>
}
