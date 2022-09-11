const url= 'http://26.2.1.64:8080/luna/'

function register(user){
    axios.post(url + 'users', newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}


export function authenticate( user ){
    axios.post(url+'authenticate',
                JSON.stringify( user ), 
                {headers: {"Content-Type": "application/json"}})
    .then(res =>  { 
        let token = res.data.token;
        console.log(token);
        //retornar esse token pra algum lugar   
     } )
    .catch(err => console.log(err))
}
