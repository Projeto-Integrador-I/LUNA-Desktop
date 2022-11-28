import { constructCardGames, constructCardShow, constructCardMovies } from '../../../components/v-card.js';
import { movieInfo, gameInfo, tvInfo } from '../../../components/v-inspect.js';
import instance from '../../../services/axiosInstace.js'

let allTvShows, allGames, allMovies;

var intervalGames = setInterval(async function () {

  if (allGames == null) {
    let mostPlayed = async () => {
      const games = await instance.get('most-played',
        { headers: { "Content-Type": "application/json" } })
        .then((res) => { return res.data; })
        .catch((err) => { console.log(err) })
      return games;
    }
    mostPlayed().then((res) => {
      allGames = res;
    })
  } else {
    constructCardGames(allGames);
    clearInterval(intervalGames)
  }
}, 500);

var intervalShow = setInterval(async function () {
  if (allTvShows == null) {
    let shows = async () => {
      const trendingTv = await instance.get('trending-tv',
        { headers: { "Content-Type": "application/json" } })
        .then((res) => { return res.data })
        .catch((err) => { console.log(err) })
      return trendingTv;
    }
    shows().then((res) => {
      allTvShows = res;
    })
  } else {
    constructCardShow(allTvShows);
    clearInterval(intervalShow)
  }
}, 500)

var intervalMovies = setInterval(async function () {
  if (allMovies == null) {
    let movies = async () => {
      const trendingMovies = await instance.get('trending-movies',
        { headers: { "Content-Type": "application/json" } })
        .then((res) => { return res.data })
        .catch((err) => { console.log(err) })
      return trendingMovies;
    }
    movies().then((res) => {
      allMovies = res;
    })
  } else {
    constructCardMovies(allMovies);
    clearInterval(intervalMovies)
  }
}, 500);


window.onclick = (event) => {
  const midia = event.target;
  let id;
  if (midia.movieId != null) {
    id = midia.movieId;

    allMovies.forEach(movie => {
      if (id == movie.apiId) {
        movieInfo(movie);
      }
    })

  } else if (midia.gameId != null) {
    id = midia.gameId;

    allGames.forEach(game => {
      if (id == game.apiId) {
        gameInfo(game);
      }
    })
  } else if (midia.tvId != null) {
    id = midia.tvId

    allTvShows.forEach(tv => {
      if (id == tv.apiId) {
        tvInfo(tv);
      }
    })
  }
}