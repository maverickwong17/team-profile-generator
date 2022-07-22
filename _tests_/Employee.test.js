const Employee = require('../lib/Employee')

describe("Employee Class", () => {
    it("should create a new employee with their name, id, and email", () => {
        const employee = new Employee("Bob", 1, "test@test.com")
        const result = {name: 'Bob' , id: 1, email: 'test@test.com'}
        expect(employee).toEqual(result); 
    });
    describe('getName', ()=>{
        it('getName returns the employee name', () => {
            const employee = new Employee("Bob", 1, "test@test.com")
            expect(employee.getName()).toBe('Bob')
        })
    })
    describe('getId', ()=>{
        it('getID returns the employee ID', () => {
            const employee = new Employee("Bob", 1, "test@test.com")
            expect(employee.getId()).toBe(1)
        })
    })
    describe('getEmail', ()=>{
        it('getEmail returns the employee Email', () => {
            const employee = new Employee("Bob", 1, "test@test.com")
            expect(employee.getEmail()).toBe('test@test.com')
        })
    })
    describe('getRole', ()=>{
        it('getRole returns the employee role', () => {
            const employee = new Employee("Bob", 1, "test@test.com")
            expect(employee.getRole()).toBe('Employee')
        })
    })
});



//test object created
//test methods

/**
 * create a new employee("bob", 1, test@test.com)
 *  const bob = new Employee("bob", 1, test@test.com)
 *  const solution(Employee {
                * name:"bob"
                * id:1
                * email:test@test.com
                * role:employee
                * }
 *                )    
 * 
 * expect bob . toEqual(solution)
 * 
 * should return name .name()
 * const bob = new Employee("bob", 1, test@test.com)
 * test = bob.name()
 * 
 * expect(test).toEqual("bob")
 */