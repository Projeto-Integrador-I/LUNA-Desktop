const url = 'http://26.2.1.64:8080/luna/';

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('luna/authenticate')
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  
    return config
  }, error => {
    return Promise.reject(error)
  })

axios.get(url + 'movies?name=velozes+furiosos',
    { headers: { "Content-Type": "application/json" }})  
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