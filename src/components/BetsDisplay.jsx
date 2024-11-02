import Bet from "./Bet"

const BetsDisplay = () => {
  return (
    <div className="bets-container">
      <Bet betLabel="First 12" size="big"></Bet>
      <Bet betLabel="Second 12" size="big"></Bet>
      <Bet betLabel="Third 12" size="big"></Bet>
      <Bet betLabel="1-18"></Bet>
      <Bet betLabel="even"></Bet>
      <Bet betLabel="red"></Bet>
      <Bet betLabel="black"></Bet>
      <Bet betLabel="odd"></Bet>
      <Bet betLabel="19-36"></Bet>
    </div>
  )
}

export default BetsDisplay