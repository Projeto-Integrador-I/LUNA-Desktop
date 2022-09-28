const register_btn = document.querySelector('button.register')
import { registerUser } from '../../../services/userServices.js'


register_btn.addEventListener('click', enter)

const url = 'http://26.2.1.64:8080/luna/'

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

function encodePasswords(pass, repeatPass) {
  hash(pass, 10).then((passHashed) => {
    console.log(passHashed);
  })

  hash(repeatPass, 10).then((passHashed) => {
    console.log(passHashed);
  })
}

*/

function validateEmail(email) {
  var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/im;  //Para emails @algo.COM
  var emailRegex2 = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/im; //Para emails @algo.COM.BR
 
  return (emailRegex.test(email) || emailRegex2.test(email));
}

function enter(event) {
    event.preventDefault()

    let username = document.querySelector('#user').value;
    let email = document.querySelector('#email').value;
    let name = document.querySelector('#name').value;
    let password = document.querySelector('#pass').value;

    console.log(" Validate EMAIL: " + validateEmail(email));
    //Validate e-mail && pass
    if(!validateEmail(email) || email == null){
      console.log('email inválido');
    } else if (document.querySelector('#passrepeat').value != password) {
      console.log('senhas são diferentes')      
    } else {
        registerUser(username, email, name, password);
    }    
}


