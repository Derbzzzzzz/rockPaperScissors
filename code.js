
let pWins = 0;
let cWins = 0;
let count = 0;


function computerPlay(){
    num = Math.floor(1 + 3 * Math.random());
    switch(num){
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == computerSelection){
        return "Its a tie! Both sides chose " + playerSelection;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
        cWins++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else{
        pWins++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } 
}

function game(){
    while(pWins < 3 && cWins < 3){
        let input = prompt('Game ' + (count + 1) + ': Enter "Rock", "Paper", or "Scissors"')
        console.log(playRound(input, computerPlay(), cWins, pWins));
        console.log("Your Win Total is: " + pWins);
        console.log("CPU win Total is: " + cWins);
        count++;
    }
}