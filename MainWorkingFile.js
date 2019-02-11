
let roundCount = 0;
let computerScore = 0;
let tieScore = 0;
let playerScore = 0;
let userInput = '';

let getUserChoice = () => {
  userInput = window.prompt(`rock, paper or scissors`);
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' | userInput == 'scissors') {
    return userInput
  } else {
    console.log(`${userInput} is invalid. Sorry.`);
    return (userInput = window.prompt('Choose rock, paper or scissors'));
  };
};


const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    };
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    tieScore++;
    return 'The game is a tie!'
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
      computerScore++;
      return 'The computer has won!';
    } else {
      playerScore++;
      return 'The user has won!';
    };
  };
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return 'The computer has won!';  
    } else {
      playerScore++;
      return 'The user has won!';
    };
  };
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return 'The computer has won!'; 
  	  } else {
        playerScore++;
        return 'The user has won!';
      };
    };
};

const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  roundCount++;
};


function game() {
  for(let i=0; i < 5; i++) {
    playGame();
    console.log(`Round number: ${roundCount}`);
  };

  if(roundCount == 5) {
    if (computerScore > playerScore) {
      console.log(`The computer wins`);
    } else if (computerScore < playerScore) {
      console.log(`The user wins`);
    } else {
      console.log(`It looks like a tie`);
    };
  };
  };

game();