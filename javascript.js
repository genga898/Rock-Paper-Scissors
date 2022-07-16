  // Write a function that chooses between rock, paper and scissors randomly
  function computerPlay(){
    let choice = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}

// A function that initiates a round or rock, paper, scissors and returns the result/winner
function playRound(computerSelection, playerSelection){
    if((playerSelection === 'Rock' || playerSelection ==='ROCK' || playerSelection === 'rock') && computerSelection === 'Rock'){
        return 'It is a tie';
    } 
    else if((playerSelection === 'Rock' || playerSelection ==='ROCK' || playerSelection === 'rock') && computerSelection === 'Paper'){
        return 'You lost Paper beats rock';
    }
    else if((playerSelection === 'Rock' || playerSelection ==='ROCK' || playerSelection === 'rock') && computerSelection === 'Scissors'){
        return 'You win rock beats scissors'
    }
    else if((playerSelection === 'PAPER' || playerSelection ==='Paper' || playerSelection === 'paper') && computerSelection === 'Rock'){
        return 'You win paper beats rock';
    }
    else if ((playerSelection === 'PAPER' || playerSelection ==='Paper' || playerSelection === 'paper') && computerSelection === 'Paper'){
        return 'It is a tie';
    }
    else if((playerSelection === 'PAPER' || playerSelection ==='Paper' || playerSelection === 'paper') && computerSelection === 'Scissors'){
        return 'You lost scissors beats paper';
    }
    else if ((playerSelection === 'SCISSORS' || playerSelection ==='Scissors' || playerSelection === 'scissors') && computerSelection === 'Rock'){
        return 'You lost rock beats scissors';
    }
    else if((playerSelection === 'SCISSORS' || playerSelection ==='Scissors' || playerSelection === 'scissors') && computerSelection === 'Paper'){
        return 'You win scissors beats paper';
    }
    else if((playerSelection === 'SCISSORS' || playerSelection ==='Scissors' || playerSelection === 'scissors') && computerSelection === 'Scissors'){
        return 'It is a tie';
    }
}

// A function game that records the winner of each round and outputs the winner at the end
function game(){
    let playerScore = 0;
    let compScore = 0;
    for(let i=0; i<5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt('Choose: Rock, Paper or Scissors. ');
        let result  = playRound(computerSelection, playerSelection);
            if(result == 'You win paper beats rock' || result =='You win scissors beats paper' || result == 'You win rock beats scissors'){
                playerScore = playerScore + 1;
            }
            else if(result == 'You lost scissors beats paper' || result == 'You lost rock beats scissors' || result == 'You lost Paper beats rock'){
                compScore = compScore + 1;
            }
            else if(result ==='It is a tie'){
                compScore = compScore;
                playerScore = playerScore;
            }
    }
    if(compScore > playerScore){
        return `You lost: Computer Score ${compScore}, Player Score ${playerScore}`;
    }
    else if(compScore < playerScore){
        return `You won: Computer Score ${compScore}, Player Score ${playerScore}`;
    }
    else if(playerScore == compScore){
        return `You tied: Computer Score ${compScore}, Player Score ${playerScore}`;
    }
}
console.log(game())