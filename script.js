
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) +1;
    return x;
}


let compChoice = getComputerChoice();

console.log(compChoice);

if (compChoice === 1) {
    console.log("Rock");
} else if (compChoice === 2) {
    console.log("Paper");
} else {
    console.log("Scissors");
}


function getHumanChoice() {
    let humanChoice;
    humanChoice = window.prompt("Rock, Paper, or Scissors?");
    console.log(humanChoice)
    return humanChoice

}

getHumanChoice();


