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

const humanScore = 0;
const computerScore = 0;
