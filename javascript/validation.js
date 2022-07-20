const form = document.forms[0];
const email = form.elements[1];
const button = document.querySelector('button[type=submit]');
const msg = document.querySelector('form > small');
button.addEventListener('click', (event) => {
  const { value } = email;
  const loweredValue = value.toLowerCase();
  if (value !== loweredValue) {
    event.preventDefault();
    msg.style.color = '#ffa5a5';
    msg.innerHTML = 'Please make sure you are only entering lowercase characters in the Email field';
  }
});
