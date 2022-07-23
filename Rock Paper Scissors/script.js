const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// Get possible choices
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

// For each click we want a response to be stored
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice; //Display user choice

    generateComputerChoice(); //display computer choice
    Result();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

    if(randomNumber===1){
        computerChoice = 'rock';
    } else if(randomNumber ===  2){
        computerChoice = 'paper';
    } else{
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function Result(){
    if((userChoice === 'rock' && computerChoice === 'paper')|| (userChoice === 'paper' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'rock')){
        result = 'Computer Wins.';
    }
    else if(userChoice===computerChoice){
        result = "It's a draw.";
    }
    else{
        result = "You win!!";
    }

    resultDisplay.innerHTML = result;
}