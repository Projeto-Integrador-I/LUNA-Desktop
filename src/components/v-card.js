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

      poster.gameId = game.apiId;

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
    poster.tvId = tv.apiId;
    
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
    
    const poster = document.createElement("img");
    
    poster.className = "row__posterLarge";
    poster.id = movie.title;
    poster.src = movie.coverLink;
    poster.movieId = movie.apiId;

    row_posters.appendChild(poster);
  });
};


// class Modal{
// constructor(){
//   var modal = document.createElement('div');
//   modal.className = 'modal_midia';

//   var modal_title = document.createElement('div');
//   modal_title.className = 'modal_title';
  
//   var modal_info = document.createElement('div');
//   modal_info.className = 'modal_info';
  
//   var modal_poster = document.createElement('img');
//   modal_poster.className = 'modal_poster';

//   var modal_specific_info = document.createElement('div');
//   modal_specific_info.className = 'modal_specific-info';

//   var gameinfo = document.createElement('h4');

//   modal_specific_info.appendChild(gameinfo);
//   modal_info.appendChild(modal_poster);
//   modal_info.appendChild(modal_specific_info);

//   var modal_extra_info = document.createElement('div');
//   modal_extra_info.className = 'modal_extra-info';

//   var gameExtra = document.createElement('h4');

//   modal_extra_info.appendChild(gameExtra);

//   var modal_btns = document.createElement('div');
//   modal_btns.className = 'modal_div-button';

//   var add = document.createElement('button');
//   add.className = 'modal_add-to-list';
//   add.innerHTML = 'Adicionar a lista';

//   var back = document.createElement('button');
//   back.className = 'modal_return';

//   modal_btns.appendChild(add);
//   modal_btns.appendChild(back);

  
//   modal.appendChild(modal_title);
//   modal.appendChild(modal_info);
//   modal.appendChild(modal_extra_info);
//   modal.appendChild(modal_btns);
//   createModal()
// }

// setTitle(title){
//   this.modal_title.innerHTML = title;
// }

// }

// let m = new Modal();
const modal = document.getElementById('modal_midia');
const modal_title = document.getElementById('modal_title');
const modal_poster = document.getElementById('modal_poster');
const modal_add = document.getElementById('modal_add-to-list');
const modal_return = document.getElementById('modal_return');
const info1 = document.getElementById('box_info_1');
const info2 = document.getElementById('box_info_2');
/*
  <div class="modal_title"> name </div>
  <div class="modal_info">
      <img class="modal_poster" src="coverLink">
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
*/

window.onclick = (event) => {
  const midia = event.target;
  let id;
  if (midia.movieId != null) {
    id = midia.movieId;

    allMovies.forEach(movie => {
      if( id == movie.apiId ){

        modal_title.innerHTML = movie.title;
        modal_poster.src = movie.coverLink;
        //arrumar essa parte
        info1.innerHTML = 'Release Date: ' + movie.releaseDate +
                          '               Genres: ' + movie.genres + 
                          '               Production Companies: ' + movie.productionCompanies;
        info2.innerHTML = movie.overView;
        modal.style.display = "block";
      }   
    })

  } else if(midia.gameId != null){
    id = midia.gameId;

    allGames.forEach(game => {
      if( id == game.apiId ){
        modal_title.innerHTML = game.name;
        modal_poster.src = game.coverLink;
        //arrumar essa parte
        info1.innerHTML = 'Release Date: ' + game.releaseDate +
                          '               Developers: ' + game.developers + 
                          '               Publishers: ' + game.publishers;        ;
        info2.innerHTML =  game.desc;  
        modal.style.display = "block";
       }
    })
  } else if(midia.tvId != null){
      id = midia.tvId

      allTvShows.forEach(tv => {
        if( id == tv.apiId ){
          modal_title.innerHTML = tv.title;
          modal_poster.src = tv.coverLink;
          //arrumar essa parte
          info1.innerHTML = 'Genres: ' + tv.genres + 
                            '               Production Companies: ' + tv.productionCompanies;
          info2.innerHTML = tv.overView;
            // console.log(tv);
          modal.style.display = "block";
        }
      })

  }else if (midia == modal){
    modal.style.display ="block";
  }   else {
    modal.style.display = "none";
  }
  
}


modal_return.onclick = () => {
  modal.style.display = "none"
}

//Arrumar display








