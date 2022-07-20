const inquirer = require("inquirer")
const fs = require('fs')
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const questions = [
    {
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        message: 'What is your contact email?',
        name: 'email',
    },
    {
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        message: 'Please write a short description of yoour project:',
        name: 'description',
    },
    {
        type: "list",
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        name: 'install',
    },
    {
        message: 'What command should be run to run test?',
        default: 'npm test',
        name: 'test',
    },
    {
        message: 'How do we make use of the project?',
        name: 'usage',
    },
    {
        message: 'How can others contribute to the project?',
        name: 'contribute',
    },
];




inquirer.prompt()