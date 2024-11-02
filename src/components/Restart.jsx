import PropTypes from 'prop-types'

const Restart = ({ setChipsQnt, setBalance }) => {

  const handleRestart = () => {
    setChipsQnt([
      {name: "one", qnt:0},
      {name: 'five', qnt:0},
      {name: 'twentyfive', qnt:0},
      {name: 'hundred', qnt:0},
    ])
    setBalance(1000)
  }

  return (
    <button className='restart-btn' onClick={handleRestart}>
        Restart
      </button>
  )
}

Restart.propTypes = {
    setChipsQnt: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired
}

export default Restart