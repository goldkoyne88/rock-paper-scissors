let roundCount = 0;
let computerScore = 0;
let tieScore = 0;
let playerScore = 0;
let playerSelection;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};


let btnR = document.querySelector('#btnRock');
btnR.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

let btnP = document.querySelector('#btnPaper');
btnP.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

let btnS = document.querySelector('#btnScissors');
btnS.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});


const div = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = 'Scoreboard:';
div.appendChild(h1);

const p1 = document.createElement('p');
p1.textContent = 'Player Wins: ' + playerScore;
div.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = 'Computer Wins: ' + computerScore;
div.appendChild(p2);

const p3 = document.createElement('p');
p3.textContent = 'Tied Games: ' + tieScore;
div.appendChild(p3);

document.body.appendChild(div);


const playRound = (userChoice, computerChoice) => {

    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        computerScore++;
        alert('The computer has won!');
      } else if (userChoice === computerChoice) {
        tieScore++;
        alert('The game is tied. Please play again.')
      } else {
        playerScore++;
        alert('The user has won!');
      };
    };
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        computerScore++;
        alert('The computer has won!');
      } else if (userChoice === computerChoice) {
        tieScore++;
        alert('The game is tied. Please play again.')  
      } else {
        playerScore++;
        alert('The user has won!');
      };
    };
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        computerScore++;
        alert('The computer has won!');
      } else if (userChoice === computerChoice) {
        tieScore++;
        alert('The game is tied. Please play again.') 
      } else {
        playerScore++;
        alert('The user has won!');
      };
    };


    p1.textContent = 'Player Score: ' + playerScore;
    p2.textContent = 'Computer Score: ' + computerScore;
    p3.textContent = 'Tied Games: ' + tieScore; 

    if(playerScore == 3) {
      document.write("Congratulations, you've won against the computer 3 to " 
         + computerScore + '.');
    } else if(computerScore == 3) {
      document.write("The computer has won this game. The score was 3 to " 
          + playerScore + '.');
    };
  };