const enter_btn = window.document.querySelector('button.enter')
enter_btn.addEventListener('click', enter)

//import { getUserToken } from '@/Controllers/userController.js'
//import { User } from '@/Axios/user.js'
//url='http://26.2.1.64:8080/luna/'

enter_btn.addEventListener('click', authenticate)

function authenticate(event) {
    event.preventDefault()

    const user = new User (document.querySelector('#login').value,
                           document.querySelector('#pass').value);

    console.log(user.name);
    console.log(user.password);

    const userJson = JSON.parse('{"username":"' + user.name + '","password":"' + user.password + '"}')

    console.log(userJson);

    axios.post(url + 'authenticate', userJson)
         .then(res => { 
             console.log(res); 
         })
         .catch(err => console.log(err))

    if (getUserToken(user)) {
        
        console.log("autenticação feita com sucesso")
    } else {
        window.alert("Usuário ou senha incorreto!")
    }        
}

function getUserToken(user){
    axios.get(url+authenticate,JSON.parse())
    .then(res =>  { console.log(res); } )
    .catch(err => console.log(err))
}

class User{
    constructor(name,password) {
        this.name = name
        this.password = password
    }
}