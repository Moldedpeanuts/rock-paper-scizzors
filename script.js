console.log("Welcome to Rock-Paper-Scissors in the console!");

let humanScore = 0;
let computerScore = 0;


// Computer's choice
const rock = "rock";
const paper = "paper";
const scissors = "scissors";


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return (rock);
    } else if (randomChoice === 1) {
        return (paper);
    } else {
        return (scissors);
    }
}

// Playing a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Computer also chose ${humanChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat paper!");
        computerScore++;
    }
}

const computerSelection = getComputerChoice();
const humanSelection = btn.addEventListener('click', playRound);
const btn = document.querySelectorAll("button");



console.log(`You: ${humanScore} Computer: ${computerScore}`);







