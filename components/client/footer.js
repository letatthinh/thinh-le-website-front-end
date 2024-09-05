import BrandNameClient from '@/components/client/brand-name'
import IconLinkButtonClient from '@/components/client/buttons/links/icon'
import FooterNavigationBarClient
  from '@/components/client/navigation-bars/footer'
import navigationBarConstant from '@/constants/navigation-bar'
import stringUtility from '@/utilities/string'
import {useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'

import {createSelector, createStructuredSelector} from 'reselect'
import Typed from 'typed.js'

const selectTheme = createStructuredSelector(
  {
    backgroundTheme: (_state) => _state.backgroundTheme,
    borderTheme: (_state) => _state.borderTheme,
    textTheme: (_state) => _state.textTheme
  },
  createSelector
)

export default function FooterClient() {
  const {
    backgroundTheme,
    borderTheme,
    textTheme
  } = useSelector(selectTheme)
  const brandStatementsRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(brandStatementsRef.current, {
      strings: navigationBarConstant.brandStatements,
      typeSpeed: 5,
      backSpeed: 5,
      backDelay: 1500,
      startDelay: 500,
      cursorChar: '_',
      loop: true
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return <footer
    className={stringUtility.merge([
      backgroundTheme.primaryColor
    ])}>
    <section
      className={stringUtility.merge([
        'container-layout section-pt'
      ])}>
      <BrandNameClient
        className={`text-3xl ${textTheme.secondaryColor}`} />
      <p className={'mt-4'}><span
        ref={brandStatementsRef}></span></p>
      <hr className={`my-6 ${borderTheme.opacity.ten.primaryColor}`} />
      <FooterNavigationBarClient />
      <hr className={`mt-6 ${borderTheme.opacity.ten.primaryColor}`} />
      <div className={stringUtility.merge([
        'flex flex-col gap-6 md:flex-row md:gap-0',
        'md:justify-between py-6'
      ])}>
        <p>© 2024 Thinh Le&apos;s website, Inc. All rights reserved.</p>
        <div className={'flex gap-6 justify-center xs:justify-start'}>
          {navigationBarConstant.socialMedia.map(
            (_socialMedia, _index) => {
              return <IconLinkButtonClient
                key={_index}
                href={_socialMedia.link}>
                {_socialMedia.icon}
              </IconLinkButtonClient>
            })}
        </div>
      </div>
    </section>
  </footer>
}
