import { UserService } from '../../../services/userServices.js'

const register_btn = document.querySelector('button.register')

function validateEmail(email) {
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

  return emailRegex.test(email);
}

register_btn.addEventListener('click', (event) => {
  event.preventDefault()

  const username = document.querySelector('#user').value;
  const email = document.querySelector('#email').value;
  const name = document.querySelector('#name').value;
  const password = document.querySelector('#pass').value;

  // Validate e-mail && pass
  if (!validateEmail(email) || email == null) {
    console.log('email inválido');
  } else if (document.querySelector('#passrepeat').value != password) {
    console.log('senhas são diferentes')
  } else {
    UserService.registerUser(username, email, name, password);
  }
})