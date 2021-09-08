class User{
    constructor({name, surname, email, password}){
        this.name = name
        this.surname = surname
        this.email = email
        this.password = password
    }

    saludar(){
        return `Hola ${this.name}`
    }
}

const user1 = new User({name: "Diego", surname: "Alzate", password: "password", email: "d@d.co"})

console.log(user1)