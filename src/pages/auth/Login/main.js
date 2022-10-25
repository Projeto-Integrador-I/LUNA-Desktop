import { UserService } from '../../../services/userServices.js'

const enter_btn = window.document.querySelector('button.enter')

enter_btn.addEventListener('click', async (event) => {
  event.preventDefault()

  const login = document.querySelector('#login').value;
  const password = document.querySelector('#pass').value;

  const validation = await UserService.authenticate(login, password);

  if (validation) {
    window.location.replace("../../app/Home/home.html");
  } else {
    console.log("Não autenticado");
  }
})