'use client'
import BrandNameClient from '@/components/client/brand-name'
import HeaderNavigationBarClient
  from '@/components/client/header-navigation-bar'
import stringUtility from '@/utilities/string'
import {Hamburger01Icon} from '@hugeicons/react'
import {useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import {createSelector, createStructuredSelector} from 'reselect'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    shadowTheme: (_state) => _state.shadowTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function Header() {
  const {backgroundTheme, shadowTheme, textTheme} = useSelector(selectTheme)
  const sentinelRef = useRef(null)
  const headerRef = useRef(null)
  const hamburgerButtonRef = useRef(null)

  useEffect(() => {
    const observeSentinel = ([entry]) => {
      const shadowClassName = 'shadow-lg'
      if (!entry.isIntersecting) {
        headerRef.current.classList.add(
          shadowClassName,
          shadowTheme.opacity.twenty.accentColor)
      } else {
        headerRef.current.classList.remove(
          shadowClassName,
          shadowTheme.opacity.twenty.accentColor)
      }
    }

    const sentinelObserver = new IntersectionObserver(
      observeSentinel,
      {
        // [Tip]: where the view box of the target is based on, default is the viewport
        root: null,
        // [Tip]: threshold is the percentage
        //    0: first pixel of the element is considered intersected
        //    1: full element is considered intersected
        threshold: 0,
        // [Tip]: rootMargin is for zoom in or zoom out the view box
        rootMargin: '0px 0px 0px 0px'
      }
    )

    const sentinel = sentinelRef.current

    if (sentinel) {
      sentinelObserver.observe(sentinel)
    }

    return () => {
      if (sentinel) {
        sentinelObserver.unobserve(sentinel)
        sentinelObserver.disconnect()
      }
    }
  }, [
    shadowTheme.accentColor,
    shadowTheme.opacity.twenty.accentColor
  ])

  const onHamburgerButtonClick = (_event) => {
    _event.preventDefault()
    const menuButton = hamburgerButtonRef.current
    menuButton.classList.add('animate-hamburger')

    setTimeout(() => {
      menuButton.classList.remove('animate-hamburger')
    }, 300)
  }

  return <>
    {/* [Tip]: Use a sentinel for the intersectionObserver */}
    <div ref={sentinelRef}></div>
    <header
      ref={headerRef}
      className={stringUtility.merge([
        backgroundTheme.primaryColor,
        'sticky top-0 z-10',
        'transition-box-shadow duration-300'
      ])}>
      <section
        className={stringUtility.merge([
          'container-layout py-6 lg:pl-0 lg:pr-2',
          'flex justify-between items-center'
        ])}>
        <BrandNameClient
          className={`text-3xl ${textTheme.secondaryColor}`} />
        <HeaderNavigationBarClient />
        <button
          ref={hamburgerButtonRef}
          onClick={onHamburgerButtonClick}
          className={`lg:hidden ${textTheme.secondaryColor}`}>
          <Hamburger01Icon
            size={32}
            variant={'solid'}
            type={'rounded'} />
        </button>
      </section>
    </header>
  </>
}
