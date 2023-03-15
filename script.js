//Function which declares the selection of the computer choice
const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let index = Math.floor(Math.random() * options.length);
  let randomElement = options[index];
  return randomElement;
}

//console.log(getComputerChoice());
// Function which declares who is the winner of the game and who looses it;

let playerScore = 0;
let computerScore = 0;

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
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Player";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Player";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player";
  } else {
    return "Computer";
  }
}
/* Every time dat player wins a round, count 1 point to player 
Every time dat computer wins a round count 1 point to computer*/

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");

    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput == true;
      return choiceInLower;
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if (checkWinner(playerSelection, computerSelection) == "Player") {
      playerScore++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
      computerScore++;
    }
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("Congratulations, you win against the computer");
  } else if (playerScore == computerScore) {
    console.log("Your final score is the same as the computer");
  } else console.log("You loose against the computer");
}
game();
console.log(playerScore, computerScore);
