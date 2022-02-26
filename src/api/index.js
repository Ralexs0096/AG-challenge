import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async country => {
  try {
    const countryData = `${url}/countries/${country}`
    const { data } = await axios.get(countryData)

    const { confirmed, deaths, recovered, lastUpdate } = data

    const lastDateUpdated = lastUpdate.split('T')[0]

    return { confirmed, deaths, recovered, lastDateUpdated }
  } catch (error) {
    return error
  }
}
