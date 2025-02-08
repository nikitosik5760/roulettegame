import PropTypes from 'prop-types'

const Tile = ({ tileNumber, setBet, bet }) => {
  const redTilleNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

  const tileColor = {
    backgroundColor: tileNumber === bet
      ? 'purple'
      : tileNumber === 0
        ? 'green'
        : redTilleNumbers.find(n => n === tileNumber)
          ? 'red'
          : 'black'
  }


  const handleTile = () => {
    setBet(tileNumber)
  }

  return (
    <div style={tileColor} className={`tile ${tileNumber === 0 ? 'zero' : ''}`} onClick={handleTile}>
      {tileNumber}
    </div>
  )
}

Tile.propTypes = {
  tileNumber: PropTypes.number.isRequired,
  setBet: PropTypes.func.isRequired,
  bet: PropTypes.any
}

export default Tile
