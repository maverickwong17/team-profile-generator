const Intern = require('../lib/Intern')

describe("Intern Class", () => {
    it("should create a new intern with their name, id, email, and school", () => {
        const intern = new Intern("Bob", 3, "intern@test.com" , 'Test University')
        const result = {'name': 'Bob' , 'id': 3, 'email': 'intern@test.com', 'school': 'Test University'}
        expect(intern).toEqual(result); 
    });
    describe('getName', ()=>{
        it('getName returns the intern name', () => {
            const intern = new Intern("Bob", 3, "intern@test.com" , 'Test University')
            expect(intern.getName()).toBe('Bob')
        })
    })
    describe('getId', ()=>{
        it('getID returns the intern ID', () => {
            const intern = new Intern("Bob", 3, "intern@test.com" , 'Test University')
            expect(intern.getId()).toBe(3)
        })
    })
    describe('getEmail', ()=>{
        it('getEmail returns the intern Email', () => {
            const intern = new Intern("Bob", 3, "intern@test.com" , 'Test University')
            expect(intern.getEmail()).toBe('intern@test.com')
        })
    })
    describe('getRole', ()=>{
        it('getRole returns the intern role', () => {
            const intern = new Intern("Bob", 3, "intern@test.com")
            expect(intern.getRole()).toBe('Intern')
        })
    })
    describe('getSchool', ()=>{
        it('getSchool returns the intern school', () => {
            const intern = new Intern("Bob", 3, "intern@test.com" , 'Test University')
            expect(intern.getSchool()).toBe('Test University')
        })
    })
});