import { ListService } from '../../../services/listServices.js'

const lists = await ListService.getLists();

const listsEmptyContainer = document.getElementsByClassName(
  "main_empty_container"
);
const listContainer = document.getElementsByClassName("main_container");

if (lists.length > 0) {
  listsEmptyContainer[0].setAttribute("class", "display-none");
  listContainer[0].setAttribute("class", "display-flex");

  const pageList = document.getElementById("list");

  lists.forEach(list => {
    const card = document.createElement("li");
    const img = document.createElement("img");
    const hover = document.createElement("img");
    const label = document.createElement("label");

    img.setAttribute("src", "../../../assets/white_logo.svg");
    hover.setAttribute("src", "../../../assets/editHover.svg");
    label.innerHTML = list.name;

    card.setAttribute("class", "card");
    img.setAttribute("class", "card_img");
    hover.setAttribute("class", "card_hover");
    label.setAttribute("class", "card_label");

    card.onmouseenter = () => {
      hover.style.display = "flex";
    }

    card.onmouseleave = () => {
      hover.style.display = "none";
    }

    card.appendChild(img);
    card.appendChild(hover);
    card.appendChild(label);
    pageList.appendChild(card);
  });

  /* Add Button */
  const createCard = document.createElement("li");
  const createImg = document.createElement("img");
  const createLabel = document.createElement("h2");

  createImg.setAttribute("src", "../../../assets/plus.png");
  createLabel.innerHTML = "Criar Lista";

  createCard.setAttribute("id", "main_create_btn");
  createCard.appendChild(createImg);
  createCard.appendChild(createLabel);

  pageList.appendChild(createCard)
}

/* Modal */
const modal = document.getElementById("registerModal")

const emptyCreate = document.getElementById("empty_create_btn")
const mainCreate = document.getElementById("main_create_btn")

const error = document.getElementById("error")

const add = document.getElementById("add")
const cancel = document.getElementById("cancel")

const fieldName = document.querySelector("form input")
const fieldDesc = document.querySelector("form textarea")

emptyCreate.onclick = () => {
  modal.style.display = "flex"
}

mainCreate.onclick = () => {
  modal.style.display = "flex"
}

add.onclick = () => {
  ListService.getLists();

  const name = fieldName.value
  const desc = fieldDesc.value

  if (name) {
    ListService.registerList(name, desc)
    clearFields()
  } else {
    error.innerHTML = 'Necessário dar um nome à lista!'
  }
}

cancel.onclick = () => {
  modal.style.display = "none"
}

function clearFields() {
  error.innerHTML = ''

  fieldName.value = ''
  fieldDesc.value = ''
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}