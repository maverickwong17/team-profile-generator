const Engineer = require('../lib/Engineer')

describe("Engineer Class", () => {
    it("should create a new engineer with their name, id, email, and GitHub username", () => {
        const engineer = new Engineer("Bob", 2, "engineer@test.com" , 'superGithubUsername')
        const result = {'name': 'Bob' , "id": 2, 'email': 'engineer@test.com', 'username': 'superGithubUsername'}
        expect(engineer).toEqual(result); 
    });
    describe('getName', ()=>{
        it('getName returns the engineer name', () => {
            const engineer = new Engineer("Bob", 2, "engineer@test.com" , 'superGithubUsername')
            expect(engineer.getName()).toBe('Bob')
        })
    })
    describe('getId', ()=>{
        it('getID returns the engineer ID', () => {
            const engineer = new Engineer("Bob", 2, "engineer@test.com" , 'superGithubUsername')
            expect(engineer.getId()).toBe(2)
        })
    })
    describe('getEmail', ()=>{
        it('getEmail returns the engineer Email', () => {
            const engineer = new Engineer("Bob", 2, "engineer@test.com" , 'superGithubUsername')
            expect(engineer.getEmail()).toBe('engineer@test.com')
        })
    })
    describe('getRole', ()=>{
        it('getRole returns the engineer role', () => {
            const engineer = new Engineer("Bob", 2, "engineer@test.com")
            expect(engineer.getRole()).toBe('Engineer')
        })
    })
    describe('getGithub', ()=>{
        it('getGithub returns the engineer GitHub username', () => {
            const engineer = new Engineer("Bob", 2, "engineer@test.com" , 'superGithubUsername')
            expect(engineer.getGithub()).toBe('superGithubUsername')
        })
    })
});