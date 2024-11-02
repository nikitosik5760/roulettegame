import PropTypes from "prop-types"

const Start = ({ setWinnerNumber }) => {
    const handleStart = () => {
        const randomWinNumber = Math.floor(Math.random() * 37)
        setWinnerNumber(randomWinNumber)
    }

  return (
    <button className='start-btn' onClick={handleStart}>
        Start
    </button>
  )
}

Start.propTypes = {
    setWinnerNumber: PropTypes.func.isRequired,
}

export default Start
