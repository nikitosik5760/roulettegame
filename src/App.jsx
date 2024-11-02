import { useState } from 'react'
import ChipsDisplay from './components/ChipDisplay'
import SelectChips from './components/SelectChips'
import TileNumber from './components/TileNumber'
import Clear from './components/Clear'
import Restart from './components/Restart'
import WinnerChipDisplay from './components/WInnerChipDisplay'
import Start from './components/Start'
import BestDisplay from './components/BetsDisplay'

function App() {
  const tileNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
  const [balance, setBalance] = useState(1000)
  const [winnerNumber, setWinnerNumber] = useState(0)
  const [chipsQnt, setChipsQnt] = useState(
    [
      {name: "one", qnt:0},
      {name: 'five', qnt:0},
      {name: 'twentyfive', qnt:0},
      {name: 'hundred', qnt:0},
    ])
  console.log('CURRENT CHIPS QNT:', chipsQnt)


  return (
    <div className='app'>
      <div className='tile-container'>
        <TileNumber tileNumber={0}></TileNumber>
        {tileNumbers.map(n=>(
          <TileNumber key={n} tileNumber={n}></TileNumber>
        ))}
      </div>
      <BestDisplay></BestDisplay>

      <ChipsDisplay chipsQnt={chipsQnt}></ChipsDisplay>
      <SelectChips balance={balance} setChipsQnt={setChipsQnt} setBalance={setBalance}></SelectChips>
      <div className='balance-display'>
        {balance}$
      </div>
      <Clear chipsQnt={chipsQnt} setChipsQnt={setChipsQnt} setBalance={setBalance}></Clear>
      <Restart setChipsQnt={setChipsQnt} setBalance={setBalance}></Restart>
      <Start setWinnerNumber={setWinnerNumber}></Start>
      <WinnerChipDisplay winnerNumber={winnerNumber}></WinnerChipDisplay>
    </div>
  )
}

export default App
