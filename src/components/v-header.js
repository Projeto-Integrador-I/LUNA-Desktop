import { User } from '../model/user.js'

const url = window.location.href

const nav = document.getElementById('header')
nav.setAttribute('class', 'header')

// Logo ---------------------------------------------------------
const headerLogo = document.createElement('img')

headerLogo.setAttribute('src', '../../../assets/moon.svg')
headerLogo.setAttribute('class', 'logo')

headerLogo.onclick = () => {
  window.location.href = '../Home/index.html'
}
// --------------------------------------------------------------

// Navigation ---------------------------------------------------
const navList = document.createElement('ul')
navList.setAttribute('class', 'menu-options')

const navItems = [
  { href: 'Home/index.html', text: 'Home' },
  { href: 'Lists/index.html', text: 'Listas' },
  { href: 'Search/index.html#tudo', text: 'Pesquisas' }
]

let navItem, navLink

navItems.forEach(item => {
  navItem = document.createElement('li')
  navLink = document.createElement('a')

  navItem.setAttribute('class', 'menu-option')

  if (url.includes(item.href)) {
    navLink.setAttribute('class', 'option-active')
  }

  navLink.href = `../${item.href}`
  navLink.innerHTML = item.text

  navItem.appendChild(navLink)
  navList.appendChild(navItem)
});
// --------------------------------------------------------------

// User ---------------------------------------------------------
const perfil = document.createElement('div')
const username = document.createElement('span')
const userIcon = document.createElement('img')

perfil.setAttribute('class', 'perfil')

userIcon.setAttribute('src', '../../../assets/User.svg')

let user = new User();
const nombre = async () => {
  const name = await user.getLogin
  username.innerHTML = name
}
nombre();

perfil.appendChild(username)
perfil.appendChild(userIcon)
// --------------------------------------------------------------

nav.appendChild(headerLogo)
nav.appendChild(navList)
nav.appendChild(perfil)

// Style --------------------------------------------------------
const style = document.createElement('style')

style.innerHTML = `
.header {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10%;
  padding: 10px 100px;
  position: relative;
}

.logo {
  height: 80%;
  cursor: pointer;
}

.menu-options {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 60%;
}

.menu-option {
  margin-left: 50px;
  font-style: none;
  list-style: none;
  text-transform: uppercase;
}

.menu-option a {
  color: #717171;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  transition: color 0.3s ease-out 5ms;
}

.menu-option a:hover {
  color: #fff;
}

.option-active {
  color: #fff !important;
}

.perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  align-self: flex-end;
  position: absolute;
  top: 40px;
  right: 330px;
}

.perfil img {
  cursor: pointer;
  margin-left: 10px;
}
`

document.head.appendChild(style)
// -------------------------------------------------------------
