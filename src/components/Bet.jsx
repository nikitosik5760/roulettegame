import PropTypes from 'prop-types'

const Bet = ({ betLabel, size, bet, setBet }) => {
  const handleSelectBet = () => {
    setBet(betLabel)
  }
  const bgColor = {
    backgroundColor: betLabel === bet
      ? 'purple'
      : ''
  }

  if (betLabel === 'red') {
    return (
      <div style={bgColor} onClick={handleSelectBet} className={`bet ${size}`}>
        <div className='red-bet' ></div>
      </div>
    )
  }

  if (betLabel === 'black') {
    return (
      <div style={bgColor} onClick={handleSelectBet} className={`bet ${size}`}>
        <div className='black-bet' ></div>
      </div>
    )
  }

  return (
    <div style={bgColor} className={`bet ${size}`} onClick={handleSelectBet}>
      {betLabel}
    </div>
  )
}

Bet.propTypes = {
  betLabel: PropTypes.string.isRequired,
  size: PropTypes.string,
  bet: PropTypes.any,
  setBet: PropTypes.func.isRequired
}

export default Bet
