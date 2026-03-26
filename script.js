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
            console.log("player lost, paper beats rock")
        } else {
            console.log("Player won! Rock beats Scissors")
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors"){
            console.log("Player lost. Scissors beats Paper.")
        } else if (computerChoice === "rock") {
            console.log("Player wins!, Paper beats Rock!")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock"){
            console.log("Player lost. rock beats scissors.")
        } else if (computerChoice === "paper") {
            console.log("Player wins!, scissors beats paper!")
        }
    }


}

playRound();