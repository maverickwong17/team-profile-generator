const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, username){
        super(name, id, email)
        this.username = "N/A"
        if(username !== ""){
            this.username = username} 
        this.role = "Engineer"
    }
    getGithub(){return this.username}
    getRole(){return this.role}
}

module.exports = Engineer