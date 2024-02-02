const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const userForm = event.currentTarget;
  const { email, password } = userForm.elements;

  if (!email.value || !password.value) {
    alert(`Будь ласка, заповніть всі поля форми.`);
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    // Очистка значень полів форми
    userForm.reset();
  }
}
