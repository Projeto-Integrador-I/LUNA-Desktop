import { UserService } from '../services/userServices.js';

/*
To use User class;
let u = new User();
    const printId = async () => {
    const a = await u.getId;
    const b = await u.getLogin;
    const c = await u.getEmail;
    const d = await u.getName;
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
}
*/
export class User {
  constructor() {
    getUser();
  }

  get getId() {
    return getUser().then((user) => { return user.id });
  }

  get getLogin() {
    return getUser().then((user) => { return user.login });
  }

  get getEmail() {
    return getUser().then((user) => { return user.email });
  }

  get getName() {
    return getUser().then((user) => { return user.name });
  }

  // set Login(login) {
  //   user.login = login;
  // }

  // set Email(email) {
  //   user.email = email;
  // }

  // set Name(name) {
  //   user.name = name;
  // }

  // set Password(password) {
  //   user.password = password;
  // }

}

function getUser() {
  let user = UserService.getUser(localStorage.getItem('luna/username'));
  return user;
}
