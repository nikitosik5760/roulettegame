import PropTypes from "prop-types"

const ChipButton = ({ chipValue,setBalance,setChipsQnt }) => {

  const handleChipPurchase = () => {
    setBalance(b=>b-chipValue)
    switch (chipValue){
      case 1:
        setChipsQnt(qnt=>[qnt[0]+1, qnt[1], qnt[2], qnt[3]])
        break
      case 5:
        setChipsQnt(qnt=>[qnt[0], qnt[1]+1, qnt[2], qnt[3]])
        break
      case 25:
        setChipsQnt(qnt=>[qnt[0], qnt[1], qnt[2]+1, qnt[3]])
        break
      case 100:
        setChipsQnt(qnt=>[qnt[0], qnt[1], qnt[2], qnt[3]+1])
        break  
    }
    setChipsQnt(qnt=>qnt) // TODO make this work
  }

  return (
    <button className="chip-btn" onClick={handleChipPurchase}>
      {chipValue}
    </button>
  )
}

ChipButton.propTypes = {
  chipValue: PropTypes.number.isRequired,
  setBalance: PropTypes.func.isRequired,
  setChipsQnt: PropTypes.func.isRequired,
}

export default ChipButton