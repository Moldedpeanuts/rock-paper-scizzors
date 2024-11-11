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

// Human's choice

let userInput = prompt("What is your choice? :");

function getHumanChoice(){
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

// Playing one round

function playRound(humanChoice, computerChoice) {
    
}