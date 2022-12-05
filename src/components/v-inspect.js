import { getListSelector } from "./v-listSelector.js"
import { Redirect } from './v-redirect.js';

let actualMedia;

const modal_midia = document.getElementById('modal_midia')
const modal_content = document.createElement('div')
const modal_title = document.createElement('div')
const modal_info = document.createElement('div')
const modal_poster = document.createElement('img')
const modal_specific_info = document.createElement('div')
const specific_info_1 = document.createElement('div')
const box_info_1 = document.createElement('h5')
const specific_info_2 = document.createElement('div')
const box_info_2 = document.createElement('h5')
const specific_info_3 = document.createElement('div')
const box_info_3 = document.createElement('h5')
const redirect = document.createElement('div')
const div_of_btns = document.createElement('div')
const modal_extra_info = document.createElement('div')
const box_info_4 = document.createElement('h5')
const modal_div_button = document.createElement('div')
const modal_return = document.createElement('button')
const return_img = document.createElement('img')
const modal_add = document.createElement('div')
const modal_add_to_list = document.createElement('button')
const redirect_btn = document.createElement('button');

modal_content.setAttribute('id', 'modal_content')

modal_title.setAttribute('id', 'modal_title')

modal_info.setAttribute('id', 'modal_info')

modal_poster.setAttribute('id', 'modal_poster')

modal_info.appendChild(modal_poster)

modal_specific_info.setAttribute('id', 'modal_specific-info')

specific_info_1.setAttribute('id', 'specific_info_1')

box_info_1.setAttribute('id', 'box_info_1')

specific_info_1.appendChild(box_info_1)
modal_specific_info.appendChild(specific_info_1)

specific_info_2.setAttribute('id', 'specific_info_2')

box_info_2.setAttribute('id', 'box_info_2')

specific_info_2.appendChild(box_info_2)
modal_specific_info.appendChild(specific_info_2)

specific_info_3.setAttribute('id', 'specific_info_3')
box_info_3.setAttribute('id', 'box_info_3')

specific_info_3.appendChild(box_info_3)
modal_specific_info.appendChild(specific_info_3)

modal_info.appendChild(modal_specific_info)

redirect.setAttribute('id', 'redirect')
redirect.innerHTML = "Onde consumir: "

modal_info.appendChild(redirect)

redirect_btn.setAttribute('id', 'redirect_btn')

div_of_btns.setAttribute('id', 'div_of_btns')

div_of_btns.appendChild(redirect_btn)

modal_info.appendChild(div_of_btns)

modal_extra_info.setAttribute('id', 'modal_extra-info')

box_info_4.setAttribute('id', 'box_info_4')

modal_extra_info.appendChild(box_info_4)

modal_info.appendChild(modal_extra_info)

modal_div_button.setAttribute('id', 'modal_div-button')

return_img.setAttribute('src', '../../../assets/return.svg')

modal_return.setAttribute('id', 'modal_return')
modal_return.setAttribute('class', 'return')

modal_return.appendChild(return_img)

modal_div_button.appendChild(modal_return)
modal_info.appendChild(modal_div_button)

modal_add.setAttribute('id', 'modal_add')

modal_add_to_list.setAttribute('id', 'modal_add-to-list')
modal_add_to_list.innerHTML = 'Adicionar a lista'

modal_add.appendChild(modal_add_to_list)

modal_content.appendChild(modal_title)
modal_content.appendChild(modal_info)
modal_content.appendChild(redirect)
modal_content.appendChild(div_of_btns)
modal_content.appendChild(modal_extra_info)
modal_content.appendChild(modal_div_button)
modal_content.appendChild(modal_add)

modal_midia.appendChild(modal_content)
modal_midia.style.display = 'none'

let redirections = new Redirect;

modal_add_to_list.onclick = async () => {
  const newModal = await getListSelector(actualMedia)

  modal_midia.appendChild(newModal)
}

export function movieInfo(movie) {
  actualMedia = {
    title: movie.title,
    description: movie.overView,
    type: movie.type,
    coverLink: movie.coverLink,
    apiId: movie.apiId
  }

  modal_title.innerHTML = movie.title
  modal_poster.src = movie.coverLink
  box_info_1.innerHTML = 'Release: ' + movie.releaseDate
  box_info_2.innerHTML = 'Genres: ' + movie.genres
  box_info_3.innerHTML = 'Companies: ' + movie.productionCompanies
  box_info_4.innerHTML = movie.overView
  redirect_btn.innerHTML = redirections.amazon;
  redirect_btn.link = movie.webLink;

  modal_midia.style.display = 'flex'

}

export function gameInfo(game) {
  actualMedia = {
    title: game.name,
    description: game.desc,
    type: game.type,
    coverLink: game.coverLink,
    apiId: game.apiId
  }

  modal_title.innerHTML = game.name
  modal_poster.src = game.coverLink
  box_info_1.innerHTML = 'Release: ' + game.releaseDate
  box_info_2.innerHTML = 'Developers: ' + game.developers
  box_info_3.innerHTML = 'Publishers: ' + game.publishers
  box_info_4.innerHTML = game.desc
  redirect_btn.innerHTML = redirections.steam
  redirect_btn.link = game.webLink

  modal_midia.style.display = 'flex'
}
export function tvInfo(tv) {
  actualMedia = {
    title: tv.title,
    description: tv.overView,
    type: tv.type,
    coverLink: tv.coverLink,
    apiId: tv.apiId
  }

  modal_title.innerHTML = tv.title
  modal_poster.src = tv.coverLink
  box_info_1.innerHTML = 'Genres: ' + tv.genres
  box_info_2.innerHTML = 'Companies: ' + tv.productionCompanies
  box_info_4.innerHTML = tv.overView
  redirect_btn.innerHTML = redirections.prime;
  redirect_btn.link = tv.webLink;

  modal_midia.style.display = 'flex'
}

redirect_btn.onclick = () => {
  window.open(redirect_btn.link);
}

modal_return.onclick = () => {
  modal_midia.style.display = 'none';
}

// Style --------------------------------------------------------
const style = document.createElement('style')

style.innerHTML = `
.modal {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  right: 0;
  top: 0;

  position: fixed;
}

#modal_midia {
  display: none;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  
  left: 0;
  top: 0;
  
  position: fixed;
  
  width: 100%;
  height: 100%;
  
  background-color: #00000066;
}

#modal_content {
  height: 100%;
  width: 430px;
  background-color: #000000;
  padding: 3%;
}

#modal_title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 22px;
  padding-top: 10%;
  padding-bottom: 5%;
  color: #fff;
}

#modal_info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 5px;
}

#modal_poster {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

#modal_specific-info {
  padding-left: 10px;
  color: #fff;
}

#modal_extra-info {
  height: auto;
  color: #fff;
  padding-bottom: 100px;
}

#modal_div-button {
  display: flex;
  justify-content: center;
}

#modal_add {
  width: 430px;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 30px;
}

#modal_add-to-list {
  width: 150px;
  height: 35px;

  background: linear-gradient(180deg, #483d7c 0%, #150b43 161.67%);
  color: #fff;

  font-size: 18px;

  margin-left: 5px;

  border: none;
  border-radius: 5px;
}

#modal_add-to-list:hover {
  cursor: pointer;
  background: linear-gradient(180deg, #30275c 0%, #0d062e 161.67%);
}

.return {
  border: none;
  top: 20px;
  right: 25%;
  background: none;
  position: absolute;
  color: #fff;
}

.return:hover {
  scale: 1.09;
  cursor: pointer;
}

#redirect {
  color: #fff;
  padding-top: 10px;
  width: 100%;
}

#div_of_btns{
  padding-top: 15px;
}

#redirect_btn{
  background:  none;
  border-radius: 10px;
  width: 90px;
  height: 20px;
}

#redirect_btn:hover{
  cursor: pointer;
  scale: 1.07;
}
`

document.head.appendChild(style)
// --------------------------------------------------------------