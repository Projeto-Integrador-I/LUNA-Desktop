import instance from '../services/axiosInstace.js';

let allTvShows, allGames, allMovies;

if( allTvShows == null && allGames == null && allMovies == null){
  let mostPlayed = async () => {
    const games = await instance.get('most-played',
        { headers: { "Content-Type": "application/json" }}) 
        .then((res) => { return res.data; })
        .catch((err) => { console.log(err) })
        return games;
  }

  let shows = async () => {
    const trendingTv =  await instance.get('trending-tv',
        { headers: { "Content-Type": "application/json" }})  
        .then((res) => { return res.data })
        .catch((err) => { console.log(err) })
        return trendingTv;
  }

  let movies = async () => {
    const trendingMovies = await instance.get('trending-movies',
        { headers: { "Content-Type": "application/json" }}) 
        .then((res) => { return res.data })
        .catch((err) => { console.log(err) })
        return trendingMovies;
  }

  shows().then((res) => {
    allTvShows = res;
    constructCardShow(allTvShows);
  })
  .then(mostPlayed().then((res) => {
    allGames = res;
    constructCardGames(allGames);
  }))
  .then(movies().then((res) => {
    allMovies = res;
    constructCardMovies(allMovies);
  }));
}

//Não usar um construtor pois os dados vêm de maneira diferente
/*
function constructCard(list) {
  //criar as faixas
  
  list.forEach(midia => {
    console.log(midia);
    
  })
}

/*
<div class="modal">
        <div class="modal_title"> name </div>
        <div class="modal_info">
            <img class="modal_poster" src="coverLink" alt="não precisa">
            <div class="modal_specific-info">
                <h4> aboutGame ou desc ou developers[] / releaseDate / publishers[] <h4>
            </div>
        </div>
        <div class="modal_extra-info">
            <h4> aboutGame ou desc <h4>
        </div>
        <div class="modal_div-button">
            <button class="modal_add-to-list">Adicionar a lista</button>
            <button class="modal_return"></button>
        </div>
        
    </div>
    
*/

function constructCardGames(midia){

  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("gamesrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Most Played";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);

  midia.forEach(game => {
    if(game != null){
      const poster = document.createElement("img");

      poster.className = "row__posterLarge";
      poster.id = game.name;

      poster.src = game.coverLink;

      row_posters.appendChild(poster);
    }
  });
};

function  constructCardShow(midia) {
  
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("tvShowrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Trending: TV Shows";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);

  midia.forEach(tv => {

    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.id = tv.title;
    poster.src = tv.coverLink;
    
    row_posters.appendChild(poster);

  });
};

function constructCardMovies(midia) {
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

  midia.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    // poster.appId = movie.id;
    poster.className = "row__posterLarge";
    poster.id = movie.title;
    poster.src = movie.coverLink;
    row_posters.appendChild(poster);
  });
};