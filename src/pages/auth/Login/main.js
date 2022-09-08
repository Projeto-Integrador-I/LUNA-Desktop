const enter_btn = window.document.querySelector('button.enter')
enter_btn.addEventListener('click', enter)

function enter(event) {
    event.preventDefault()

    let inputUser = document.querySelector('#login').value
    let inputPass = document.querySelector('#pass').value

    if (inputUser == 'admin' && inputPass == 'admin') {
        window.location.href ="../Home/home.html"
    } else {
        window.alert("Usuário ou senha incorreto!")
    }
}