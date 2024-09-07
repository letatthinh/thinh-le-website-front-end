import BrandNameClient from '@/components/client/brand-name'
import IconLinkButtonClient from '@/components/client/buttons/links/icon'
import FooterNavigationBarClient
  from '@/components/client/navigation-bars/footer'
import navigationBarConstant from '@/constants/navigation-bar'
import stringUtility from '@/utilities/string'
import {useSelector} from 'react-redux'

import {createSelector, createStructuredSelector} from 'reselect'

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

  return <footer
    className={stringUtility.merge([
      backgroundTheme.primaryColor
    ])}>
    <div
      className={stringUtility.merge([
        'container-layout section-pt pb-6 section-px'
      ])}>
      <div className={'flex flex-col lg:flex-row lg:gap-10'}>
        <section className={'basis-full lg:basis-2/6'}>
          <BrandNameClient
            className={`text-3xl ${textTheme.secondaryColor}`} />
        </section>
        <FooterNavigationBarClient />
      </div>
      <hr className={`content-mt ${borderTheme.opacity.ten.primaryColor}`} />
      <div className={stringUtility.merge([
        'flex flex-col gap-6 md:flex-row md:gap-0',
        'md:justify-between content-mt'
      ])}>
        <p>© 2024 Thinh Le&apos;s website, Inc. All rights reserved.</p>
        <div className={'flex gap-6 justify-center xs:justify-start'}>
          {navigationBarConstant.socialMedia.map(
            (_socialMedia, _index) => {
              return <IconLinkButtonClient
                key={_index}
                label={_socialMedia.label}
                href={_socialMedia.link}>
                {_socialMedia.icon}
              </IconLinkButtonClient>
            })}
        </div>
      </div>
    </div>
  </footer>
}
