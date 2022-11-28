import { ListService } from '../../../services/listServices.js'
import { User } from '../../../model/user.js'

const lists = await ListService.getLists()

const listsEmptyContainer = document.getElementsByClassName(
  'main_empty_container'
)
const listContainer = document.getElementsByClassName('main_container')

async function getUserId() {
  const user = new User();

  return user.getId
}

if (lists.length > 0) {
  listsEmptyContainer[0].setAttribute('class', 'display-none')
  listContainer[0].setAttribute('class', 'display-flex')

  const pageList = document.getElementById('list')

  lists.forEach(list => {
    const card = document.createElement('li')
    const img = document.createElement('img')
    const hover = document.createElement('img')
    const label = document.createElement('label')

    const modal = createListEditModal(list)

    img.setAttribute('src', '../../../assets/white_logo.svg')
    hover.setAttribute('src', '../../../assets/editHover.svg')
    label.innerHTML = list.name

    card.setAttribute('class', 'card')
    img.setAttribute('class', 'card_img')
    hover.setAttribute('class', 'card_hover')
    label.setAttribute('class', 'card_label')

    card.onmouseenter = () => {
      hover.style.display = 'flex'
    }

    card.onmouseleave = () => {
      hover.style.display = 'none'
      modal.style.display = 'none'
    }

    hover.onclick = () => {
      modal.style.display = modal.style.display === 'none' ? 'flex' : 'none'
    }

    card.appendChild(img)
    card.appendChild(hover)
    card.appendChild(modal)
    card.appendChild(label)
    pageList.appendChild(card)
  })

  function createListEditModal(list) {
    const modal = document.createElement('div')
    const edit = document.createElement('p')
    const remove = document.createElement('p')

    modal.setAttribute('class', 'card_modal')

    modal.style.display = 'none'
    edit.innerHTML = 'Editar'
    remove.innerHTML = 'Excluir'

    modal.appendChild(edit)
    modal.appendChild(remove)

    edit.onclick = async () => {
      openEditListModal(list.id, list.name, list.description, await getUserId())
    }

    remove.onclick = () => {
      ListService.deleteList(list.id)

      location.reload()
    }

    return modal
  }

  /* Add Button */
  const createCard = document.createElement('li')
  const createImg = document.createElement('img')
  const createLabel = document.createElement('h2')

  createImg.setAttribute('src', '../../../assets/plus.png')
  createLabel.innerHTML = 'Criar Lista'

  createCard.setAttribute('id', 'main_create_btn')
  createCard.appendChild(createImg)
  createCard.appendChild(createLabel)

  pageList.appendChild(createCard)
}

/* Modal */
const modal = document.getElementById('registerModal')

const emptyCreate = document.getElementById('empty_create_btn')
const mainCreate = document.getElementById('main_create_btn')

const error = document.getElementById('error')

const title = document.querySelector(".modal_content .title")

const add = document.getElementById('add')
const cancel = document.getElementById('cancel')

const fieldName = document.querySelector('form input')
const fieldDesc = document.querySelector('form textarea')

function openAddListModal() {
  modal.style.display = 'flex'

  title.innerHTML = "Cadastro de Lista"
  add.innerHTML = "Cadastrar"

  add.onclick = () => {
    const name = fieldName.value
    const desc = fieldDesc.value

    if (name) {
      ListService.registerList(name, desc)
      clearFields()
    } else {
      error.innerHTML = 'Necessário dar um nome à lista!'
    }
  }
}

function openEditListModal(listId, name, desc, userId) {
  modal.style.display = 'flex'

  title.innerHTML = "Edição de Lista"
  add.innerHTML = "Editar"

  fieldName.value = name

  if (desc) {
    fieldDesc.innerHTML = desc
  }

  add.onclick = async () => {
    ListService.updateList(listId, fieldName.value, fieldDesc.value, userId)
    modal.style.display = 'none'
    location.reload()
  }
}

emptyCreate.onclick = openAddListModal

mainCreate.onclick = openAddListModal

cancel.onclick = () => {
  modal.style.display = 'none'

  location.reload()
}

function clearFields() {
  error.innerHTML = ''

  fieldName.value = ''
  fieldDesc.value = ''
}

window.onclick = (event) => {
  if (event.target == modal) {
    clearFields()
    modal.style.display = 'none'
    location.reload()
  }
}