import instance from './axiosInstace.js'

export class UserService {
  static async getUser(username) {
    let user = JSON;
    await instance.get(`users?login=${username}`)
      .then(res => {
        user = res.data;
      })
      .catch(err => console.log(err))
    return user;
  }

  // função para autenticar o usuário
  static async authenticate(user, pass) {
    let validation = false;

    await instance.post('authenticate', {
      username: user,
      password: pass
    })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('luna/authenticate', token)

        localStorage.setItem('luna/username', user);

        validation = true;

      })
      .catch(err => console.error(err))

    return validation;
  }

  //função para registrar usuario
  static registerUser(user, email, name, pass) {
    instance.post('users', {
      login: user,
      email: email,
      name: name,
      password: pass
    })
      .then(res => console.log("Register OK"))
      .catch(err => console.error(err))
  }

  static updateUser(user, email, name, pass) {
    instance.put(`users/${user.id}`, {
      login: user,
      email: email,
      name: name,
      password: pass
    })
      .then(res => this.getUser(user))
      .catch(err => console.error(err))

  }

  static deleteUser(id) {
    instance.delete('users/' + id)
      .then(res => console.log("Delete User RES: " + JSON.stringify(res)))
      .catch(err => console.error(err));
  }
}