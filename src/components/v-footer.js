const footer = document.getElementById('footer')
footer.setAttribute('class', 'footer')

const footerLogo = document.createElement('img')
footerLogo.setAttribute('src', '../../../assets/footer_logo.png')
footerLogo.setAttribute('class', 'footer_logo')

// Pages Nav ----------------------------------------------------
const pagesDiv = document.createElement('div')

const pagesList = document.createElement('ul')
pagesList.setAttribute('class', 'footer_options')

const pagesItems = [
  { href: 'About/index.html', text: 'Sobre' },
  { href: 'Contact/index.html', text: 'Contato' },
  { href: 'TermsOfUse/index.html', text: 'Termos de Uso' },
  { href: 'PrivacyPolicy/index.html', text: 'Política de Privacidade' }
]

let pageItem, pageLink

pagesItems.forEach(item => {
  pageItem = document.createElement('li')
  pageLink = document.createElement('a')

  pageLink.setAttribute('class', 'footer_option')

  pageLink.href = `../${item.href}`
  pageLink.innerHTML = item.text

  pageItem.appendChild(pageLink)
  pagesList.appendChild(pageItem)
})

pagesDiv.append(pagesList)
// --------------------------------------------------------------

// Social Medias ------------------------------------------------
const socialsDiv = document.createElement('div')

const socialsList = document.createElement('ul')
socialsList.setAttribute('class', 'footer_socials')

const socialMedias = [
  { href: '', name: 'facebook' },
  { href: '', name: 'instagram' },
  { href: '', name: 'twitter' },
  { href: '', name: 'github' }
]

let socialMedia, socialDiv, socialIcon

socialMedias.forEach(social => {
  socialMedia = document.createElement('li')
  socialDiv = document.createElement('div')
  socialIcon = document.createElement('img')

  socialDiv.setAttribute('class', 'footer_social')

  socialIcon.setAttribute('src', `../../../assets/medias/${social.name}_logo.png`)

  socialDiv.appendChild(socialIcon)
  socialMedia.appendChild(socialDiv)
  socialsList.appendChild(socialMedia)
})

socialsDiv.appendChild(socialsList)
// --------------------------------------------------------------

// Content ------------------------------------------------------
const contentDiv = document.createElement('div')
contentDiv.setAttribute('class', 'footer_content')

const copyright = document.createElement('span')

copyright.innerHTML = 'Copyright 2022 &copy; LUNA. Todos os direitos reservados.'

contentDiv.appendChild(copyright)
// --------------------------------------------------------------

footer.appendChild(footerLogo)
footer.appendChild(pagesDiv)
footer.appendChild(socialsDiv)
footer.appendChild(contentDiv)

// Style --------------------------------------------------------
const style = document.createElement('style')

style.innerHTML = `
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 35vh;
  margin-top: 30px;

  background: #070707;
}

.footer_logo {
  padding: 0;
}

.footer_options {
  display: flex;
  align-items: row;
  list-style: none;
  color: #757575;
  gap: 21px;
  font-size: 16pt;
}

.footer_option {
  padding: 4px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-out 5ms
}

.footer_option:hover {
  cursor: pointer;
  background-color: #ffffff1c;
}

.footer_socials {
  display: flex;
  list-style: none;
  margin: 15px;
  gap: 50px;
  padding: 0;
}

.footer_social {
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_social:hover {
  cursor: pointer;
}

.footer_content {
  color: #fff;
  padding-top: 15px;
}
`

document.head.appendChild(style)
// --------------------------------------------------------------