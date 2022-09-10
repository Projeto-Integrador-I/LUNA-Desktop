const enter_btn = window.document.querySelector('button.enter')
enter_btn.addEventListener('click', authenticate)

const url = 'http://26.2.1.64:8080/luna/'

function authenticate(event) {
    event.preventDefault()

    const user = new User(document.querySelector('#login').value,
        document.querySelector('#pass').value);

    console.log(user.name);
    console.log(user.password);

    axios.post(url + 'authenticate', {
        username: user.name,
        password: user.password
    })
        .then(res => {
            const token = res.data.token
            console.log(token);
        })
        .catch(err => console.log(err))
}
class User {
    constructor(name, password) {
        this.name = name
        this.password = password
    }
}