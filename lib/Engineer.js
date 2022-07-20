const Employee = require("./Employee")

class Engineer{
    constructor(username){
        super(name, id, email)
        if(name !== ""){
            this.name = name
        } this.name = "N/A"
        if(id !== ""){
            this.id = id
        } this.id = "N/A"
        if(email !== ""){
            this.email = email
        } this.email = "N/A"
        if(username !== ""){
            this.username = username
        } this.username = "N/A"
        this.role = "Engineer"
    }
    getGithub(){return this.username}
    getRole(){return this.role}
}
