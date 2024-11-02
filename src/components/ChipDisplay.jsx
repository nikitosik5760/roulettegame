import PropTypes, { object } from "prop-types"

const ChipsDisplay = ({ chipsQnt }) => {
  return (
    <div className="all-chips-container">
      {chipsQnt.map(oneChipsType=>{
        return(
          <div key={oneChipsType.name} className="chip-container">
            {Array.from({ length: oneChipsType.qnt }).map((_, chipIndex) => (
          <div key={chipIndex} className={`chip ${oneChipsType.name}`}></div>
        ))}    
          </div>
        )
      })}
    </div>
  )
}

ChipsDisplay.propTypes ={
  chipsQnt: PropTypes.arrayOf(object).isRequired
}

export default ChipsDisplay