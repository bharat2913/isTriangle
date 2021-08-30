const sideInputs = document.querySelectorAll('.sideInput');
const areaBtn = document.querySelector('#areaBtn');
const output = document.querySelector('#output');

areaBtn.addEventListener('click', () => {
  const base = sideInputs[0].value;
  const height = sideInputs[1].value;
  const areaOfTriangle = (base * height) / 2;

  output.innerText = 'The Area of Triangle is ' + areaOfTriangle;
});
