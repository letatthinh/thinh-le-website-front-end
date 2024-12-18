'use client'
import BrandNameClient from '@/components/client/brand-name'
import HeaderNavigationBarClient
  from '@/components/client/navigation-bars/header'
import VerticalNavigationBarClient
  from '@/components/client/navigation-bars/vertical'
import widthConstant from '@/constants/width'
import VerticalNavigationBarContext from '@/contexts/vertical-navigation-bar'
import stringUtility from '@/utilities/string'
import {Hamburger01Icon} from '@hugeicons/react'
import {useCallback, useEffect, useRef, useState} from 'react'
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
  const {
    backgroundTheme,
    shadowTheme,
    textTheme
  } = useSelector(selectTheme)
  const [viewportHeight, setViewportHeight] = useState(() => {
    return typeof window !== 'undefined'
      ? window.innerHeight
      : 0
  })
  const sentinelRef = useRef(null)
  const headerRef = useRef(null)
  const backdropRef = useRef(null)
  const hamburgerButtonRef = useRef(null)

  /* Set shadow for header when scrolling */
  useEffect(() => {
    const observeSentinel = ([entry]) => {
      const shadowSizeClassName = 'shadow-lg'

      if (!entry.isIntersecting) {
        headerRef.current.classList.add(
          shadowSizeClassName,
          shadowTheme.opacity.twenty.accentColor800)
      } else {
        headerRef.current.classList.remove(
          shadowSizeClassName,
          shadowTheme.opacity.twenty.accentColor800)
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
    shadowTheme.accentColor800,
    shadowTheme.opacity.twenty.accentColor800
  ])

  useEffect(() => {
    const hideBackdropWhenWidthExceeded = () => {
      const isBackdropShown = !backdropRef.current
        .classList
        .contains('hidden')

      if (window.innerWidth >= widthConstant.lg && isBackdropShown) {
        backdropRef.current.classList.toggle('hidden')
      }
    }

    const onWindowResize = () => {
      setViewportHeight(window.innerHeight)
      hideBackdropWhenWidthExceeded()
    }

    window.addEventListener('resize', onWindowResize)

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  /* Calculate the backdrop height */
  useEffect(() => {
    const headerHeight = headerRef.current.getBoundingClientRect().height
    const backdropHeight = viewportHeight - headerHeight

    if (backdropRef.current) {
      backdropRef.current.style.height = `${backdropHeight}px`
    }
  }, [viewportHeight])

  const animateHamburgerButton = useCallback(() => {
    const menuButton = hamburgerButtonRef.current
    menuButton.classList.add('animate-hamburger')

    setTimeout(() => {
      menuButton.classList.remove('animate-hamburger')
    }, 300)
  }, [])

  const toggleBackdropHiddenClassName = useCallback(() => {
    backdropRef.current.classList.toggle('hidden')
  }, [])

  const onHamburgerButtonClick = useCallback((_event) => {
    _event.preventDefault()
    animateHamburgerButton()
    toggleBackdropHiddenClassName()
  }, [
    animateHamburgerButton,
    toggleBackdropHiddenClassName
  ])

  const onBackdropClick = useCallback(() => {
    toggleBackdropHiddenClassName()
  }, [toggleBackdropHiddenClassName])

  const onNavigationItemClick = useCallback(() => {
    toggleBackdropHiddenClassName()
  }, [toggleBackdropHiddenClassName])

  return <>
    {/* [Tip]: Use a sentinel with intersectionObserver to set shadow for the header */}
    <div ref={sentinelRef}></div>
    <header
      ref={headerRef}
      className={stringUtility.merge([
        backgroundTheme.primaryColor,
        'sticky top-0 z-40',
        'transition-box-shadow duration-300'
      ])}>
      <section
        className={stringUtility.merge([
          'container-layout content-py section-px lg:pl-0 lg:pr-2',
          'flex justify-between items-center'
        ])}>
        <BrandNameClient
          className={`text-3xl ${textTheme.secondaryColor}`} />
        <HeaderNavigationBarClient />
        <button
          aria-label={'Hamburger button'}
          ref={hamburgerButtonRef}
          onClick={onHamburgerButtonClick}
          className={stringUtility.merge([
            `lg:hidden ${textTheme.secondaryColor}`,
            textTheme.hover.accentColor800
          ])}>
          <Hamburger01Icon
            size={32}
            variant={'solid'}
            type={'rounded'} />
        </button>
      </section>
      <VerticalNavigationBarContext.Provider value={onNavigationItemClick}>
        {/* Absolute to the body tag
          See more: https://developer.mozilla.org/en-US/docs/Web/CSS/position#values
        */}
        <div
          onClick={onBackdropClick}
          ref={backdropRef}
          className={stringUtility.merge([
            'hidden absolute w-full',
            backgroundTheme.opacity.fifty.secondaryColor
          ])}>
          <section className={stringUtility.merge([
            'h-full'
          ])}>
            <VerticalNavigationBarClient />
          </section>
        </div>
      </VerticalNavigationBarContext.Provider>
    </header>
  </>
}
