'use strict';

let secretNumber = Math.round(Math.random() * 20);
let remainingChance = 5;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  if (remainingChance > 0) {
    if (guess == secretNumber) {
      document.querySelector('.message').innerHTML = 'you won!';
    } else if (guess > secretNumber) {
      document.querySelector('.message').innerHTML = 'too high';
      remainingChance--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').innerHTML = 'too low';
      remainingChance--;
    }
  } else {
    document.querySelector('.message').innerHTML = 'you lost';
  }
  document.querySelector('.score').innerHTML = remainingChance;
});

console.log(remainingChance);
