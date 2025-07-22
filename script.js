console.log("Hello, World!. Welcome to the Rock, Paper, Scissors game!");

function getComputerChoice() {
  const randomChoice = Math.random();
  if (randomChoice < 1 / 3) {
    return "rock";
  } else if (randomChoice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());

// step 3: Write the logic to get the human choice
function getHumanChoice() {
  const choices = prompt("Enter your choice: rock, paper, or scissors");
  const validChoices = ["rock", "paper", "scissors"];

  if (validChoices.includes(choices.toLowerCase())) {
    return choices.toLowerCase();
  } else {
    console.log("Invalid choice, please try again.");
    return getHumanChoice(); // ask again if input is invalid
  }
}

console.log(getHumanChoice());

//step 4:  Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
  const player = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  console.log(`You chose: ${player}`);
  console.log(`Computer chose: ${computer}`);

  if (player === computer) {
    console.log("It's a tie!");
    return;
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    playerScore++;
    console.log(
      `You win! ${capitalize(player)} beats ${capitalize(computer)}.`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${capitalize(computer)} beats ${capitalize(player)}.`
    );
  }

  console.log(`Score: You ${player} - Computer ${computer}`);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

playRound(getHumanChoice(), getComputerChoice());
