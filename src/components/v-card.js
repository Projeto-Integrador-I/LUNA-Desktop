import instance from '../services/axiosInstace.js';



instance.get('trending',
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
title.innerText = "Trending";
row.appendChild(title);
const row_posters = document.createElement("div");
row_posters.className = "row__posters";
row.appendChild(row_posters);

res.data.results.forEach(trend => {

  const poster = document.createElement("img");
  poster.className = "row__posterLarge";
  poster.id = trend.name;
  poster.src = 'https://image.tmdb.org/t/p/w500' + trend.poster_path;
  
  row_posters.appendChild(poster);

});
});

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


instance.get('movies?name=velozes+furiosos',
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
title.innerText = "Velozes e Furiosos";
row.appendChild(title);
const row_posters = document.createElement("div");
row_posters.className = "row__posters";
row.appendChild(row_posters);

res.data.forEach(movie => {
const poster = document.createElement("img");
poster.className = "row__posterLarge";
poster.id = movie.title;
poster.src = movie.posterPath;
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
