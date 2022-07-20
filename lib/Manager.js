const Employee = require("./Employee")

class Manager{
    constructor(officeNumber){
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
        if(officeNumber !== ""){
            this.officeNumber = officeNumber
        } this.officeNumber = "N/A"
        this.role = "Manager"
    }
    getRole(){return this.role}
}