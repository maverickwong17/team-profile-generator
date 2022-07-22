const Manager = require('../lib/Manager')

describe("Manager Class", () => {
    it("should create a new manager with their name, id, email, and office number", () => {
        const manager = new Manager("Bob", 1, "manager@test.com" , 123)
        const result = {'name': 'Bob' , 'id': 1, 'email': 'manager@test.com', 'officeNumber': 123}
        expect(manager).toEqual(result); 
    });
    describe('getName', ()=>{
        it('getName returns the manager name', () => {
            const manager = new Manager("Bob", 1, "manager@test.com" , 123)
            expect(manager.getName()).toBe('Bob')
        })
    })
    describe('getId', ()=>{
        it('getID returns the manager ID', () => {
            const manager = new Manager("Bob", 1, "manager@test.com" , 123)
            expect(manager.getId()).toBe(1)
        })
    })
    describe('getEmail', ()=>{
        it('getEmail returns the manager Email', () => {
            const manager = new Manager("Bob", 1, "manager@test.com" , 123)
            expect(manager.getEmail()).toBe('manager@test.com')
        })
    })
    describe('getRole', ()=>{
        it('getRole returns the manager role', () => {
            const manager = new Manager("Bob", 1, "manager@test.com", 123)
            expect(manager.getRole()).toBe('Manager')
        })
    })
    describe('getOfficeNumber', ()=>{
        it('getOfficeNumber returns the office number', () => {
            const manager = new Manager("Bob", 1, "manager@test.com" , 123)
            expect(manager.getOfficeNumber()).toBe(123)
        })
    })
});