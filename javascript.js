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
        return 'You lose Paper beats rock';
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
        return 'You lose scissors beat paper';
    }
    else if ((playerSelection === 'SCISSORS' || playerSelection ==='Scissors' || playerSelection === 'scissors') && computerSelection === 'Rock'){
        return 'You lose rock beats scissors';
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

}
let computerSelection = computerPlay();
let playerSelection = 'PAPER';
console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));