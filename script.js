function getComputerMove(){
    const computerMoves = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*Math.floor(3));

    return computerMoves[index];
}

function animate(){
    // get user and computer moves
    const userMove = this.innerHTML;
    const computerMove = getComputerMove();

    // grab the dom nodes for manipulation
    const computerHand = document.querySelector('.computer img');
    const userHand = document.querySelector('.user img');

    // rock paper scissors animation starts with rock
    computerHand.setAttribute('src', 'assets/images/Rock.png');
    userHand.setAttribute('src', 'assets/images/Rock.png');

    // add the animation
    computerHand.classList.add('animate')
    userHand.classList.add('animate');

    // set the callback function
    setTimeout(function(){
        computerHand.setAttribute('src', `assets/images/${computerMove}.png`);
        userHand.setAttribute('src', `assets/images/${userMove}.png`)

        // remove class in order to re-enable animation in future turns
        computerHand.classList.remove('animate');
        userHand.classList.remove('animate');

        // calculate the score after
        displayGameResult(userMove, computerMove)
    }, 2250);
    
  
}

function displayGameResult(userMove, computerMove){
    const loseMessage = "You lose!"
    const winMessage = "You win!"
    const tieMessage = "It's a tie!"

    const playerScoreNode = document.querySelector('.user.score');
    const computerScoreNode = document.querySelector('.computer.score');
    const matchResults = document.querySelector('.match-results');

    const playerScore = parseInt(playerScoreNode.innerHTML);
    const computerScore = parseInt(computerScoreNode.innerHTML);
    
    switch(userMove){
        case 'Rock':
            if(computerMove === 'Scissors'){
                playerScoreNode.innerHTML = playerScore + 1;
                matchResults.innerHTML = winMessage;
                matchResults.style.color = 'gold';
            } else if (computerMove === 'Paper'){
                computerScoreNode.innerHTML = computerScore + 1;
                matchResults.innerHTML = loseMessage;
                matchResults.classList.add('lose');
                matchResults.style.color = 'red';
            } else {
                matchResults.innerHTML = tieMessage;
                matchResults.classList.add('tie');
                matchResults.style.color = 'black';
            }
            break;  
        case 'Scissors':
            if(computerMove === 'Paper'){
                playerScoreNode.innerHTML = playerScore + 1;
                matchResults.innerHTML = winMessage;
                matchResults.classList.add('win');
                matchResults.style.color = 'gold';     
            } else if (computerMove === 'Rock'){
                computerScoreNode.innerHTML = computerScore + 1;
                matchResults.innerHTML = loseMessage;
                matchResults.classList.add('lose');
                matchResults.style.color = 'red';
            } else {
                matchResults.innerHTML = tieMessage;
                matchResults.classList.add('tie');
                matchResults.style.color = 'black'
            }
            break;
        case 'Paper':
            if(computerMove === 'Rock'){
                playerScoreNode.innerHTML = playerScore + 1;
                matchResults.innerHTML = winMessage;
                matchResults.classList.add('win');
                matchResults.style.color = 'gold'; 
            } else if (computerMove === 'Scissors'){
                computerScoreNode.innerHTML = computerScore + 1;
                matchResults.innerHTML = loseMessage;
                matchResults.classList.add('lose');
                matchResults.style.color = 'red';
            } else {
                matchResults.innerHTML = tieMessage;
                matchResults.classList.add('tie');
                matchResults.style.color = 'black';
            }
    }   

}

document.querySelector(".option.rock").addEventListener('click', animate);
document.querySelector(".option.paper").addEventListener('click', animate);
document.querySelector(".option.scissors").addEventListener('click', animate);


