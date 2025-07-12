console.log("Hello, World!");
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

function getHumanChoice() {
  const choices = prompt("Enter your choice: rock, paper, or scissors");
  if (choices === "rock" || choices === "paper" || choices === "scissors") {
    return choices;
  } else {
    console.log("Invalid choice, please try again.");
    return getHumanChoice();
  }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

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
