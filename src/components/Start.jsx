import PropTypes from "prop-types"

const Start = ({ setWinnerNumber, handleResult }) => {
    const handleStart = () => {
        const randomWinNumber = Math.floor(Math.random() * 37)
        setWinnerNumber(randomWinNumber)
        handleResult(randomWinNumber)
    }

    return (
        <button className='start-btn' onClick={handleStart}>
            Start
        </button>
    )
}

Start.propTypes = {
    setWinnerNumber: PropTypes.func.isRequired,
    handleResult: PropTypes.func
}

export default Start
