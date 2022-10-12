
//const url = 'http://26.2.1.64:8080/luna/'
 const instance = axios.create({
    baseURL : 'http://26.2.1.64:8080/luna/',
    headers: { 'Content-Type': 'application/json' }
 })
 instance.interceptors.request.use((config) => {
    let token = localStorage.getItem('luna/authenticate')
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  
    return config
  }, error => {
    return Promise.reject(error)
  })

  instance.interceptors.response.use(response => {
    return response
  }, err => {
    return new Promise((resolve, reject) => {
      const origianlReq = err.config
  
      if (err.response.status == 401 && err.config && !err.config._retry) {
        origianlReq._retry = true
        let token = localStorage.getItem('luna/authenticate')
  
        if (token) {
          let res = instance.post(url + 'authenticate', { oldToken: token })
            .then((res) => {
              localStorage.setItem('luna/authenticate', res.data.token)
              origianlReq.headers["Authorization"] = `Bearer ${res.data.token}`
  
              return instance(origianlReq)
            })
  
          resolve(res)
        }
      } else {
        reject(err)
      }
    })
  })

  export default instance;