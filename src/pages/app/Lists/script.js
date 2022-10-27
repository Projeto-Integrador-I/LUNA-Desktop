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
    const label = document.createElement("label");

    img.setAttribute("src", "../../../assets/white_logo.svg")
    label.innerHTML = list.name;

    card.setAttribute("class", "card");
    label.setAttribute("class", "card-label");

    card.appendChild(img)
    card.appendChild(label);
    pageList.appendChild(card);
  });
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