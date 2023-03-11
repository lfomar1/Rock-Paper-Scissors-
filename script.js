//Function which declares the selection of the computer choice
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * options.length);
  let randomElement = options[index];
  return randomElement;
}

//console.log(getComputerChoice());
// Function which declares who is the winner of the game and who looses it;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `It's a tie, because you choose ${playerSelection}, and the computer choose ${computerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You win the round, you choose ${playerSelection}, computer choose ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You win the round, you choose ${playerSelection}, computer choose ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You win the round, you choose ${playerSelection}, computer choose ${computerSelection}`;
  } else {
    return `You loose the round, because you choose ${playerSelection}, and the computer choose ${computerSelection}`;
  }
}
//const playerSelection = "paper";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

// TO DO MAKE A PLAYER CHOICE THAT IS A LOOP WHILE THAT IF THE INPUT IS FALSE KEEP ASKING TO ENTER ROCK PAPER AND SCISSORS AND, MAKE CASE INSESITIVE.

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
