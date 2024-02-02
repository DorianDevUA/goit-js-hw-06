const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', onTextSizeControl);

function onTextSizeControl(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
