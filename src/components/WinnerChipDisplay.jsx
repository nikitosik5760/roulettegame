import PropTypes from "prop-types"

const WinnerChipDisplay = ({ winnerNumber }) => {
  const redTilleNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
  
  const tileColor = { 
    backgroundColor: winnerNumber === 0 
      ? 'green' 
        : redTilleNumbers.find(n=>n === winnerNumber) 
          ? 'red'
            : 'black' }
  return (
    <div className='result-container'>
        CURRENT WINNER:
        <div style={tileColor} className='tile winner-tile'>
            {winnerNumber}
        </div>
    </div>
  )
}

WinnerChipDisplay.propTypes = {
    winnerNumber: PropTypes.number.isRequired
}

export default WinnerChipDisplay