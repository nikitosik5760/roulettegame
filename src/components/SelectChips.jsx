import PropTypes from 'prop-types'
import ChipButton from './ChipButton'

const SelectChips = ({ setBalance, setChipsQnt }) => {
  return (
    <div className='select-chips-container'>
        <ChipButton setChipsQnt={setChipsQnt} setBalance={setBalance} chipValue={1}></ChipButton>
        <ChipButton setChipsQnt={setChipsQnt} setBalance={setBalance} chipValue={5}></ChipButton>
        <ChipButton setChipsQnt={setChipsQnt} setBalance={setBalance} chipValue={25}></ChipButton>
        <ChipButton setChipsQnt={setChipsQnt} setBalance={setBalance} chipValue={100}></ChipButton>
    </div>
  )
}

SelectChips.propTypes = {
    setBalance: PropTypes.func.isRequired,
    setChipsQnt: PropTypes.func.isRequired,
}

export default SelectChips