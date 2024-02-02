const refs = {
  textInput: document.getElementById('name-input'),
  textOutput: document.getElementById('name-output'),
};

refs.textInput.addEventListener('input', onUpdateTextOutput);

function onUpdateTextOutput() {
  console.log(refs.textInput.value);
  refs.textOutput.textContent = refs.textInput.value || 'Anonymous';
}
