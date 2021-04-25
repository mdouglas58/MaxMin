const p = document.createElement('p');
document.body.appendChild(p);
const root = document.querySelector(':root');
const minFormNum = document.querySelector('#min-num');
const maxFormNum = document.querySelector('#max-num');
const color = document.querySelector('input[type="color"]');
const btn = document.query Selector('.button--random');
let newMin = 0;
let newMax = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

color.addEventListener('input', event => {
  root.style.setProperty('--color', `${event.target.value}`);
});
minFormNum.addEventListener('submit', event => {
  event.preventDefault();
  newMin = event.target.elements[0].value;
});

maxFormNum.addEventListener('submit', event => {
  event.preventDefault();
  newMax = event.target.elements[0].value;
});
btn.addEventListener('click', () => {
  const ranNumber = getRandomIntInclusive(newMin, newMax);
  p.innerHTML = ranNumber;
})
