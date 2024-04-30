let choices = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;
let rounds = 5;
const winCombs = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
}

const isInvalid = (str) => (!str || (str !== 'rock' && str !== 'paper' && str !== 'scissor'));

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = choices[randomNumber];
    return computerSelection;
}

const getHumanChoice = () => {
    let humanSelection = prompt('Choose rock, paper or scissor').trim().toLowerCase();

    while(isInvalid(humanSelection)) {
        humanSelection = prompt('Please enter of the following valid answers: rock, paper or scissor').trim().toLowerCase();
    }

    return humanSelection;
}

const playRound = (humanChoice, computerChoice) => {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice === computerChoice){
        console.log(`It's a tie!`)
    }else if(winCombs[humanChoice] === computerChoice){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const logResults = () => {
    console.log(`
    Your score: ${humanScore}
    computer score: ${computerScore}
    `);
    if(computerScore === humanScore) {
        console.log(`Nobody won! It's a tie!`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game`);
    } else {
        console.log(`You won the game!`);
    }
}

const playGame = () => {
    for(let i = 0; i < rounds; i++){
        console.log(`Round: ${i + 1}`);
        playRound();
    }

    logResults();
}

playGame();