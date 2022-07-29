const buttons = document.querySelectorAll('button');
const playerText = document.querySelector(".playerResult");
const compText = document.querySelector(".compResult");
const results = document.querySelector(".result");
const finalResults = document.querySelector("#results");
let compScore = 0;
let playerScore = 0;
let player;
let computer;

buttons.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    computer = computerPlay();
    playerText.textContent =`Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    results.textContent = `${playRound(player, computer)}`;
}))

// Write a function that chooses between rock, paper and scissors randomly
function computerPlay(){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}

// A function that initiates a round or rock, paper, scissors and returns the result/winner
function playRound(player, computer){
    const compScoreBoard = document.querySelector(".compScore");
    const playerScoreBoard = document.querySelector(".playerScore");
    if(player == computer){
        finalResults.textContent = 'Draw';
    }
    else if((player === 'Rock' && computer === 'Paper') 
    || (player === 'Scissors' && computer === 'Rock')
    || (player === 'Paper' && computer === 'Scissors')){
       compScore++;
       finalResults.textContent ='You lose';
       compScoreBoard.textContent = `Computer Score: ${compScore}`;
    }
    else  if((player === 'Rock' && computer === 'Scissors') 
    || (player === 'Paper' && computer === 'Rock')
    || (player === 'Scissors' && computer === 'Paper')){
       playerScore++;
       finalResults.textContent = 'You win';
       playerScoreBoard.textContent = `Player Score: ${playerScore}`
    }
}

function game(){
    playRound(player, computer)
    if(compScore == 5 ){
        const finalResult = document.querySelector("finalResults");
        finalResult.textContent = 'Computer wins the game';
    }
    else if(playerScore == 5){
        const finalResult = document.querySelector("finalResults");
        finalResult.textContent = 'Player wins the game';
    }
}

game()