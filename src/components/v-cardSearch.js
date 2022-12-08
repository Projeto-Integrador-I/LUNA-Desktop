import instance from "../services/axiosInstace.js";
import { movieInfo, gameInfo, tvInfo, bookInfo } from './v-inspect.js';

const headrow = document.getElementById("headrow");
const row = document.createElement("div");
const row_posters = document.createElement("div");
const search = document.querySelector('#search')
const selectCatg = document.getElementsByClassName('active')

let allTvShows, allGames, allMovies, allBooks;

row.className = "row";
row.classList.add("allrow");
headrow.appendChild(row);
row_posters.className = "row__posters";
row.appendChild(row_posters);

search.addEventListener('keyup', _.debounce(searchInKeyUp, 400))

showMovies()

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
              if (res.data.length == 0) {
                emptyMedia()
              }
              res.data.forEach(book => {
                if (book != null && book.coverLink != "" && book.coverLink != undefined ){
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = book.title;
                  poster.setAttribute('data', book.coverLink)
                  row_posters.appendChild(poster);
                  lazyLoading()
                  emptyMedia()
                } else {
                  emptyMedia()
                }
             })
          })
        } else if (selectCatg[0].innerText == 'SÉRIES') {
            instance.get(`movies?name=${searched}&id=1`)
            .then((res) => {
              res.data.forEach(tv => {
                if (res.data.length == 0) {
                  emptyMedia()
                }
                if (tv != "" && tv != null && tv.coverLink != "" && tv.coverLink != undefined){
                  allTvShows = res.data
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = tv.title;
                  poster.setAttribute('data', tv.coverLink)
                  row_posters.appendChild(poster);
                  emptyMedia()
                  lazyLoading()
                }
              })
            })
        } else if (selectCatg[0].innerText == 'FILMES') {
            instance.get(`movies?name=${searched}&id=0`)
            .then((res) => {
              if (res.data.length == 0) {
                emptyMedia()
              }
              res.data.forEach(tv => {
                if (tv != "" && tv != null && tv.coverLink != "" && tv.coverLink != undefined){
                  allMovies = res.data
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = tv.apiId;
                  poster.setAttribute('data', tv.coverLink)
                  console.log(tv.coverLink)
                  row_posters.appendChild(poster);
                  emptyMedia()
                  lazyLoading()
                } else {
                  emptyMedia()
                }
              })
            })
        } else if (selectCatg[0].innerText == 'GAMES') {
            instance.get(`game?name=${searched}`,
            { headers: { "Content-Type": "application/json" }})
            .then((res) => {
              if (res.data.length == 0) {
                emptyMedia()
              }
              res.data.forEach(tv => {
                if (tv != null && tv.coverLink != "" && tv.coverLink != undefined ){
                  allGames = res.data
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = tv.apiId;
                  poster.setAttribute('data', tv.coverLink)
                  row_posters.appendChild(poster);
                  emptyMedia()
                  lazyLoading()
                } else {
                  emptyMedia()
                }
              })
            })
        } else if (selectCatg[0].innerText == 'LIVROS') {
            instance.get(`book?name=${searched}`)  
            .then((res) => {
              res.data.forEach(book => {
                if (res.data.length == 0) {
                  emptyMedia()
                }
                if(!book.imageLinks.length == 0){
                  allBooks = res.data
                  const poster = document.createElement("img");
                  poster.className = "row__posterLarge";
                  poster.id = book.apiId;
                  poster.setAttribute('data', book.coverLink)
                  row_posters.appendChild(poster);
                  emptyMedia()
                  lazyLoading()
                } 
                emptyMedia()
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

          poster.id = tv.apiId;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          emptyMedia()
          lazyLoading()
        } else {
          emptyMedia()
        }
      });
    });
    instance.get('book?name=anel')  
    .then((res) => {
      res.data.forEach(book => {
        if(!book.imageLinks.length == 0){
            allBooks = res.data
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            poster.id = book.apiId;
            poster.setAttribute('data', book.coverLink)
            row_posters.appendChild(poster);
            emptyMedia()
            lazyLoading()
        } else  {
          emptyMedia()
        }
      })
    });
  } else if (selectCatg[0].innerText == 'SÉRIES') {
    instance.get('trending-tv')
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          allTvShows = res.data
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";
          poster.id = tv.apiId;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          emptyMedia()
          lazyLoading()
        } else {
          emptyMedia()
        }
      })
    })
  } else if (selectCatg[0].innerText == 'FILMES') {
    instance.get('trending-movies')
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          allMovies = res.data
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";
          poster.id = tv.apiId;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          emptyMedia()
          lazyLoading()
        } else {
          emptyMedia()
        }
      })
    })
  } else if (selectCatg[0].innerText == 'GAMES') {
    instance.get('most-played')
    .then((res) => {
      res.data.forEach(tv => {
        if (tv != null){
          allGames = res.data
          const poster = document.createElement("img");
          poster.className = "row__posterLarge";
          poster.id = tv.apiId;
          poster.setAttribute('data', tv.coverLink)
          row_posters.appendChild(poster);
          emptyMedia()
          lazyLoading()
        } else {
          emptyMedia()
        }
      })
    })
  } else if (selectCatg[0].innerText == 'LIVROS') {
    instance.get('book?name=pequeno')  
    .then((res) => {
      res.data.forEach(book => {
      
        if(!book.imageLinks.length == 0){
            allBooks = res.data
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            poster.id = book.apiId;
            poster.setAttribute('data', book.coverLink)
            row_posters.appendChild(poster);
            emptyMedia()
            lazyLoading()
        } else {
          emptyMedia()
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

function emptyMedia() {

  const listsEmptyContainer = document.getElementById('main_empty_container')
  const lists = document.querySelectorAll("[data]")

  if (lists.length >= 1) {
    listsEmptyContainer.style.display='none'
  } else {
    listsEmptyContainer.style.display='flex'
  }
}

window.onclick = (event) => {
  const midia = event.target;
  let id;
  if (midia.id != null && allMovies != undefined) {
    id = midia.id;
    allMovies.forEach(movie => {
      if (id == movie.apiId) {
        movieInfo(movie);
      }
    })

  } else if (midia.id != null && allGames != undefined) {
    id = midia.id;

    allGames.forEach(game => {
      if (id == game.apiId) {
        gameInfo(game);
      }
    })
  } else if (midia.id != null && allTvShows != undefined) {
    id = midia.id

    allTvShows.forEach(tv => {
      if (id == tv.apiId) {
        tvInfo(tv);
      } 
    })
  } else if (midia.id != null && allBooks != undefined) {
    id = midia.id

    allBooks.forEach(book => {
      if (id == book.apiId) {
        bookInfo(book);
      } 
    })
  }
}