const url= 'http://26.2.1.64:8080/luna/'

export function authenticate( user ){
    axios.post(url + 'authenticate',
                JSON.stringify( user ), 
                {headers: {"Content-Type": "application/json"}})
    .then(res =>  { 
        let token = res.data.token;
        console.log(token);
        //retornar esse token pra algum lugar   
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