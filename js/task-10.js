const controls = document.getElementById('controls');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  destroyBoxes();
  const amount = controls.firstElementChild.value;
  let markup = '';
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxColor = getRandomHexColor();
    markup += `<div style="background-color: ${boxColor}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxSize += 10;
  }

  if (markup) {
    boxes.insertAdjacentHTML('beforeend', markup);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
