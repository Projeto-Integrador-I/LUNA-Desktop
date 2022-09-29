import { User } from "../Axios/user.js"

const url= 'http://26.2.1.64:8080/luna/'

let user = new User();

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem('luna/authenticate')
    console.log("Axios interceptors Token: "+ token)
    if (token)  { 
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error) 
})

axios.interceptors.response.use(response => {
    return response
}, err => {
    console.log('ss')
    return new Promise((resolve, reject) => {
        const origianlReq = err.config
        if (err.response.status == 401 && err.config && !err.config._retry){
            origianlReq._retry = true 
            console.log('ss')
            let token = Cookies.get('luna/authenticate')
            if (token) {
                let res = axios.post( url + 'authenticate',{oldToken:token})
                .then((res) => {
                    console.log(res)
                    Cookies.set('luna/authenticate', res.data.token)
                    origianlReq.headers["Authorization"] = `Bearer ${res.data.token}`
                    return axios(origianlReq)
                })
                resolve(res)
            }
        } else {
            reject(err)
        }
    })
})


function getUser( username ) {
    axios.get(url +'users?login=' + username,  
                {headers: {'Content-Type': 'application/json'},
                mode:'cors'})
    .then(res => {
        let data = res.data;
        console.log( data );
        setId( res.data.id ); 
        setLogin( res.data.login );
        setEmail( res.data.email );
        setName( res.data.name );
    })
    .catch(err => console.log( err ))
}

// função para autenticar o usuário
export async function authenticate( username , password ){
    let validation = false;
    await axios.post( url + 'authenticate',{ username: username,
                                             password: password
                                        },{  headers: {"Content-Type": "application/json"}})
    .then(  (res) =>  { 
        const token = res.data.token;
        localStorage.setItem('luna/authenticate', token)
        //console.log("Token Authenticate 'Novo Token' :" + token);
        getUser( username );
        validation = true;  
    } )
    .catch(err => console.log(err))
    return validation;
}

//função para registrar usuario
export function registerUser( username, email, name, password ){
    axios.post(url + 'users',{ 
                            login: username,
                            email: email,
                            name: name,
                            password: password
                            },
                            {headers: {"Content-Type": "application/json"}})
    .then(res => {
        console.log("Register OK"); 
    })
    .catch(err => console.log(err))
}

export function updateUser( username, email, name, password ){
    axios.put(url + 'users/' + user.id, {
                            login: username,
                            email: email,
                            name: name,
                            password: password
                            },
                            {headers: {"Content-Type": "application/json"}})
    .then(res => {
        getUser( username );
        console.log("Update User RES: " + JSON.stringify(res));
    }).catch(err => console.log( err ))

}

function deleteUser( id ){
    axios.delete(url + 'users/' + id )
    .then(res => console.log("Delete User RES: " + JSON.stringify(res)))
    .catch(err => console.log(err));
}

function getId(){
    let id = user.id;
    return id;
}

function getLogin(){
    return user.login;
}

function getName(){
    return user.name;
}

function getEmail(){
    return user.email;
}

function setLogin( login ){
    user.login = login;
}

function setEmail( email ){
    user.email = email;
}

function setName( name ){
    user.name = name;
}

function setId( id ){
    user.id = id;
}

function setPassword( password ){
    user.password = password;
}