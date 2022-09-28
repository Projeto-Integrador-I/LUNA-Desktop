import { authenticate } from '../../../services/userServices.js'

const enter_btn = window.document.querySelector('button.enter')
enter_btn.addEventListener('click', enter)

const url = 'http://26.2.1.64:8080/luna/'

async function enter(event) {
    event.preventDefault()

    let login = document.querySelector('#login').value;
    let password = document.querySelector('#pass').value;

    let validation = await authenticate(login,password);
    
    if(validation){
        
        window.location.replace("../../app/Home/home.html");
        
    } else {
        console.log("Não autenticado");
    }
}