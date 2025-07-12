const { use } = require("react");

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
