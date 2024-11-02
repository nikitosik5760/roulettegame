import PropTypes from "prop-types"

const ChipButton = ({ balance, chipValue,setBalance,setChipsQnt }) => {
  const handleChipPurchase = () => {

    if(balance-chipValue<0) {
      console.log('not enough money!')
      return
    }

    setBalance(b=>b-chipValue)
    switch (chipValue){
      case 1:
        setChipsQnt(chipsQnt=>[{name:chipsQnt[0].name, qnt:chipsQnt[0].qnt+1}, chipsQnt[1], chipsQnt[2], chipsQnt[3]])
        break
      case 5:
        setChipsQnt(chipsQnt=>[chipsQnt[0], {name:chipsQnt[1].name, qnt:chipsQnt[1].qnt+1}, chipsQnt[2], chipsQnt[3]])
        break
      case 25:
        setChipsQnt(chipsQnt=>[chipsQnt[0], chipsQnt[1], {name:chipsQnt[2].name, qnt:chipsQnt[2].qnt+1}, chipsQnt[3]])
        break
      case 100:
        setChipsQnt(chipsQnt=>[chipsQnt[0], chipsQnt[1], chipsQnt[2], {name:chipsQnt[3].name, qnt:chipsQnt[3].qnt+1}])
        break  
    }
    setChipsQnt(qnt=>qnt)
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
  balance: PropTypes.number.isRequired
}

export default ChipButton