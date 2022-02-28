import { useState, useEffect, useCallback } from 'react'
import { fetchData } from './api'
import Content from './components/Content'
import Header from './components/Header'

function App() {
  const [data, setData] = useState()
  const [country, setCountry] = useState('Nicaragua')
  const [error, setError] = useState(false)

  const getDataCovid = useCallback(async () => {
    const result = await fetchData(country)

    if (result.hasOwnProperty('confirmed')) {
      setData(result)
      setError(false)
    } else {
      setError(true)
    }
  }, [country])

  useEffect(() => {
    getDataCovid()
  }, [country, getDataCovid])

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
