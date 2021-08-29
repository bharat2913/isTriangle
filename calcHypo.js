const sideInputs = document.querySelectorAll('.sideInput');
const hypotenuseBtn = document.querySelector('#hypotenuseBtn');
const output = document.querySelector('#output');

function calcSumOfSquare(a, b) {
  const someOfSquare = a * a + b * b;
  return someOfSquare;
}

function calcHypotenuse() {
  const sumOfSquares = calcSumOfSquare(
    Number(sideInputs[0].value),
    Number(sideInputs[1].value)
  );
  const hypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = 'The length of Hypotenuse is ' + hypotenuse;
}

hypotenuseBtn.addEventListener('click', calcHypotenuse);
