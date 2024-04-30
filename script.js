let choices = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

const isNotValid = (str) => {
    if(!str || 
        str !== 'rock' &&
        str !== 'paper' &&
        str !== 'scissor'){
            return true;
        } else {
            return false;
        }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = choices[randomNumber];
    return computerSelection;
}

const getHumanChoice = () => {
    let humanSelection = prompt('Choose rock, paper or scissor').trim().toLowerCase();

    while(isNotValid(humanSelection)) {
        humanSelection = prompt('Please enter of the following valid answers: rock, paper or scissor').trim().toLowerCase();
    }
    if(humanSelection === 'rock' || humanSelection === 'paper' || humanSelection === 'scissor'){
        return humanSelection;
    }
}