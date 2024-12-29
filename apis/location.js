export const getStateNames = async() => {
  const url = `${
    process.env.NEXT_PUBLIC_BACK_END_ORIGIN
  }/api/location/state-names`
  return (await fetch(url)).json()
}

const locationApi = {
  getStateNames
}

export default locationApi
