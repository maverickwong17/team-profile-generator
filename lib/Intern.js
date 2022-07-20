const Employee = require("./Employee")

class Intern{
    constructor(school){
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
        if(school !== ""){
            this.school = school
        } this.school = "N/A"
        this.role = "Intern"
    }
    getSchool(){return this.school}
    getRole(){return this.role}
}

// school

// getSchool()

// getRole()—overridden to return 'Intern'