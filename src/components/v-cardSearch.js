import instance from "../services/axiosInstace.js";
const headrow = document.getElementById("headrow");
const row = document.createElement("div");
const row_posters = document.createElement("div");
const search = document.querySelector('#search')
const selectCatg = document.getElementsByClassName('active')
row.className = "row";
row.classList.add("allrow");
headrow.appendChild(row);
row_posters.className = "row__posters";
row.appendChild(row_posters);

search.addEventListener('keyup', _.debounce(searchInKeyUp, 400))

window.onload = () => {
 showMovies()
 console.log('aa');
}

//window.addEventListener('load', _.debounce(lazyLoading, 4000))

window.onscroll = () => {
  lazyLoading()
}

function searchInKeyUp(event){
    const searched = event.target.value;
    if(searched != ''){
      console.log(searched)
      row_posters.innerHTML=''
      if (selectCatg[0].innerText == 'TUDO') {
          instance.get(`media/search?name=${searched}`)  
            .then((res) => {
              res.data.forEach(book => {
                if (book != null && book.coverLink != "" && book.coverLink != undefined ){
                  console.log(book.coverLink)
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = book.title;
                  poster.setAttribute('data', book.coverLink)
                  row_posters.appendChild(poster);
                  lazyLoading()
                }            
             })
          })
        } else if (selectCatg[0].innerText == 'SÉRIES') {
            instance.get(`movies?name=${searched}&id=1`)
            .then((res) => {
              res.data.forEach(tv => {
                if (tv != null && tv != ""){
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = tv.title;
                  poster.setAttribute('data', tv.coverLink)
                  row_posters.appendChild(poster);
                  lazyLoading()
                }
              })
            })
        } else if (selectCatg[0].innerText == 'FILMES') {
            instance.get(`movies?name=${searched}&id=0`)
            .then((res) => {
              res.data.forEach(tv => {
                if (tv != null && tv != ""){
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = tv.title;
                  poster.setAttribute('data', tv.coverLink)
                  row_posters.appendChild(poster);
                  lazyLoading()
                }
              })
            })
        } else if (selectCatg[0].innerText == 'GAMES') {
            instance.get(`games?appid=${searched}`)
            .then((res) => {
              res.data.forEach(tv => {
                if (tv != null){
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = tv.name;
                  poster.setAttribute('data', tv.coverLink)
                  row_posters.appendChild(poster);
                  lazyLoading()
                }
              })
            })
        } else if (selectCatg[0].innerText == 'LIVROS') {
            instance.get(`book?name=${searched}`)  
            .then((res) => {
              res.data.forEach(book => {
                if(!book.imageLinks.length == 0){
                    const poster = document.createElement("img");
                    poster.className = "row__posterLarge";
                    poster.id = book.title;
                    poster.setAttribute('data', book.coverLink)
                    row_posters.appendChild(poster);
                    lazyLoading()
                }
              })
            }); 
        } 
    } else {
      showMovies();
  }
}

function showMovies(){
  row_posters.innerHTML=''
  if (selectCatg[0].innerText == 'TUDO') {
    instance.get('http://26.2.1.64:8080/luna/media/getall')  
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";

          poster.id = tv.name;
          poster.id = tv.title;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          lazyLoading()
        }
      });
    });
    instance.get('book?name=anel')  
    .then((res) => {
      res.data.forEach(book => {
      
        if(!book.imageLinks.length == 0){

            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            poster.id = book.title;
            poster.setAttribute('data', book.coverLink)
            row_posters.appendChild(poster);
            lazyLoading()
        }
      })
    });
  } else if (selectCatg[0].innerText == 'SÉRIES') {
    instance.get('trending-tv')
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";
          poster.id = tv.title;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          lazyLoading()
        }
      })
    })
  } else if (selectCatg[0].innerText == 'FILMES') {
    instance.get('trending-movies')
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";
          poster.id = tv.title;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          lazyLoading()
        }
      })
    })
  } else if (selectCatg[0].innerText == 'GAMES') {
    instance.get('most-played')
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";
          poster.id = tv.name;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          lazyLoading()
        }
      })
    })
  } else if (selectCatg[0].innerText == 'LIVROS') {
    instance.get('book?name=anel')  
    .then((res) => {
      res.data.forEach(book => {
      
        if(!book.imageLinks.length == 0){

            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            poster.id = book.title;
            poster.setAttribute('data', book.coverLink)
            row_posters.appendChild(poster);
            lazyLoading()
        }

      })
    });
  }
}


function lazyLoading() { 
  const images = document.querySelectorAll("[data]")
  images.forEach((image) => {
    if(image.getBoundingClientRect().top < window.innerHeight + 2) {
        if(image.getAttribute('data') != "undefined"){
          image.src = image.getAttribute('data')
          image.removeAttribute('data')
        } 
    }
  })
}
