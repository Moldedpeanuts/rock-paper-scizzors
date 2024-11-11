console.log("Welcome to Rock-Paper-Scissors in the console!")

// Playing 5 rounds

function playGame() {

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    // Computer's choice

    let randomChoice = Math.floor(Math.random() * 3);

    function getComputerChoice() {
    if (randomChoice === 0) {
        return (rock);
    } else if (randomChoice === 1) {
        return (paper);
    } else {
        return (scissors);
    }
    }

    // Human's choice

    let userInput = prompt("What is your choice? :");

    function getHumanChoice() {
    return userInput.toLowerCase();
    }


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a tie! Computer also chose rock");
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie! Computer also chose paper");
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a tie! Computer also chose scissors")
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
            humanScore++;
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!")
            computerScore++;
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat paper!");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beat paper!");
            computerScore++;
            console.log("You: " + "" +`${humanScore}` + "Computer: " + `${computerScore}`);
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();



