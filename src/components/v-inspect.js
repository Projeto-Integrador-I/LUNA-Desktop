  //criar isso dentro de   <div id="modal_midia" class="modal">

const modal_midia = document.getElementById('modal_midia');
const modal_title = document.createElement('div');
const modal_info = document.createElement('div');
const modal_poster = document.createElement('img');
const modal_specific_info = document.createElement('div');
const specific_info_1 = document.createElement('div');
const box_info_1 = document.createElement('h5');
const specific_info_2 = document.createElement('div');
const box_info_2 = document.createElement('h5');
const specific_info_3 = document.createElement('div');
const box_info_3 = document.createElement('h5');
const redirect = document.createElement('div');
const div_of_btns = document.createElement('div');
const modal_extra_info = document.createElement('div');
const box_info_4 = document.createElement('h5');
const modal_div_button = document.createElement('div');
const modal_return = document.createElement('button');
const modal_add = document.createElement('div');
const modal_add_to_list = document.createElement('button');
//ter o modal pronto já
//quando clicar na mídia lá na pag v-card, mandar informações para atualizar aqui.

function createModal() {

    modal_title.setAttribute('id','modal_title');
    
    modal_info.setAttribute('id','modal_info');

    modal_poster.setAttribute('id','modal_poster');
    
    modal_info.appendChild(modal_poster);

    modal_specific_info.setAttribute('id','modal_specific-info');
    
    specific_info_1.setAttribute('id','specific_info_1');

    box_info_1.setAttribute('id','box_info_1');

    specific_info_1.appendChild(box_info_1);
    modal_specific_info.appendChild(specific_info_1);
    
    specific_info_2.setAttribute('id','specific_info_2');

    box_info_2.setAttribute('id','box_info_2');

    specific_info_2.appendChild(box_info_2);
    modal_specific_info.appendChild(specific_info_2);
   
    specific_info_3.setAttribute('id','specific_info_3');

    box_info_3.setAttribute('id','box_info_3');

    specific_info_3.appendChild(box_info_3);
    modal_specific_info.appendChild(specific_info_3);

    modal_info.appendChild(modal_specific_info);

    redirect.setAttribute('id','redirect');
    redirect.innerHTML = "Onde consumir: ";

    modal_info.appendChild(redirect);
    
    div_of_btns.setAttribute('id','div_of_btns');

    modal_info.appendChild(div_of_btns);

    modal_extra_info.setAttribute('id','modal_extra-info');

    box_info_4.setAttribute('id','box_info_4');

    modal_extra_info.appendChild(box_info_4);

    modal_info.appendChild(modal_extra_info);

    modal_div_button.setAttribute('id','modal_div-button');

    modal_return.setAttribute('id','modal_return');
    modal_return.setAttribute('class','return');

    modal_div_button.appendChild(modal_return);
    modal_info.appendChild(modal_div_button);
    
    modal_add.setAttribute('id','modal_add');

    modal_add_to_list.setAttribute('id','modal_add-to-list');
    modal_add_to_list.innerHTML = 'Adicionar a lista';

    modal_add.appendChild(modal_add_to_list);

    modal_midia.appendChild(modal_title);
    modal_midia.appendChild(modal_info);
    modal_midia.appendChild(redirect);
    modal_midia.appendChild(div_of_btns);
    modal_midia.appendChild(modal_extra_info);
    modal_midia.appendChild(modal_div_button);
    modal_midia.appendChild(modal_add);
    modal_midia.style.display = 'none';
}
createModal();

export function movieInfo(title, src, date, genres, companies, overview, link) {
  modal_title.innerHTML = title;
  modal_poster.src = src;
  box_info_1.innerHTML = 'Release: ' + date;
  box_info_2.innerHTML = 'Genres: ' + genres;
  box_info_3.innerHTML = 'Companies: ' + companies;
  box_info_4.innerHTML = overview;
  modal_midia.style.display = 'block';
}

export function gameInfo(title, src, date, developers, publishers, description, link) {
  modal_title.innerHTML = title;
  modal_poster.src = src;
  box_info_1.innerHTML = 'Release: ' + date;
  box_info_2.innerHTML = 'Developers: ' + developers;
  box_info_3.innerHTML = 'Publishers: ' + publishers;
  box_info_4.innerHTML = description;
  modal_midia.style.display = 'block';
}
export function tvInfo(title, src, genres, companies, overview, link) {
  modal_title.innerHTML = title;
  modal_poster.src = src;
  box_info_1.innerHTML = 'Genres: ' + genres;
  box_info_2.innerHTML = 'Companies: ' + companies;
  box_info_4.innerHTML = overview;
  modal_midia.style.display = 'block';
}

/*  <div id="modal_title"></div>
    <div id="modal_info">
        <img id="modal_poster">
        <div id="modal_specific-info">
            <div id="specific_info_1">
              <h5 id="box_info_1"><h5>
            </div>
            <div id="specific_info_2">
              <h5 id="box_info_2"><h5>
            </div>
            <div id="specific_info_3">
              <h5 id="box_info_3"><h5>
            </div>
        </div>
    </div>
    <div id="redirect">Onde consumir: </div>
    <div id="div_of_btns"></div>
    <div id="modal_extra-info">
        <h5 id="box_info_4"><h5>
    </div>
    <div id="modal_div-button">
        <button id="modal_return" class="return"></button>
    </div>
    <div id="modal_add">
      <button id="modal_add-to-list">Adicionar a lista</button>
    </div> */

