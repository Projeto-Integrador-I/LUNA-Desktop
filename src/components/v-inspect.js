import { ListService } from "../services/listServices.js"
//import { createListSelector } from "./v-listSelector.js"
import { Redirect } from './v-redirect.js';

let actualMedia

const modal_midia = document.getElementById('modal_midia')
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
const modal_add = document.createElement('div')
const modal_add_to_list = document.createElement('button')
const redirect_btn = document.createElement('button');

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

redirect_btn.setAttribute('id','redirect_btn')

div_of_btns.setAttribute('id', 'div_of_btns')

div_of_btns.appendChild(redirect_btn)

modal_info.appendChild(div_of_btns)

modal_extra_info.setAttribute('id', 'modal_extra-info')

box_info_4.setAttribute('id', 'box_info_4')

modal_extra_info.appendChild(box_info_4)

modal_info.appendChild(modal_extra_info)

modal_div_button.setAttribute('id', 'modal_div-button')

modal_return.setAttribute('id', 'modal_return')
modal_return.setAttribute('class', 'return')

modal_div_button.appendChild(modal_return)
modal_info.appendChild(modal_div_button)

modal_add.setAttribute('id', 'modal_add')

modal_add_to_list.setAttribute('id', 'modal_add-to-list')
modal_add_to_list.innerHTML = 'Adicionar a lista'

modal_add.appendChild(modal_add_to_list)

modal_midia.appendChild(modal_title)
modal_midia.appendChild(modal_info)
modal_midia.appendChild(redirect)
modal_midia.appendChild(div_of_btns)
modal_midia.appendChild(modal_extra_info)
modal_midia.appendChild(modal_div_button)
modal_midia.appendChild(modal_add)
modal_midia.style.display = 'none'

let redirections = new Redirect;


export function movieInfo(movie) {
  actualMedia = movie

  modal_title.innerHTML = movie.title
  modal_poster.src = movie.coverLink
  box_info_1.innerHTML = 'Release: ' + movie.releaseDate
  box_info_2.innerHTML = 'Genres: ' + movie.genres
  box_info_3.innerHTML = 'Companies: ' + movie.productionCompanies
  box_info_4.innerHTML = movie.overView
  redirect_btn.innerHTML = redirections.amazon;
  redirect_btn.link = movie.webLink;

  modal_midia.style.display = 'block'

}

export function gameInfo(game) {
  actualMedia = game

  modal_title.innerHTML = game.name
  modal_poster.src = game.coverLink
  box_info_1.innerHTML = 'Release: ' + game.releaseDate
  box_info_2.innerHTML = 'Developers: ' + game.developers
  box_info_3.innerHTML = 'Publishers: ' + game.publishers
  box_info_4.innerHTML = game.desc
  redirect_btn.innerHTML = redirections.steam
  redirect_btn.link = game.webLink
  
  modal_midia.style.display = 'block'
}
export function tvInfo(tv) {
  actualMedia = tv

  modal_title.innerHTML = tv.title
  modal_poster.src = tv.coverLink
  box_info_1.innerHTML = 'Genres: ' + tv.genres
  box_info_2.innerHTML = 'Companies: ' + tv.productionCompanies
  box_info_4.innerHTML = tv.overView
  redirect_btn.innerHTML = redirections.prime;
  redirect_btn.link = tv.webLink;
  

  modal_midia.style.display = 'block'
}

redirect_btn.onclick = (event) => {
  window.open(redirect_btn.link);
}

modal_return.onclick = (event) => {
  modal_midia.style.display = 'none';

}