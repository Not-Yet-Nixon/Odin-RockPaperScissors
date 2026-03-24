console.log("hello world!!!");

function getComputerChoice () {
    let x = Math.floor(Math.random() * 3) +1;
    console.log(x);
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