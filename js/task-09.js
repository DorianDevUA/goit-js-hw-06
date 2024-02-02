const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorCode = document.querySelector('.color');

changeColorBtn.addEventListener('click', onClickChangeColorBtn);

function onClickChangeColorBtn() {
  const randomColor = getRandomHexColor();
  colorCode.textContent = randomColor;
  body.style.backgroundColor = `${randomColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
