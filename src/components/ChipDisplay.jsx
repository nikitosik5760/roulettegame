import PropTypes, { object } from "prop-types"

const ChipsDisplay = ({ chipsQnt }) => {
  console.log(chipsQnt)
  let i=-1
  return (
    <div className="all-chips-container">
      {chipsQnt.map(oneChipsTypeQnt=>{
        let chipType = ''
        switch (chipsQnt.indexOf(oneChipsTypeQnt)) {
          case 0:
            chipType = 'one'
            break
          case 1:
            chipType = 'five'
            break
          case 2:
            chipType = 'twentyfive'
            break
          case 3:
            chipType = 'hundred' 
            break 
          default:
            chipType='one'
            console.log('ERROR THIS TYPE OF CHIP DOESNT EXIST')
        }
        
        i++
        return(
          <div key={i} className="chip-container">
            {Array.from({ length: oneChipsTypeQnt }).map((_, chipIndex) => (
          <div key={chipIndex} className={`chip ${chipType}`}></div>
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