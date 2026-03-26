// computer choice logic
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) +1;
    if (x === 1) return "rock";
    if (x === 2) return "paper";
    if (x === 3) return "scissors";
    return x;
}

let computerChoice = getComputerChoice();

// Player choice logic
function getHumanChoice() {
    let humanChoice;
    humanChoice = window.prompt("Rock, Paper, or Scissors?");
    return humanChoice.trim().toLocaleLowerCase();

}

// Game round logic

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log("computer threw " + computerChoice);
    console.log("player threw " + humanChoice);

    if (humanChoice === computerChoice) {
        console.log("its a tie");
    } else if (humanChoice === "rock")
        { if (computerChoice === "paper") {
            computerScore++;
            console.log("player lost, paper beats rock")
        } else {
            playerScore++;
            console.log("Player won! Rock beats Scissors")
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            computerScore++;
            console.log("Player lost. Scissors beats Paper.")
        } else if (computerChoice === "rock") {
            playerScore++;
            console.log("Player wins!, Paper beats Rock!")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock"){
            computerScore++;
            console.log("Player lost. rock beats scissors.")
        } else if (computerChoice === "paper") {
            playerScore++;
            console.log("Player wins!, scissors beats paper!")
        }
    }
console.log("player score: " + playerScore);
console.log("Computer scrore: " + computerScore);

}




function playGame(){

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > computerScore){
        console.log("Player won!!!! Congratulations");
    } else if (playerScore < computerScore) {
        console.log("The computer won. Better luck next time...");
    } else {
        console.log("Its a tie. No one won.");
    }
}

playGame();