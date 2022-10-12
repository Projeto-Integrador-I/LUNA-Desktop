import instance from '../services/axiosInstace.js'

  instance.get('movies?name=velozes+furiosos')  
    .then((res) => {
        const setMovie = res.data[Math.floor(Math.random() * res.data.length - 1)];
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner__title");
        //var banner_desc = document.getElementById("banner_description");
       // banner.style.backgroundImage = "url(" + setMovie.belongsToCollection.backdrop_path + ")";
        banner.style.backgroundImage = "url(" + setMovie.posterPath + ")";
        //banner_desc.innerText = ("OVERVIEW");
        banner_title.innerText = setMovie.title
    }
    );