const register_btn = document.querySelector('button.register')
import { hash } from 'bcrypt'

var fullName = document.querySelector('#name')
var user = document.querySelector('#user')
var email = document.querySelector('#email')
var pass = document.querySelector('#pass')
var repeatPass = document.querySelector('#passrepeat')

register_btn.addEventListener('click', () => {
  fullName = fullName.value
  user = user.value
  email = email.value
  pass = pass.value
  repeatPass = repeatPass.value

  if (fullName && user && email && pass && repeatPass) {
    encodePasswords(pass, repeatPass)
  } else {
    console.log('error');
  }
});

function validateEmail(email) {
  var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/im;

  return emailRegex.test(email);
}

function encodePasswords(pass, repeatPass) {
  hash(pass, 10).then((passHashed) => {
    console.log(passHashed);
  })

  hash(repeatPass, 10).then((passHashed) => {
    console.log(passHashed);
  })
}
