let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result >p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choise = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choise[randomNumber];
}

function convertToWord(letter) {
  if (letter == 'r') {
    return 'piedra';
  }
  if (letter == 'p') {
    return 'papel';
  }
  return 'tijera';
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)} gana a ${convertToWord(
    computer
  )}. Ganaste!!!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(
    () => document.getElementById(user).classList.remove('green-glow'),
    1000
  );
}
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = ` ${convertToWord(user)} pierde con ${convertToWord(
    computer
  )}. perdiste!!!`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(
    () => document.getElementById(user).classList.remove('red-glow'),
    1000
  );
}
function draw(user, computer) {
  result_p.innerHTML = ` ${convertToWord(user)} empata con ${convertToWord(
    computer
  )}. empataste!!!`;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(
    () => document.getElementById(user).classList.remove('gray-glow'),
    1000
  );
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'pp':
    case 'rr':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => {
    game('r');
  });

  paper_div.addEventListener('click', () => {
    game('p');
  });

  scissors_div.addEventListener('click', () => {
    game('s');
  });
}

main();
