const container = document.getElementById('container');
const colors = [
  '#ff6633', '#ffb399', '#ff33ff', '#ffff99', '#00b3e6',
  '#e6b333', '#3366e6', '#999966', '#99ff99', '#b34d4d',
  '#80b300', '#809900', '#e6b3b3', '#6680b3', '#66991a',
  '#ff99e6', '#ccff1a', '#ff1a66', '#e6331a', '#33ffcc',
  '#66994d', '#b366cc', '#4d8000', '#b33300', '#cc80cc',
  '#66664d', '#991aff', '#e666ff', '#4db3ff', '#1ab399',
  '#e666b3', '#33991a', '#cc9999', '#b3b31a', '#00e680',
  '#4d8066', '#809980', '#e6ff80', '#1aff33', '#999933',
  '#ff3380', '#cccc00', '#66e64d', '#4d80cc', '#9900b3',
  '#e64d66', '#4db380', '#ff4d4d', '#99e6e6', '#6666ff'
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();

  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1b1b1b';
  element.style.boxShadow = '0 0 2px #000000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}