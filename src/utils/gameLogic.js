import { number } from "prop-types"


const redTilleNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

export const calcKef = (bet) => {
  console.log(bet)
  switch (bet) {
    case typeof (bet) === "number":
      return 36
    case "first 12":
      return 3
    case "second 12":
      return 3
    case "third 12":
      return 3
    case "1-18":
      return 2
    case "19-36":
      return 2
    case "red":
      return 2
    case "black":
      return 2
    case "odd":
      return 2
    case "even":
      return 2
  }
}

export const checkWinner = (bet, winNum) => {
  switch (bet) {
    case typeof (bet) === number:
      return bet === winNum
    case "first 12":
      return winNum <= 12
    case "second 12":
      return winNum <= 24 && winNum > 12
    case "third 12":
      return winNum <= 36 && winNum > 24
    case "1-18":
      return winNum <= 18
    case "19-36":
      return winNum <= 36 && winNum > 18
    case "red":
      for (let i = 0; i < redTilleNumbers.length; i++) {
        if (redTilleNumbers[i] === winNum) {
          return true
        }
      }
      return false
    case "black":
      for (let i = 0; i < redTilleNumbers.length; i++) {
        if (redTilleNumbers[i] === winNum) {
          return false
        }
      }
      return true
    case "odd":
      return !!(winNum % 2)
    case "even":
      return !(winNum % 2)
  }
}
