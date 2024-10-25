import pageMetadataConstant from '../../constants/metadata/page'
import UrlSearchParameterType from '@/types/url-search-parameter'
import urlUtility from '@/utilities/navigation'
import { useRouter } from 'next/navigation'

export default function useNavigation() {
  const router = useRouter()

  const navigateToUrl = (
    _url = pageMetadataConstant.home.path,
    _urlSearchParameters?: UrlSearchParameterType[]
  ) => {
    const query = urlUtility.createQuery(_urlSearchParameters)
    router.push(`${_url}${query}`, { scroll: true })
  }

  return {
    navigateToUrl
  }
}
