
// export to class login.js
export class UserLog{
    constructor(username,password) {
        this.username = username
        this.password = password
    }
}

// Export to class signup.js
export class UserReg{
    constructor(login,email,name,password) {
        this.login = login
        this.email = email
        this.name = name
        this.password = password
    }
}