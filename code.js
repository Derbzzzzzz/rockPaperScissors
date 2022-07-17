
let pWins = 0;
let cWins = 0;
let count = 0;


let body = document.querySelector('.body');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let results = document.querySelector('.results');
let score = document.querySelector('.score');
let winner = document.querySelector('.winner');
let restart = document.createElement("button");
let buttonContainer = document.querySelector(".buttonContainer")
restart.textContent = "Play Again?";
restart.addEventListener('click', () => {
    window.location.reload();
});
restart.classList.add("restart");


rock.addEventListener('click', function(){
    playRound('rock', computerPlay());
});

paper.addEventListener('click', function(){
    playRound('paper', computerPlay());
});

scissors.addEventListener('click', function(){
    playRound('scissors', computerPlay());
});

function updateScore(){
    score.textContent = pWins + " - " + cWins;
}


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
        results.textContent = "Its a tie! Both sides chose " + playerSelection
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')){
        cWins++;
        results.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection);
    } else{
        pWins++;
        results.textContent = ("You Win! " + playerSelection + " beats " + computerSelection);
    } 
    updateScore();
    if(!(pWins < 5)){
        winner.textContent = "Congratualations! You beat the computer due to sheer luck!";
        rock.replaceWith(rock.cloneNode(true));
        paper.replaceWith(paper.cloneNode(true));
        scissors.replaceWith(scissors.cloneNode(true));
        buttonContainer.appendChild(restart);
    } else if(!(cWins < 5)){
        winner.textContent = "Humans are doomed; the CPU was victorious.";
        rock.replaceWith(rock.cloneNode(true));
        paper.replaceWith(paper.cloneNode(true));
        scissors.replaceWith(scissors.cloneNode(true));
        buttonContainer.appendChild(restart);
    } 

}


/* function game(){
    while(pWins < 3 && cWins < 3){
        let input = prompt('Game ' + (count + 1) + ': Enter "Rock", "Paper", or "Scissors"')
        console.log(playRound(input, computerPlay()));
        console.log("Your Win Total is: " + pWins);
        console.log("CPU win Total is: " + cWins);
        count++;
    }
} */