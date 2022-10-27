import instance from "../services/axiosInstace.js";
const headrow = document.getElementById("headrow");
const row = document.createElement("div");
const row_posters = document.createElement("div");
const search = document.querySelector('#search')
console.log(searched)

row.className = "row";
row.classList.add("allrow");
headrow.appendChild(row);
row_posters.className = "row__posters";
row.appendChild(row_posters);

search.addEventListener('keyup', _.debounce(searchInKeyUp, 400))

function searchInKeyUp(event){
    const searched = event.target.value;
    console.log(searched)
    instance.get(`book?name=${searched}`)  
        .then((res) => {
         res.data.forEach(book => {
   
            if(!book.imageLinks.length == 0){
        
                const poster = document.createElement("img");
                 poster.className = "row__posterLarge";
                poster.id = book.title;
                poster.src = book.coverLink;
                row_posters.appendChild(poster);
            }

         })
    });
}

if(searched == ""){
instance.get('trending-tv')  
.then((res) => {
  res.data.forEach(tv => {

    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.id = tv.title;
    poster.src = tv.coverLink;
    row_posters.appendChild(poster);

  });
});


instance.get('book?name=anel')  
.then((res) => {
  res.data.forEach(book => {
   
    if(!book.imageLinks.length == 0){
        
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        poster.id = book.title;
        poster.src = book.coverLink;
        row_posters.appendChild(poster);
    }

  })
});

instance.get('most-played')  
.then((res) => {
  res.data.forEach(game => {
   
    if(game != null){
        
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        poster.id = game.title;
        poster.src = game.coverLink;
        row_posters.appendChild(poster);
    }

  })
});

instance.get('trending-movies')  
.then((res) => {
  res.data.forEach(tv => {

    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.id = tv.title;
    poster.src = tv.coverLink;
    row_posters.appendChild(poster);

  });
});
}