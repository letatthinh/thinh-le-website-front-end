export const getStateNames = async() => {
  const url = new URL(
    'api/location/state-names',
    process.env.NEXT_PUBLIC_BACK_END_ORIGIN
  )
  console.log('url', url)
  return (await fetch(url)).json()
}

export const getCitiesByStateName = async(_stateName) => {
  const url = new URL(
    'api/location/cities-by-state-name',
    process.env.NEXT_PUBLIC_BACK_END_ORIGIN
  )
  url.searchParams.append('stateName', _stateName)

  return (await fetch(url)).json()
}

const locationApi = {
  getStateNames,
  getCitiesByStateName
}

export default locationApi
