'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

let scoreNum = 20;

let flag = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';

  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';

  displayMessage('Start Guessing...');

  document.querySelector('.number').style.width = '15rem';

  scoreNum = 20;
  document.querySelector('.score').textContent = scoreNum;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //NO input

  if (!guess || guess < 0 || guess > 20) {
    displayMessage('Not a Valid Number');
  }
  //correct number
  else if (guess === secretNum && flag === 0) {
    if (scoreNum > 0) {
      flag = 1;
      document.querySelector('.number').textContent = secretNum;

      displayMessage('You are corect !!!');
      document.querySelector('body').style.backgroundColor = '#D49E0E';

      document.querySelector('.number').style.width = '30rem';

      if (scoreNum > highScore) {
        highScore = scoreNum;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
  //guess is too high
  else if (guess !== secretNum && flag === 0) {
    if (scoreNum > 1) {
      displayMessage(guess < secretNum ? 'Too low' : 'Too High!!!');

      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      flag = 1;
      document.querySelector('.score').textContent = 0;

      displayMessage('You loose,better luck next time');
      document.querySelector('body').style.backgroundColor = '#D44031';
    }
  } else {
    displayMessage('Press The Again Button  for a new game');
  }
});
