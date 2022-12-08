const options = document.getElementById("options")
options.setAttribute("class", "container-options")

const mediaList = document.createElement("ul")
mediaList.setAttribute("class","mediaTypes")

const mediaTypes = [
    {text:"Tudo" , href:"#tudo", img:"globe.svg"},
    {text:"Séries" , href:"#series", img:"monitor.svg"},
    {text:"Filmes" , href:"#filmes", img:"film.svg"},  
    {text:"Games" , href:"#games", img:"crosshair.svg"},
    {text:"Livros" , href:"#livros", img:"book-open.svg"}
]

let mediaType, mediaIcon, mediaLink
mediaList.addEventListener("click", _.debounce(refresh, 200))

function refresh(){
    window.location.reload()
}

mediaTypes.forEach(option => {
    mediaType = document.createElement("li")
    mediaIcon = document.createElement("img")
    mediaLink = document.createElement("a")
    
    mediaType.setAttribute("class", "mediaType")

    const url = window.location.href
   
    if(url.includes(option.href)){
        mediaType.setAttribute("class", "mediaType active")
    }

    mediaIcon.setAttribute("class", "type_icon")
    mediaIcon.setAttribute("src", `../../../assets/type_icons/${option.img}`)

    mediaLink.setAttribute("href", option.href)
    mediaLink.innerHTML = option.text

    mediaType.appendChild(mediaIcon)
    mediaType.appendChild(mediaLink)

    mediaList.appendChild(mediaType)
})

options.appendChild(mediaList)

 