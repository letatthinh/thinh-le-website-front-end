'use client'
import stringUtility from '@/utilities/string'
import {
  DownloadCircle01Icon,
  Facebook01Icon,
  Github01Icon,
  LeetcodeIcon,
  Linkedin01Icon,
  SourceCodeCircleIcon
} from '@hugeicons/react'
import Link from 'next/link'
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

  return <div className={'bg-hero bg-cover bg-no-repeat bg-center'}>
    <div className={stringUtility.merge([
      'container-layout py-12 px-5'
    ])}>
      <div className={stringUtility.merge([
        backgroundTheme.opacity.ninety.primaryColor,
        'max-w-screen-sm p-10 rounded-xl'
      ])}>
        <p className={stringUtility.merge([
          'inline-block relative px-2.5 py-1.5 rounded-r-xl rounded-tl-xl',
          'text-lg md:text-xl',
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
            'text-5xl md:text-7xl font-bold transition-font-size mt-3'
          ])}>I&apos;m Thinh Le</h1>
          <p className={stringUtility.merge([
            'text-lg md:text-xl transition-font-size mt-6'
          ])}>
            As a student at Stockton University in New Jersey
            who is passionate about coding and creating mini tools,
            I’m seeking CPT/OPT opportunities to apply my skills
            in real-world projects.
          </p>
        </hgroup>
        <div className={'mt-6 md:text-lg flex gap-5'}>
          <Link
            className={stringUtility.merge([
              backgroundTheme.hover.accentColor,
              backgroundTheme.secondaryColor,
              textTheme.primaryColor,
              'button-link-icon-text'
            ])}
            href={''}>
            <SourceCodeCircleIcon
              size={21}
              variant={'solid'}
              type={'rounded'} />
            Projects
          </Link>
          <Link
            className={stringUtility.merge([
              borderTheme.secondaryColor,
              borderTheme.hover.accentColor,
              textTheme.secondaryColor,
              textTheme.hover.accentColor,
              'button-link-icon-text'
            ])}
            href={'https://drive.google.com/uc?export=download&id=1F4EE1wTMwQxbjD4unf0SxIt0eXhjnUrk'}>
            <DownloadCircle01Icon
              size={21}
              variant={'solid'}
              type={'rounded'} />
            Resume
          </Link>
        </div>
        <div className={'mt-6 flex gap-2 justify-end'}>
          <Link
            href={'https://www.facebook.com/thinhle27'}
            target='_blank'>
            <Facebook01Icon
              variant={'solid'}
              type={'rounded'} />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/letatthinh'}
            target='_blank'>
            <Linkedin01Icon
              variant={'solid'}
              type={'rounded'} />
          </Link>
          <Link
            href={'https://github.com/letatthinh'}
            target='_blank'>
            <Github01Icon
              variant={'solid'}
              type={'rounded'} />
          </Link>
          <Link
            href={'https://leetcode.com/u/letatthinh'}
            target='_blank'>
            <LeetcodeIcon
              variant={'solid'}
              type={'rounded'} />
          </Link>
        </div>
      </div>
    </div>
  </div>
}
