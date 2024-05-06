let choices = ['rock', 'paper', 'scissor'];
let playingBtns = document.querySelector('.playingBtns');
let currentRound = document.querySelector('#currentRound');
let player = document.querySelector('#player');
let computer = document.querySelector('#computer');
let Roundresult = document.querySelector('#Roundresult');
let result = document.querySelector('#result');
let humanScore = 0;
let computerScore = 0;
let round = 0;

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

const playRound = (event, humanChoice, computerChoice) => {
    result.innerHTML = ``;
    let target = event.target;
    humanChoice = target.id;
    computerChoice = getComputerChoice();
    round++;

    if(humanChoice === computerChoice){
        logChoices(round, humanChoice, computerChoice);
        Roundresult.textContent = `It's a tie!`;
    }else if(winCombs[humanChoice] === computerChoice){
        humanScore++;
        logChoices(round, humanChoice, computerChoice);
        Roundresult.textContent = `You earned a point! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        logChoices(round, humanChoice, computerChoice);
        Roundresult.textContent = `Computer earned a point! ${computerChoice} beats ${humanChoice}`;
    }
    checkWinner();
}

const logChoices = (roundValue, playerValue, computerValue) => {
    currentRound.innerHTML = `<div> Round: ${roundValue} </div>
    <div>Player Score: ${humanScore} </div>
    <div>Computer Score: ${computerScore}</div>`;
    player.textContent = `Player: ${playerValue}`;
    computer.textContent = `Computer: ${computerValue}`;
}

const checkWinner = () => {
    if (humanScore === 5 || computerScore === 5) {
        let winner = humanScore === 5 ? "You" : "Computer";
        result.innerHTML = `<strong> ${winner} Won!!</strong>`;
        resetGame();
    }
}

const resetGame = () => {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    Roundresult.innerHTML = ``;
    player.innerHTML = ``;
    computer.innerHTML = ``;
}

playingBtns.addEventListener('click', playRound);
