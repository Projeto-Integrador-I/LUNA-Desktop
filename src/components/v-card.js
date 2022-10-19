import instance from '../services/axiosInstace.js';



instance.get('trending-tv',
  { headers: { "Content-Type": "application/json" }})  
.then((res) => {
console.log(res);
const headrow = document.getElementById("headrow");
const row = document.createElement("div");
row.className = "row";
row.classList.add("gamesrow");
headrow.appendChild(row);
const title = document.createElement("h2");
title.className = "row__title";
title.innerText = "Trending: TV Shows";
row.appendChild(title);
const row_posters = document.createElement("div");
row_posters.className = "row__posters";
row.appendChild(row_posters);

res.data.forEach(tv => {

  const poster = document.createElement("img");
  poster.className = "row__posterLarge";
  poster.id = tv.title;
  poster.src = tv.coverLink;
  
  row_posters.appendChild(poster);

});
});


/*
instance.get('most-played',
{ headers: { "Content-Type": "application/json" }}) 
.then((res) => {
console.log(res);
const headrow = document.getElementById("headrow");
const row = document.createElement("div");
row.className = "row";
row.classList.add("booksrow");
headrow.appendChild(row);
const title = document.createElement("h2");
title.className = "row__title";
title.innerText = "Most Played";
row.appendChild(title);
const row_posters = document.createElement("div");
row_posters.className = "row__posters";
row.appendChild(row_posters);

res.data.forEach(game => {

if(game != null){
const poster = document.createElement("img");

poster.className = "row__posterLarge";
poster.id = game.name;

poster.src = game.images.headerImage;

row_posters.appendChild(poster);
}
});
});
*/
instance.get('trending-movies',
{ headers: { "Content-Type": "application/json" }}) 
.then((res) => {
console.log(res);
const headrow = document.getElementById("headrow");
const row = document.createElement("div");
row.className = "row";
row.classList.add("moviesrow");
headrow.appendChild(row);
const title = document.createElement("h2");
title.className = "row__title";
title.innerText = "Trending: Movies";
row.appendChild(title);
const row_posters = document.createElement("div");
row_posters.className = "row__posters";
row.appendChild(row_posters);

res.data.forEach(movie => {
const poster = document.createElement("img");
poster.className = "row__posterLarge";
poster.id = movie.title;
poster.src = movie.coverLink;
row_posters.appendChild(poster);
});
});

instance.get('book?name=o+pequeno+princepe',
{ headers: { "Content-Type": "application/json" }}) 
.then((res) => {
console.log(res);
const headrow = document.getElementById("headrow");
const row = document.createElement("div");
row.className = "row";
row.classList.add("booksrow");
headrow.appendChild(row);
const title = document.createElement("h2");
title.className = "row__title";
title.innerText = "Books";
row.appendChild(title);
const row_posters = document.createElement("div");
row_posters.className = "row__posters";
row.appendChild(row_posters);

res.data.forEach(book => {

if(!book.imageLinks.length == 0){

const poster = document.createElement("img");

poster.className = "row__posterLarge";
poster.id = book.title;

poster.src = book.imageLinks[0];

row_posters.appendChild(poster);
} 
});
});

// /trending-tv -> retorna só séries de tv e tals
// /trending-movies -> retorna só os movies