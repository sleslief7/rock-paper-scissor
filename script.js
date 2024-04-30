let choices = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = choices[randomNumber];
}

const getHumanChoice = () => {
    let humanChoice = prompt('Choose rock, paper or scissor');
    return humanChoice;
}