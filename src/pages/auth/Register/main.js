const register_btn = document.querySelector('button.register')
import { UserReg } from '../../../Axios/user.js'
import { registerUser } from '../../../services/userServices.js'
/*
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
*/

register_btn.addEventListener('click', enter)

const url = 'http://26.2.1.64:8080/luna/'


function enter(event) {
    event.preventDefault()

    const user = new UserReg (document.querySelector('#user').value,
                              document.querySelector('#email').value,
                              document.querySelector('#name').value,
                              document.querySelector('#pass').value
                              );

    if (document.querySelector('#passrepeat').value != user.password) {
      //Mensagem na tela que as senhas são diferentes
      console.log('senhas são diferentes')      
    } else {
      console.log(user.login);
      console.log(user.email);
      console.log(user.name);
      console.log(user.password);

      registerUser(user);
    }
    

    
}


