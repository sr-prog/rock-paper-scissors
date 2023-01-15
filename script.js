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

function clicked(e){
  const playerSelection = e.target.id
  const computerSelection = getComputerChoice()
  const roundResult = playRound(playerSelection, computerSelection)
  document.querySelector('#player-choice').textContent = "You chose: " + playerSelection
  document.querySelector('#computer-choice').textContent = "The computer chose: " + computerSelection
  document.querySelector('#winner-text').textContent = "Result: " + roundResult
}

const buttons = document
  .querySelectorAll('button')
  .forEach((button) => button.addEventListener('click', clicked))
