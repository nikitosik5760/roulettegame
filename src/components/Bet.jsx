import PropTypes from 'prop-types'

const Bet = ({ betLabel, size }) => {

  if(betLabel === 'red') {
    return (
    <div className={`bet ${size}`}>
      <div className='red-bet'></div>
    </div>
    )
  }

  if(betLabel === 'black') {
    return (
    <div className={`bet ${size}`}>
      <div className='black-bet'></div>
    </div>
    )
  }

  return (
    <div className={`bet ${size}`}>
      {betLabel}
    </div>
  )
}

Bet.propTypes = {
  betLabel: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Bet