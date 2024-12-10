alert("Welcome to Rock-Paper-Scissors in the console!");

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

const computerSelection = getComputerChoice();


// Playing a single round

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`It's a tie! Computer also chose ${humanChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats rock!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! Rock beats scissors!")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! Paper beats rock!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beat paper!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! Rock beats scissors!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose! Scissors beat paper!");
        computerScore++;
    }
}

let humanSelection;

const btns = document.querySelectorAll("button");


btns.forEach(button => {
    button.addEventListener('click', () => {
        humanSelection = button.textContent;
        playRound(humanSelection, computerSelection);
        const scoreBoard = document.querySelector("div");
        scoreBoard.textContent = `Score: Human ${humanScore} Computer ${computerScore}`;
        if (humanScore === 5) {
            alert("You won! Congratulations!");
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            alert("You lose...better luck next time!");
            humanScore = 0;
            computerScore = 0;
        }
    });
});












