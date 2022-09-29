export class User {
  constructor(id, login, email, name, password) {
    this.id = id
    this.login = login
    this.email = email
    this.name = name
    this.password = password
  }

  get getId() {
    return this.id;
  }

  get getLogin() {
    return this.login;
  }

  get getName() {
    return this.name;
  }

  get getEmail() {
    return this.email;
  }

  set setLogin(login) {
    this.login = login;
  }

  set setEmail(email) {
    this.email = email;
  }

  set setName(name) {
    this.name = name;
  }

  set setId(id) {
    this.id = id;
  }

  set setPassword(password) {
    this.password = password;
  }
}