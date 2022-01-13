'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// declar some fucntion to ignor repeating codes
const displayMessage = message => {
  document.querySelector('.guid').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score-value').textContent = score;
};
const displayGuessNumber = function (guessNumber) {
  document.querySelector('.guess-number').textContent = guessNumber;
};
// endi of declar fucntions

// main code of programm
document.querySelector('.check').addEventListener('click', function () {
  const enteryNumber = Number(document.querySelector('.input-number').value);
  if (!enteryNumber) {
    // when no number has been entered

    displayMessage('⛔ NO Number!!');
  } else if (enteryNumber === secretNumber) {
    // when user guess correct number
    displayMessage('🎉 Correct Number');
    document.querySelector('.container').style.backgroundColor = '#60b347';
    document.querySelector('.guess-number').style.width = '300px';
    displayGuessNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score-value').textContent = highScore;
    }
  } else if (enteryNumber !== secretNumber) {
    // when user guess incorrect number and its higher or lower than secret number

    if (score > 1) {
      displayMessage(
        enteryNumber > secretNumber ? '📈 Too High' : '📉 Too Low'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('💢 You Lost');
      displayScore(0);
      document.querySelector('.container').style.backgroundColor = '#ff6b6b';
    }
  }
});

// again button codes
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Strat guessing ...');
  score = 20;
  displayScore(score);
  document.querySelector('.container').style.backgroundColor = '#222';
  displayGuessNumber('?');
  document.querySelector('.guess-number').style.width = '150px';
  document.querySelector('.input-number').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
