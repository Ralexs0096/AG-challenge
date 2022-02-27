import axios from 'axios'

export const baseUrl = 'https://covid19.mathdro.id/api'

export const fetchData = async country => {
  try {
    const countryData = `${baseUrl}/countries/${country}`
    const { data } = await axios.get(countryData)

    const { confirmed, deaths, recovered, lastUpdate } = data

    const lastDateUpdated = lastUpdate.split('T')[0]

    return { confirmed, deaths, recovered, lastDateUpdated }
  } catch (error) {
    return error
  }
}
