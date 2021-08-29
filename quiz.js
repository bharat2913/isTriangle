const quizForm = document.querySelector('.quizForm');
const submitAnswers = document.querySelector('#submitAnswers');
const output = document.querySelector('#output');

const correctAnswers = ['90deg', 'right angled'];

function clacScore() {
  let score = 0;
  let i = 0;

  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[i]) {
      score += 1;
    }
    i += 1;
  }

  output.innerText = 'Your score is ' + score;
}

submitAnswers.addEventListener('click', clacScore);
