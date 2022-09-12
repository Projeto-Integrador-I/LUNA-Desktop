import { UserLog } from '../../../Axios/user.js'
import { authenticate } from '../../../services/userServices.js'


const enter_btn = window.document.querySelector('button.enter')
enter_btn.addEventListener('click', enter)

const url = 'http://26.2.1.64:8080/luna/'


function enter(event) {
    event.preventDefault()

    const user = new UserLog (document.querySelector('#login').value,
                           document.querySelector('#pass').value);
    console.log(user.username);
    console.log(user.password);

    authenticate(user);
}