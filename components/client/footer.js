import BrandNameClient from '@/components/client/brand-name'
import IconLinkButtonClient from '@/components/client/buttons/links/icon'
import FooterNavigationBarClient
  from '@/components/client/navigation-bars/footer'
import socialMediaConstant from '@/constants/social-media'
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

export default function FooterClient({className}) {
  const {
    backgroundTheme,
    borderTheme,
    textTheme
  } = useSelector(selectTheme)

  return <footer
    className={stringUtility.merge([
      backgroundTheme.primaryColor,
      className
    ])}>
    <div
      className={stringUtility.merge([
        'container-layout section-pt pb-6 section-px'
      ])}>
      <div className={'flex flex-col lg:flex-row lg:gap-10'}>
        <BrandNameClient className={'basis-full lg:basis-2/6 text-big-2'} />
        <FooterNavigationBarClient />
      </div>
      <hr className={`content-mt ${borderTheme.opacity.ten.primaryColor}`} />
      <div className={stringUtility.merge([
        'flex flex-col content-gap md:flex-row md:gap-0',
        'md:justify-between content-mt'
      ])}>
        <p>
          © 2024 Thinh Le&apos;s website, Inc. All rights reserved.
        </p>
        <div className={'flex content-gap justify-center xs:justify-start'}>
          {socialMediaConstant.allSocialMedia.map(
            (_socialMedia, _index) => {
              return <IconLinkButtonClient
                className={'wh-normal'}
                key={_index}
                ariaLabel={_socialMedia.label}
                href={_socialMedia.link}>
                {_socialMedia.icon}
              </IconLinkButtonClient>
            })}
        </div>
      </div>
    </div>
  </footer>
}
