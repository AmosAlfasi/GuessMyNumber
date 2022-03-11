'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNum = Math.trunc(Math.random() * 5) + 1;

let scoreNum = 20;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNum = Math.trunc(Math.random() * 5) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  //NO input

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  //correct number
  else if (guess === secretNum) {
    if (scoreNum > 0) {
      document.querySelector('.number').textContent = secretNum;
      document.querySelector('.message').textContent = 'You are corect !!!';

      document.querySelector('body').style.backgroundColor = '#D49E0E';

      document.querySelector('.number').style.width = '30rem';
      //document.querySelector('.number').style.padding = '5rem';
      // document.querySelector('.number').style.fontSize = '10rem';
    }
  }
  //guess is too high
  else if (guess > secretNum) {
    if (scoreNum > 0) {
      document.querySelector('.message').textContent = 'Too High!!!';
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent =
        'You loose,better luck next time';
    }
  }
  //guess is too low
  else if (guess < secretNum) {
    if (scoreNum > 0) {
      document.querySelector('.message').textContent = 'Too Low!!!';
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent =
        'You loose,better luck next time';
    }
  }
});
