console.log("Welcome to Rock-Paper-Scissors in the console!")

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Computer's choice

let randomChoice = Math.floor(Math.random()*3);

function getComputerChoice(){
    if ( randomChoice === 0 ) {
        return(rock);
    } else if ( randomChoice === 1 ){
        return(paper);
    } else {
        return(scissors);
    }
}