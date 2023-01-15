function getComputerChoice() {
  const selections = ['rock', 'paper', 'scissors']
  return selections[Math.floor(Math.random() * selections.length)]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  let playerWin = false

  if (playerSelection === computerSelection) {
    return `It's a tie! Since both of you threw ${playerSelection}`
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerWin = true
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerWin = true
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerWin = true
    }
  }

  return playerWin
    ? `You Win! ${playerSelection} beats ${computerSelection}`
    : `You Lose! ${computerSelection} beats ${playerSelection}`
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper or scissors:\n")
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
  }
}
