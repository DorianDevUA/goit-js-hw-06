const refs = {
  decBtn: document.querySelector('button[data-action="decrement"]'),
  incBtn: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector('#value'),
};

let counterValue = 0;

refs.decBtn.addEventListener('click', onClickDecBtn);
refs.incBtn.addEventListener('click', onClickIncBtn);

function onClickDecBtn() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function onClickIncBtn() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}
