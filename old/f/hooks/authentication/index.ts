import pageMetadataConstant from '../../constants/metadata/page'
import searchParameterConstant from '@/constants/search-parameter'
import UrlSearchParameterType from '@/types/url-search-parameter'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import useNavigation from '../navigation'

export default function useAuthentication() {
  const pagePathname = usePathname()
  const isSignInPage = pagePathname === pageMetadataConstant.signIn.path
  const isSignedIn = false

  const { navigateToUrl } = useNavigation()

  useEffect(() => {
    if (!isSignInPage && !isSignedIn) {
      const urlSearchParameter: UrlSearchParameterType = {
        key: searchParameterConstant.callbackUrl,
        value: pagePathname
      }

      navigateToUrl(
        pageMetadataConstant.signIn.path,
        [
          urlSearchParameter
        ])
    }
  }, [navigateToUrl])
}
