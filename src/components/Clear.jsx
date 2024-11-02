import PropTypes, { object } from 'prop-types'

const Clear = ({ chipsQnt, setChipsQnt, setBalance }) => {
  const handleChipsReset = () => {
    setChipsQnt(chipsQnt.map(oneChipsType => {
        let curentValue = 0
        switch (oneChipsType.name) {
            case 'one':
                curentValue = 1
                break
            case 'five':
                curentValue = 5
                break
            case 'twentyfive':
                curentValue = 25
                break
            case 'hundred':
                curentValue = 100
                break
            default:
                curentValue = 0
                break
        }
        setBalance(b=>b + curentValue * oneChipsType.qnt)
        return {...oneChipsType, qnt:0}
    }))
  }

  return (
    <button className='clear-btn' onClick={handleChipsReset}>
        Clear
    </button>
  )
}

Clear.propTypes = {
    chipsQnt: PropTypes.arrayOf(object).isRequired,
    setChipsQnt: PropTypes.func.isRequired,
    setBalance: PropTypes.func.isRequired,
}

export default Clear