function computerPlay(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(computerChoice, playerChoice){

    let outcome = "";
    
    if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')){
            outcome = 'win'
            console.log(`You win - ${playerChoice} beats ${computerChoice}.`)
        }
        else if(playerChoice == computerChoice){
            outcome = 'draw'
            console.log(`It's a draw - you both picked ${playerChoice}.`)
        }
        else{
            outcome = 'loss'
            console.log(`You lose - ${playerChoice} loses to ${computerChoice}.`)
        }
        return outcome
    }

humanScore = 0;
computerScore = 0;

const rockButton = document.querySelector('#btn-rock')
rockButton.addEventListener('click', () => {
    let userChoice = 'rock'
    outcome = playRound(computerPlay(), userChoice);
    if (outcome == 'win'){
        humanScore += 1;
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    else if (outcome == 'loss'){
        computerScore += 1;
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    else{
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    if ((humanScore == 5) || (computerScore == 5)){
        checkWinner(humanScore, computerScore)
    };
});

const paperButton = document.querySelector('#btn-paper')
paperButton.addEventListener('click', () => {
    let userChoice = 'paper'
    outcome = playRound(computerPlay(), userChoice);
    if (outcome == 'win'){
        humanScore += 1;
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    else if (outcome == 'loss'){
        computerScore += 1;
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    else{
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    if ((humanScore == 5) || (computerScore == 5)){
        checkWinner(humanScore, computerScore)
    };
});

const scissorsButton = document.querySelector('#btn-scissors')
scissorsButton.addEventListener('click', () => {
    let userChoice = 'scissors'
    outcome = playRound(computerPlay(), userChoice);
    if (outcome == 'win'){
        humanScore += 1;
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    else if (outcome == 'loss'){
        computerScore += 1;
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    else{
        console.log(`Player Score: ${humanScore} | ${computerScore} Computer Score`)
    }
    if ((humanScore == 5) || (computerScore == 5)){
        checkWinner(humanScore, computerScore)
    };
});

function checkWinner(playerPoints, computerPoints){
    if (playerPoints > computerPoints){
        alert('You win!')
    }
    else if (computerPoints > playerPoints){
        alert('You lose!')
    }
};

