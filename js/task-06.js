const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', onBlur);

function onBlur(event) {
  const inputField = event.currentTarget;
  const validLength = Number(inputField.getAttribute('data-length'));
  const currentLength = inputField.value.length;

  if (currentLength === validLength) {
    if (!inputField.classList.contains('valid')) {
      inputField.classList.add('valid');
    }
    inputField.classList.remove('invalid');
  } else if (currentLength > 0) {
    if (!inputField.classList.contains('invalid')) {
      inputField.classList.add('invalid');
    }
    inputField.classList.remove('valid');
  } else {
    inputField.classList.remove('valid', 'invalid');
  }
}
