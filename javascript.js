const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');

// Write a function that chooses between rock, paper and scissors randomly
function computerPlay(){
    let choice = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}

// A function that initiates a round or rock, paper, scissors and returns the result/winner
function playRound(playerSelection){
    let computerSelection = computerPlay();
    let result = "x";
    if((playerSelection == 'rock' && computerSelection == 'rock') 
    || (playerSelection == 'paper' && computerSelection == 'paper')
    || (playerSelection == 'scissors' && computerSelection == 'scissors')){
        result = 'It\'s a tie';
    }
    else if((playerSelection == 'rock' && computerSelection == 'paper') 
    || (playerSelection == 'scissors' && computerSelection == 'rock'
    || (playerSelection == 'paper' && computerSelection == 'scissors'))){
        result = 'You lose'
    }
    else  if((playerSelection == 'rock' && computerSelection == 'scissors') 
    || (playerSelection == 'paper' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'paper')){
        result = 'You win';
    }

    document.getElementById("results").innerHTML = result;
    return
}

// A function game that records the winner of each round and outputs the winner at the end
function game(result){
    let playerScore = 0;
    let compScore = 0;
    let finalResult = '';
    for(let i=0; i<5; i++){
        if(result ==='It\'s a tie'){
            compScore = compScore;
            playerScore = playerScore;
        }
       else if(result == 'You lost'){
           compScore += 1;
        }
        else if(result == 'You win' ){
            playerScore += 1;
        }
    }
    if(compScore > playerScore){
       finalResult = `You lost: Computer Score ${compScore}, Player Score ${playerScore}`;
    }
    else if(compScore < playerScore){
        finalResult = `You won: Computer Score ${compScore}, Player Score ${playerScore}`;
    }
    else if(playerScore == compScore){
        finalResult = `You tied: Computer Score ${compScore}, Player Score ${playerScore}`;
    }

    document.getElementById("results").innerHTML = finalResult;
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
       let result = playRound(button.value);
        game(result);
    })
})
