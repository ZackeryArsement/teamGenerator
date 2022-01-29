const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const parth = require('path');
const fs = require('fs');
const Employee = require('./lib/Employee');

const teamMembers = [];

function runAgain(){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'run',
            message: 'Would you like to add another team member?',
            choices:['Engineer', 'Intern', 'No']
        }
    ]);
}

addTeamMember('Manager');

function addTeamMember(role){
    const arrayQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your work ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            when: role === 'Manager'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your github username?',
            when: role === 'Engineer'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your school name?',
            when: role === 'Intern'
        }
    ];

    if(role === 'Manager'){
        inquirer.prompt(arrayQuestions)
        .then((info) => {teamMembers.push(new Employee(role, info.officeNumber, info.name, info.id, info.email))})
        .then(runAgain)
        .then((response) => {
            if(response.run !== 'No'){
                addTeamMember(response.run);
            }
            else{
                console.log(teamMembers[0]);
            }
        });
    }
    else{
        inquirer.prompt(arrayQuestions)
        .then((info) => {teamMembers.push(new Employee(role, info.officeNumber, info.name, info.id, info.email))})
        .then(runAgain)
        .then((response) => {
            if(response.run !== 'No'){
                addTeamMember(response.run);
            }
            else{
                console.log(teamMembers[0].getOfficeNumber());
            }
        });
    }
}

// const DIST_DIR = path.resolve(__dirname, 'dist');
// const distPath = path.join(DIST_DIR, 'team.html');

// const render = require('./src/page-template.js');

// const idArray = [];

// console.log('Welcome to Team Generator!');

// const generalHTML1 = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="X-UA-Compatible" content="ie=edge" /><link href="./dist/reset.css" /><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" /><link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" /><link rel="stylesheet" href="./dist/style.css" /><title>Team Generator</title></head><body class="bg-light"><div class="jumbotron jumbotron-fluid bg-danger"><div class="container text-center"><h1 class="display-4">My Team</h1></div></div><div class="row justify-content-center"></div>';
// const generalHTML2 = '</div></body></html>'

// function init(){
//     promptUser()
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', (generalHTML1 + generalHTML2)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// }

// // init();

// fs.writeFileSync('team.html', (generalHTML1 + generalHTML2))