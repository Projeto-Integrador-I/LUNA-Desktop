
const url= 'http://26.2.1.64:8080/luna/'
/*
axios.interceptors.request.use((config) => {
    let token = Cookies.get('luna/authenticate')
    if (token) config.headers.Authorization = `Bearer ${token}`
    console.log(config)
    return config
}, error => {
    return Promise.reject(error) 
})
*/
// função para autenticar o usuário
export function authenticate( user ){
    //passa o usuário (login + senha) para autenticação
    axios.post(url + 'authenticate',
                JSON.stringify( user ), 
                {headers: {"Content-Type": "application/json"}})
    .then(res =>  { 
    //pega o token de autenticação e seta nos cockies.
        const token = res.data.token;
        console.log("resposta authenticate = ",token);

        //Cookies.set('luna/authenticate', token)
        } )
    .catch(err => console.log(err))
}

//função para registrar usuario
export function registerUser( user ){
    //passa o usuário (login, nome, email, password) para registrar 
    axios.post(url + 'users',
                JSON.stringify( user ), 
                {headers: {"Content-Type": "application/json"}})
    .then(res => {
        console.log(res); 
    })
    .catch(err => console.log(err))
}

//função para saber todos os users
function getAllUsers(){
    var data = axios.get(url + 'users')
    .then(res => { 
        var users = res.data;
        
        //retorna um array de objects com todos os users para a variável data
        return users;  //object
    })
    .catch(err => console.log(err))
    return data; // retorna os dados para o local de chamada da função getAllUsers
}

//função para pegar o Id do usuário, a partir de seu username
export function getId( username ){
    //data obtida da função getAllUsers
    let data = getAllUsers().then(value => {
        console.log(value);
        //for loop para relacionar username == login e pegar o saber o id do user
        for (const user of Object.keys(value)){
            if(username == value[user].login){ 
                getUser(value[user].id);
                getUser(value[user].password);
            }
        }
    });
    
} 
// função para pegar os dados de um usuário especifico
export function getUser( id ) {
    //necessário passar o id e a autorização (não consegui passar pelos Cookies, então copiei e colei um token ativo)
    axios.get(url + 'users/' + id,{headers: {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MzkwNTcwNCwiaWF0IjoxNjYzODg3NzA0fQ.wRrCO2owWwvE8RlQEsdKplW6948vXis9MYYrIfJeo1WIO3kEOIyOQjl9I2E4AD2XXgP8JcLxs-0p_TAi3nXvEA"}})     
    .then(res => {
        console.log("gET USER ="+ JSON.stringify(res))
        //TODO criar um usuário ativo
    })
    .catch(err => console.log(err))
}


