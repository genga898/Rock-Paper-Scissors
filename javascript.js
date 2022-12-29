const buttons = document.querySelectorAll('button');
const playerText = document.querySelector(".playerResult");
const compText = document.querySelector(".compResult");
const results = document.querySelector(".finalResults");
const finalResults = document.querySelector("#results");
const compScoreBoard = document.querySelector(".compScore");
const playerScoreBoard = document.querySelector(".playerScore");
let compScore = 0;
let playerScore = 0;

buttons.forEach(button => button.addEventListener("click", () =>{
    let player = button.textContent;
    let computer = computerPlay();
    let round = playRound(player, computer)
    playerText.textContent =`Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    game(round)
}))

// Write a function that chooses between rock, paper and scissors randomly
function computerPlay(){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}

// A function that initiates a round or rock, paper, scissors and returns the result/winner
function playRound(player, computer){
    if(player == computer){
        finalResults.textContent = 'Draw';
    }
    else if((player === 'Rock' && computer === 'Paper') 
    || (player === 'Scissors' && computer === 'Rock')
    || (player === 'Paper' && computer === 'Scissors')){
       finalResults.textContent ='You lose';
       console.log(finalResults.textContent);
       return finalResults.textContent
    }
    else  if((player === 'Rock' && computer === 'Scissors') 
    || (player === 'Paper' && computer === 'Rock')
    || (player === 'Scissors' && computer === 'Paper')){
       finalResults.textContent = 'You win';
       return finalResults.textContent
    }
}

function game(play){
        play
        if(finalResults.textContent == "You lose"){
            compScore++
            compScoreBoard.textContent = `Computer Score: ${compScore}`;
        }
        else if(finalResults.textContent == "You win"){
            playerScore++
            playerScoreBoard.textContent = `Player Score: ${playerScore}`
        } 
    if(compScore == 5 ){
        results.textContent = 'Computer wins the game';
    }
    else if(playerScore == 5){
        results.textContent = 'Player wins the game';
    }
    else if(playerScore == compScore) {
        results.textContent = 'Draw'
    }
}