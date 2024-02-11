let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(userChoice) {  
  const computerChoice = pickComputerChoice();
  let result;

  if (userChoice === computerChoice) {
    result = 'Tie.';

  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      result = 'You lose.'  
    } else {
      result = 'You win.';
    }

  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You win.';
    } else {
      result = 'You lose.';
    }

  } else {
    if (computerChoice === 'rock') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.user-move')
    .innerHTML = 'You';

  document.querySelector('.computer-move')
    .innerHTML = 'Computer';

  document.querySelector('.computer-img')
    .src = `${computerChoice}.jpg`;

  document.querySelector('.user-img')
    .src = `${userChoice}.jpg`
  
}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerChoice() {
  const randomNumber = Math.random();
  let computerChoice = '';

  if (randomNumber >= 0 && randomNumber< 1/3){
    computerChoice = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
}