'use client'
import stringUtility from '@/utilities/string'
import Image from 'next/image'
import {useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'
import Typed from 'typed.js'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

const brandStatements = [
  'software developer',
  'data analyst',
  'student',
  'team player'
]

export default function AboutMePageHeroSectionClient() {
  const {
    backgroundTheme,
    textTheme
  } = useSelector(selectTheme)
  const personalStatementRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(personalStatementRef.current, {
      strings: brandStatements,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1500,
      smartBackspace: true,
      startDelay: 150,
      cursorChar: '_',
      loop: true
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return <section className={'relative'}>
    <div className={stringUtility.merge([
      'container-layout feature-py section-px',
      'flex gap-12 justify-between'
    ])}>
      <div className={'basis-2/5 self-end'}>
        <div className={stringUtility.merge([
          'w-[400px] h-[400px] mx-auto blob-profile-container',
          backgroundTheme.accentColor,
          'relative'
        ])}>
          <Image
            alt={'Profile image'}
            src={'/profile.webp'}
            fill
            priority
            style={{
              objectFit: 'cover'
            }} />
        </div>
      </div>
      <section className={'basis-3/5'}>
        <h1 className={stringUtility.merge([
          'text-5xl lg:text-6xl transition-font-size',
          `${textTheme.secondaryColor} font-bold`
        ])}>I&apos;m a <span ref={personalStatementRef}>
          </span>
        </h1>
        <p
          className={'text-lg mt-6'}>
          I have 2 years of experience in software development,
          with a strong focus on quality, meeting deadlines,
          and ensuring client satisfaction. With a major in
          Information Systems, I am currently pursuing a
          master’s program in Data Science and Analytics at
          Stockton University. In my free time, I enjoy traveling
          and capturing moments through photography.
        </p>
      </section>
    </div>
  </section>
}
