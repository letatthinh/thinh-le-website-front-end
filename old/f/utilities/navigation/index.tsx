import UrlSearchParameterType from '@/types/url-search-parameter'

const createQuery = (_urlSearchParameters?: UrlSearchParameterType[]) => {
  let query = ''

  if (_urlSearchParameters?.length) {
    const urlSearchParameters = new URLSearchParams()

    _urlSearchParameters.forEach((_urlSearchParameter) => {
      urlSearchParameters.set(
        _urlSearchParameter.key,
        _urlSearchParameter.value
      )
    })

    query = `?${urlSearchParameters.toString()}`
  }

  return query
}

const urlUtility = {
  createQuery
}

export default urlUtility