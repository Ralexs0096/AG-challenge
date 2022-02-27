import PropTypes from 'prop-types'
import Loader from './Loader'

const Content = ({ data, country }) => {
  if (!data) {
    return <Loader />
  }

  const { confirmed, deaths, recovered, lastDateUpdated } = data

  return (
    <div className="container">
      <h2>
        Results for: <span className="title-header-country">{country}</span>
      </h2>
      <div className="row">
        <div className="card card-1 card-cm">
          <h3>Confirmed Cases</h3>
          <span className="title-header">
            {confirmed.value.toLocaleString()}
          </span>
        </div>

        <div className="card card-2 card-cm">
          <h3>Death Toll</h3>
          <span className="title-header">{deaths.value.toLocaleString()}</span>
        </div>
        <div className="card card-3 card-cm">
          <h3>Recovered</h3>
          <span className="title-header">{recovered.value}</span>
        </div>
        <div className="card card-4 card-cm">
          <h3>Last Updated</h3>
          <span className="title-header">{lastDateUpdated}</span>
        </div>
      </div>
    </div>
  )
}

Content.propTypes = {
  country: PropTypes.string.isRequired,
  data: PropTypes.object,
}

export default Content
