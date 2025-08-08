// Track scores
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM elements
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const restartBtn = document.getElementById("restart");

// Computer randomly chooses Rock, Paper, or Scissors
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a single round
function playRound(playerSelection) {
  // If the game already ended, don't play
  if (playerScore >= winningScore || computerScore >= winningScore) {
    return;
  }

  const computerSelection = computerPlay();
  let result = "";

  // Determine round winner
  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    result = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
  }

  // Display result and score
  resultsDiv.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  // Check for game over
  if (playerScore === winningScore) {
    resultsDiv.textContent = "🎉 You win the game!";
  } else if (computerScore === winningScore) {
    resultsDiv.textContent = "💻 Computer wins the game!";
  }
}

// Restart game
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  resultsDiv.textContent = "";
  scoreDiv.textContent = "";
}

// Event listeners for choice buttons
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));

// Event listener for restart button
restartBtn.addEventListener("click", restartGame);
