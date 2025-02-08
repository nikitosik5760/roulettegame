import Bet from "./Bet"

const BetsDisplay = ({ bet, setBet }) => {
  return (
    <div className="bets-container">
      <Bet betLabel="first 12" bet={bet} setBet={setBet} size="big"></Bet>
      <Bet betLabel="second 12" bet={bet} setBet={setBet} size="big"></Bet>
      <Bet betLabel="third 12" bet={bet} setBet={setBet} size="big"></Bet>
      <Bet betLabel="1-18" bet={bet} setBet={setBet}></Bet>
      <Bet betLabel="even" bet={bet} setBet={setBet}></Bet>
      <Bet betLabel="red" bet={bet} setBet={setBet}></Bet>
      <Bet betLabel="black" bet={bet} setBet={setBet}></Bet>
      <Bet betLabel="odd" bet={bet} setBet={setBet}></Bet>
      <Bet betLabel="19-36" bet={bet} setBet={setBet}></Bet>
    </div>
  )
}

export default BetsDisplay
