'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
alert('please guess any number in range 1 to 20, and write it in the box:');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    alert('enter a number between 1 and 20 inside the box please');
  }
  // When the player Wins
  else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent =
      'Correct Guess 🎉 You Won!';
    // show the secret number on the screen
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent =
        'You Lost 🙁 Press Again';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is Low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent =
        'You Lost 🙁 Press Again';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Start new game by pressing Again Button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  //create new secretnumber after pressing again
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = 'rgb(20, 3, 3)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  //reset score to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
