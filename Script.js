let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerScore = 0;
let computerScore = 0;
let gameMoves = 0;

const buttons = document.querySelectorAll('.click-game');
const results = document.querySelector('#message');
const playerOverallResults = document.querySelector('#plscore');
const computerOverallResults = document.querySelector('#coscore');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    gameMoves++; // Move this statement to the beginning

    let computerSelection = getComputerChoice();
    let playerSelection = button.id;

    if (gameMoves === 10) {
      gameOver();
      return;
    }

    if (playerSelection === computerSelection) {
      results.textContent = `Your choice: ${playerSelection}, computer choice: ${computerSelection}. It's a draw`;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      results.textContent = `Your choice: ${playerSelection}, computer choice: ${computerSelection}. You win`;
      playerOverallResults.textContent = `Player Score: ${playerScore}`;
    } else {
      computerScore++;
      results.textContent = `Your choice: ${playerSelection}, computer choice: ${computerSelection}. You lose`;
      computerOverallResults.textContent = `Computer Score ${computerScore}`;
    }
  });
});

function gameOver() {
  buttons.forEach((button) => {
    button.disabled = true;
  });

  const resultDisplay = document.querySelector('#result');
  if (playerScore > computerScore) {
    resultDisplay.textContent = 'You won the game!';
  } else if (playerScore < computerScore) {
    resultDisplay.textContent = 'You lost the game!';
  } else {
    resultDisplay.textContent = "It's a tie!";
  }
}

const refreshButton = document.getElementById('resetButton');

refreshButton.addEventListener('click', () => {
  window.location.reload();
});
