

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('luna/authenticate')
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  
    return config
  }, error => {
    return Promise.reject(error)
  })


axios.get(url + 'games?appids=1238000',
    { headers: { "Content-Type": "application/json" }})  
.then((res) => {
  console.log("DATA : "+ res);
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("gamesrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "GAMES";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.id = res.data.name;
    console.log("id = "+poster.id);
    poster.src = res.data.images.headerImage;
    console.log("img" + poster.src);
    
    row_posters.appendChild(poster);
  
  });

axios.get(url + 'movies?name=velozes+furiosos',
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
title.innerText = "Movies";
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

axios.get(url + 'book?name=o+pequeno+princepe',
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
