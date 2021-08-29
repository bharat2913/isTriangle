const inputs = document.querySelectorAll('.angleInput');
const isTriangleBtn = document.querySelector('#isTriangleBtn');
const output = document.querySelector('#output');

function calcSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const input1 = Number(inputs[0].value);
  const input2 = Number(inputs[1].value);
  const input3 = Number(inputs[2].value);
  const sumOfAngles = calcSumOfAngles(input1, input2, input3);

  if (sumOfAngles === 180) {
    output.innerText = 'YAY! The angles forms a triangle';
  } else {
    output.innerText = 'Ahh! The angle do not form a triangle';
  }
}

isTriangleBtn.addEventListener('click', isTriangle);
