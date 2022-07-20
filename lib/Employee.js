class Employee{
    constructor(name,id,email){
        if(name !== ""){
            this.name = name
        } this.name = "N/A"
        if(id !== ""){
            this.id = id
        } this.id = "N/A"
        if(email !== ""){
            this.email = email
        } this.email = "N/A"
        this.role = "Employee"
    }
    getName(){return this.name}
    getId(){return this.id}
    getEmail(){return this.email}
    getRole(){return this.role}
}   

module.exports = Employee