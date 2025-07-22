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

  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${capitalize(computerChoice)} beats ${capitalize(
        humanChoice
      )}.`
    );
  }

  console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  console.log("-----");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// step 6:Write the logic to play the entire game
function playGame() {
  humanScore = 0;
  computerScore = 0;
  console.log("Starting a 5-round game!");

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins overall!");
  } else {
    console.log("The game is a tie!");
  }
}

// Start the game
playGame();
