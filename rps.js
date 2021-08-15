function computerPlay(){
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(computerChoice, playerChoice){

    let outcome = "";

    if ((playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'scissors')){
            outcome = `You win - ${playerChoice} beats ${computerChoice}.`
        }
        else{
            outcome = 'shit'
        }
        return outcome
    }

    const playerSelection = 'rock'
    console.log(playRound(computerPlay(), playerSelection)) 