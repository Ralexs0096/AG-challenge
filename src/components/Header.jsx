import { useState } from 'react'

const Header = ({ country, setCountry }) => {
  const [input, setInput] = useState('')
  const [alert, setAlert] = useState(false)

  const handleOnClick = () => {
    if (input.trim() === '') {
      setAlert(true)
      return
    }
    setAlert(false)
    setCountry(input)
    setInput('')
  }

  return (
    <div className="container container-header">
      <h1>Covid 19 Statistics</h1>
      <input
        type="text"
        className="input-search"
        name="input"
        value={input}
        placeholder="Search by Country"
        onChange={e => setInput(e.target.value)}
      />
      <button className="button-filter" onClick={handleOnClick}>
        Fetch
      </button>
      {alert ? (
        <div className="alert">Enter the name of any country</div>
      ) : null}
    </div>
  )
}
export default Header
