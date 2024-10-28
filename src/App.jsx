import { useState } from 'react'
import ChipsDisplay from './components/ChipDisplay'
import SelectChips from './components/SelectChips'
import TileNumber from './components/TileNumber'

function App() {
  const tileNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
  const [balance, setBalance] = useState(1000)
  const [chipsQnt, setChipsQnt] = useState([0,0,0,0]) // TODO there bug when 2 or more values are equal
  
  return (
    <div className='app'>
      <div className='tile-container'>
        <TileNumber tileNumber={0}></TileNumber>
        {tileNumbers.map(n=>(
          <TileNumber key={n} tileNumber={n}></TileNumber>
        ))}
      </div>
      <ChipsDisplay chipsQnt={chipsQnt}></ChipsDisplay>
      <SelectChips setChipsQnt={setChipsQnt} setBalance={setBalance}></SelectChips>
      <div className='balance-display'>
        {balance}$
      </div>
      <button className='clear-btn'>
        Clear
      </button>
      <button className='restart-btn'>
        Restart
      </button>
    </div>
  )
}

export default App
