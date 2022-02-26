import { useEffect, useState } from 'react'
import { fetchData } from './api'
import Content from './components/Content'
import Header from './components/Header'

function App() {
  const [data, setData] = useState()
  const [country, setCountry] = useState('Nicaragua')
  const [error, setError] = useState(false)

  const getDataCovid = async () => {
    const result = await fetchData(country)
    console.log(result.hasOwnProperty('confirmed'))

    if (result.hasOwnProperty('confirmed')) {
      setData(result)
      setError(false)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    getDataCovid()
  }, [country])

  return (
    <div>
      <Header country={country} setCountry={setCountry} />
      {!error ? (
        <>
          <Content data={data} country={country} />
        </>
      ) : (
        <div className="country-not-found">
          The country that you entered doesn't exist or is not available
        </div>
      )}
    </div>
  )
}

export default App
