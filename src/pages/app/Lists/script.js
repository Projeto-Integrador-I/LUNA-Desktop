import { ListService } from '../../../services/listServices.js'

const series = [
  // {
  //   name: "Peaky Blinders",
  //   cover:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVnvBMvTF5t0zYPBH3a3OTJmmOH8VMLHmR7eErwxgQ&s",
  // },
];

const listsEmptyContainer = document.getElementsByClassName(
  "main_empty_container"
);
const listContainer = document.getElementsByClassName("main_container");

if (series.length > 0) {
  listsEmptyContainer[0].setAttribute("class", "display-none");
  listContainer[0].setAttribute("class", "display-flex");

  const pageList = document.getElementById("list");

  const card = document.createElement("li");
  const img = document.createElement("img");
  const label = document.createElement("label");

  img.setAttribute("src", series[0].cover);
  label.innerHTML = "Minhas Séries";

  card.setAttribute("class", "card");
  card.appendChild(img);
  label.setAttribute("class", "card-label");

  card.appendChild(label);
  pageList.appendChild(card);
}

/* Modal */
const modal = document.getElementById("registerModal")

const emptyCreate = document.getElementById("empty_create_btn")
const mainCreate = document.getElementById("main_create_btn")

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
    console.log("Criando Lista");
    ListService.registerList(name, desc)
  }
}

cancel.onclick = () => {
  modal.style.display = "none"
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}