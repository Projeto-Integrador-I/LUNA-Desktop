const url= 'http://26.2.1.64:8080/luna/'

axios.interceptors.request.use((config) => {
    let token = Cookies.get('luna/authenticate')
    if (token) config.headers.Authorization = `Bearer ${token}`
    console.log(config)
    return config
}, error => {
    return Promise.reject(error) 
})

function register(user){
    axios.post(url + 'users', newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


export function authenticate( user ){
    axios.post(url + 'authenticate',
                JSON.stringify( user ), 
                {headers: {"Content-Type": "application/json"}})
    .then(res =>  { 
        const token = res.data.token;
        Cookies.set('luna/authenticate', token)
     } )
    .catch(err => console.log(err))
}

export function registerUser( user ){
    axios.post(url + 'users',
                JSON.stringify( user ), 
                {headers: {"Content-Type": "application/json"}})
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))

}

function getAllUsers(){
    axios.get(url + 'users')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

function getId() {
    
}