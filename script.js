//DOM Manipulation TEST
const titleText = document.querySelector(".title-text");
titleText.style.color = "purple";
const descriptionText = document.querySelector(".description-text");
descriptionText.style.color = "purple";
const counters = document.querySelector(".titles");
counters.style.color = "purple";

const imgRock = document.querySelector(".rock");
imgRock.style.border = "2px solid green";
imgRock.style.borderRadius = "25px";
imgRock.style.backgroundColor = "lightgreen";

const imgPaper = document.querySelector(".paper");
imgPaper.style.border = "2px solid green";
imgPaper.style.borderRadius = "25px";
imgPaper.style.backgroundColor = "lightgreen";

const imgScissors = document.querySelector(".scissors");
imgScissors.style.border = "2px solid green";
imgScissors.style.borderRadius = "25px";
imgScissors.style.backgroundColor = "lightgreen";

const playerCount = document.querySelector(".player-count");
const computerCount = document.querySelector(".computer-count");
const textNode0 = document.createTextNode(" 0");
const textNode1A = document.createTextNode(" 1");
const textNode1B = document.createTextNode(" 1");
const textNode2A = document.createTextNode(" 2");
const textNode2B = document.createTextNode(" 2");
const textNode3A = document.createTextNode(" 3");
const textNode3B = document.createTextNode(" 3");
const textNode4A = document.createTextNode(" 4");
const textNode4B = document.createTextNode(" 4");
const textNode5A = document.createTextNode(" 5");
const textNode5B = document.createTextNode(" 5");

const newText2 = " 2";

const options = ["rock", "paper", "scissors"];

let points = [1, 2, 3, 4, 5];

let userScore = 0;
let computerScore = 0;
let userChoice = [];
let computerChoice = [];

function clickRock() {
  userChoice.length = 0;
  userChoice.push("rock");
}
function clickPaper() {
  userChoice.length = 0;
  userChoice.push("paper");
  console.log(userChoice);
}
function clickScissors() {
  userChoice.length = 0;
  userChoice.push("scissors");
  console.log(userChoice);
}
const childrenNode = computerCount.children;
function result() {
  if (
    (userChoice.includes("rock") && computerChoice.includes("rock")) ||
    (userChoice.includes("scissors") && computerChoice.includes("scissors")) ||
    (userChoice.includes("paper") && computerChoice.includes("paper"))
  ) {
    userScore += 1;
    computerScore += 1;
    computerCount.appendChild(textNode1A);
    playerCount.appendChild(textNode1B);
    if (userScore === 2 && computerScore === 2) {
      playerCount.removeChild(playerCount.lastChild);
      computerCount.removeChild(computerCount.lastChild);
      playerCount.appendChild(textNode2A);
      computerCount.appendChild(textNode2B);
      console.log(userScore, computerScore, childrenNode);
    } else if (userScore === 3 && computerScore === 3) {
      playerCount.appendChild(textNode3A);
      computerCount.appendChild(textNode3B);
      console.log(userScore, computerScore, childrenNode);
    } else if (userScore === 4 && computerScore === 4) {
      playerCount.appendChild(textNode4A);
      computerCount.appendChild(textNode4B);
      console.log(userScore, computerScore, childrenNode);
    } else if (userScore === 5 && computerScore === 5) {
      playerCount.appendChild(textNode5A);
      computerCount.appendChild(textNode5B);
      console.log(userScore, computerScore, childrenNode);
    }
  }
}
imgRock.addEventListener("click", getComputerChoice);
imgRock.addEventListener("click", clickRock);
imgRock.addEventListener("click", result);
imgPaper.addEventListener("click", getComputerChoice);
imgPaper.addEventListener("click", clickPaper);
imgPaper.addEventListener("click", result);
imgScissors.addEventListener("click", getComputerChoice);
imgScissors.addEventListener("click", clickScissors);
imgScissors.addEventListener("click", result);

const game = document.querySelector(".choicesImg");

function getComputerChoice() {
  let index = Math.floor(Math.random() * options.length);
  let randomElement = options[index];

  if (randomElement === "rock") {
    let img = document.createElement("img");
    img.className = "computerImageRock";
    img.src = "./Imgs/Rock.png";
    if (game.hasChildNodes()) {
      game.removeChild(game.firstChild);
    }
    game.appendChild(img);
    computerChoice.length = 0;
    computerChoice.push("rock");
    console.log(computerChoice);
    const computerImgRock = document.querySelector(".computerImageRock");
    computerImgRock.style.border = "2px solid red";
    computerImgRock.style.borderRadius = "25px";
    computerImgRock.style.backgroundColor = "#FFCCCB";
  } else if (randomElement === "paper") {
    let img = document.createElement("img");
    img.className = "computerImagePaper";
    img.src = "./Imgs/Paper.png";
    if (game.hasChildNodes()) {
      game.removeChild(game.firstChild);
    }
    game.appendChild(img);
    computerChoice.length = 0;
    computerChoice.push("paper");
    console.log(computerChoice);
    const computerImgPaper = document.querySelector(".computerImagePaper");
    computerImgPaper.style.border = "2px solid red";
    computerImgPaper.style.borderRadius = "25px";
    computerImgPaper.style.backgroundColor = "#FFCCCB";
  } else if (randomElement === "scissors") {
    let img = document.createElement("img");
    img.className = "computerImageScissors";
    img.src = "./Imgs/Scissors.png";
    if (game.hasChildNodes()) {
      game.removeChild(game.firstChild);
    }
    game.appendChild(img);
    computerChoice.length = 0;
    computerChoice.push("scissors");
    console.log(computerChoice);
    const computerImgScissors = document.querySelector(
      ".computerImageScissors"
    );
    computerImgScissors.style.border = "2px solid red";
    computerImgScissors.style.borderRadius = "25px";
    computerImgScissors.style.backgroundColor = "#FFCCCB";
  }
  return randomElement;
}
//Function which declares the selection of the computer choice
/*const options = ["rock", "paper", "scissors"];
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
/*
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
*/
/*
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

*/
