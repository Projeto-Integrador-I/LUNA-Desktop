const url = 'http://26.2.1.64:8080/luna/'

axios.interceptors.request.use((config) => {
  let token = localStorage.getItem('luna/authenticate')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, err => {
  return new Promise((resolve, reject) => {
    const origianlReq = err.config

    if (err.response.status == 401 && err.config && !err.config._retry) {
      origianlReq._retry = true
      let token = Cookies.get('luna/authenticate')

      if (token) {
        let res = axios.post(url + 'authenticate', { oldToken: token })
          .then((res) => {
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

function getUser(username) {
  axios.get(url + 'users?login=' + username,
    {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
    .then(res => {
      setId(res.data.id);
      setLogin(res.data.login);
      setEmail(res.data.email);
      setName(res.data.name);
    })
    .catch(err => console.log(err))
}

// função para autenticar o usuário
export async function authenticate(user, pass) {
  let validation = false;

  await axios.post(url + 'authenticate', {
    username: user,
    password: pass
  }, { headers: { "Content-Type": "application/json" } })
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem('luna/authenticate', token)

      getUser(user);
      validation = true;
    })
    .catch(err => console.error(err))

  return validation;
}

//função para registrar usuario
export function registerUser(user, email, name, pass) {
  axios.post(url + 'users', {
    login: user,
    email: email,
    name: name,
    password: pass
  },
    { headers: { "Content-Type": "application/json" } })
    .then(res => {
      console.log("Register OK");
    })
    .catch(err => console.error(err))
}

export function updateUser(user, email, name, pass) {
  axios.put(url + 'users/' + user.id, {
    login: user,
    email: email,
    name: name,
    password: pass
  },
    { headers: { "Content-Type": "application/json" } })
    .then(res => {
      getUser(user);
    }).catch(err => console.error(err))

}

function deleteUser(id) {
  axios.delete(url + 'users/' + id)
    .then(res => console.log("Delete User RES: " + JSON.stringify(res)))
    .catch(err => console.error(err));
}