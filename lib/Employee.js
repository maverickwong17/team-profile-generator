class Employee{
    constructor(name,id,email){
        this.name = "N/A"
        this.id = "N/A"
        this.email = "N/A"
        if(name !== ""){
            this.name = name
        } 
        if(id !== ""){
            this.id = id
        } 
        if(email !== ""){
            this.email = email
        } 
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}   

module.exports = Employee