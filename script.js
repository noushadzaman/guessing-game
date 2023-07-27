'use strict';

let secretNumber = Math.round(Math.random() * 20);
let remainingChance = 5;
let highScore = 100;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').innerHTML = '⚠️ no number';
  } else {
    if (remainingChance > 0) {
      if (guess == secretNumber) {
        remainingChance--;
        highScore -= 20;
        document.querySelector('.message').innerHTML = '🏆 you won!';
        document.querySelector('.number').innerHTML = secretNumber;
        document.querySelector('.highscore').innerHTML = highScore;
        document.querySelector('body').style.backgroundColor = '#60b347';
      } else if (guess > secretNumber) {
        document.querySelector('.message').innerHTML = '📈 too high';
        remainingChance--;
        highScore -= 20;
      } else if (guess < secretNumber) {
        document.querySelector('.message').innerHTML = '📉 too low';
        remainingChance--;
        highScore -= 20;
      }
    } else {
      document.querySelector('.message').innerHTML = 'you lost';
    }
    document.querySelector('.score').innerHTML = remainingChance;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.round(Math.random() * 20);
  remainingChance = 5;
  highScore = 100;
  document.querySelector('.score').innerHTML = remainingChance;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.message').innerHTML = 'Start guessing...';
});
