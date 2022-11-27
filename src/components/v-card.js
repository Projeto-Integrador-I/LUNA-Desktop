

export function constructCardGames(midia){

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

      poster.gameId = game.apiId;

      poster.src = game.coverLink;
      
      row_posters.appendChild(poster);
    }
  });
};

export function  constructCardShow(midia) {
  
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
    poster.tvId = tv.apiId;
    
    row_posters.appendChild(poster);

  });
};

export function constructCardMovies(midia) {
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
    
    const poster = document.createElement("img");
    
    poster.className = "row__posterLarge";
    poster.id = movie.title;
    poster.src = movie.coverLink;
    poster.movieId = movie.apiId;

    row_posters.appendChild(poster);
  });
};






