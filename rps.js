function computerPlay(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(computerChoice, playerChoice){

    let outcome = "";
    
    if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'scissors')){
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



function game(){

    playerScore = 0;
    computerScore = 0;
    winner = "";
    
    while ((playerScore < 5) && (computerScore < 5)){

        const playerPlay = prompt('Rock, paper, or scissors?').toLowerCase();
        let result = playRound(computerPlay(), playerPlay)  
        
        if (result == 'win'){
            playerScore += 1;
            console.log(`Player Score: ${playerScore} | ${computerScore} Computer Score`)
        }
        else if (result == 'loss'){
            computerScore += 1;
            console.log(`Player Score: ${playerScore} | ${computerScore} Computer Score`)
        }
        else{
            console.log(`Player Score: ${playerScore} | ${computerScore} Computer Score`)
            continue;
        }

        if (playerScore == 5){
            winner = 'Player'
            console.log('Player is victorious!')
        }
        else if (computerScore == 5){
            winner = 'Computer'
            console.log('Computer is victorious!')
        }
        else{
            continue;
        }

        
    }
}
game();
