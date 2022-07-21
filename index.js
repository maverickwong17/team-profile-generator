const inquirer = require("inquirer")
const fs = require('fs')
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const buildPage = require("./src/buildPage")

var team = []

var teamManager = () => {
    inquirer.prompt([
        {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'name',
        },
        {
        type: 'input',
        message: `What is the team manager's ID?`,
        name: 'id',
        },
        {
        type: 'input',
        message: `What is the team manager's email address?`,
        name: 'email',
        },
        {
        type: 'input',
        message: `What is the team manager's office number?`,
        name: 'officeNumber',
        },
      ])
    .then((manData) =>{
        console.log(manData)
        team.push(new Manager(manData.name,manData.id,manData.email,manData.officeNumber))
        console.log(team)
        addTeam()
    })
}


var engineer = () => {
    inquirer.prompt([
        {
        type: 'input',
        message: `What is the engineer's name?`,
        name: 'name',
        },
        {
        type: 'input',
        message: `What is the engineer's ID?`,
        name: 'id',
        },
        {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'email',
        },
        {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'username',
        },
      ])
    .then((engData) =>{
        console.log(engData)
        team.push(new Engineer(engData.name,engData.id,engData.email,engData.username))
        console.log(team)
        addTeam()
    }
)}

var intern = () => {
    inquirer.prompt([
        {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'name',
        },
        {
        type: 'input',
        message: `What is the intern's ID?`,
        name: 'id',
        },
        {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'email',
        },
        {
        type: 'input',
        message: `What school did the intern attend?`,
        name: 'school',
        },
      ])
    .then((intData) =>{
        console.log(intData)
        team.push(new Intern(intData.name,intData.id,intData.email,intData.school))
        console.log(team)
        addTeam()
    }
)}

var addTeam = () =>{
    inquirer.prompt(    
        {
            type: 'list',
            message: "Add team member?",
            choices: ["Engineer", "Intern", "No more members."],
            name: 'add',
        })
    .then((response) => {
        let addRole = response.add
        switch(addRole){
            case "Engineer":
                engineer()
                break
            case "Intern":
                intern()
                break
            default:
                build(team)
                break
        }
    }
)}

var build = (data) =>{
    fs.writeFile("./dist/index.html", buildPage(data), (err) =>
    err ? console.err(err) : console.log('Page Built')
)}

function init(){
    teamManager()
}

init()