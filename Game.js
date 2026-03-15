let playerScore=0;
let computerScore=0;
function pickMove(playerChoice) {
const randomNumber= Math.random();
let computerMove;

    if(randomNumber >=0 && randomNumber < 1/3){
        computerMove="rock";

      
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove="paper";
        
    }else {
        computerMove="scissor";
    
    }
     document.getElementById('computerMove').innerText= computerMove;
    let result;
     if(computerMove === playerChoice){
        result=`it's a draw!`;

      
    }else if(computerMove === 'rock' && playerChoice === 'paper'){
        result=`You Win!`;
        playerScore++;
    }else if(computerMove === 'scissor' && playerChoice === 'paper'){
        result=`You Lose!`;
        computerScore++;
    }
    else if(computerMove === 'rock' && playerChoice === 'scissor'){
        result=`You Lose!`;
        computerScore++;
    }
    else if(computerMove === 'paper' && playerChoice === 'scissor'){
        result=`You Win!`;
         playerScore++;
    }else if(computerMove === 'paper' && playerChoice === 'rock'){
        result="You Lose!"
        computerScore++;
    }else if(computerMove === 'scissor' && playerChoice === 'rock'){
        result = "You Win!";
        playerScore++;

    }

     document.getElementById('result').innerText= result;
     document.getElementById('playerscore').innerText= playerScore;
     document.getElementById('computerscore').innerText= computerScore;
}
function restartGame() {
    playerScore=0;
    computerScore=0;
   document.getElementById('result').innerText= '';
   document.getElementById('computerMove').innerText= '';

     document.getElementById('playerscore').innerText= playerScore;
     document.getElementById('computerscore').innerText= computerScore;
}
