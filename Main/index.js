// Import team member Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import inquirer for prompts and fs to create HTML file
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');

const teamMembers = [];

console.log('Welcome to Team Generator!');


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
            name: 'github',
            message: 'What is your github username?',
            when: role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
            when: role === 'Intern'
        }
    ];

    switch(role){
        case 'Manager':
            inquirer.prompt(arrayQuestions)
            .then((info) => {teamMembers.push(new Manager(info.name, info.id, info.email, info.officeNumber, role))})
            .then(runAgain)
            .then((response) => {
                if(response.run !== 'No'){
                    addTeamMember(response.run);
                    return;
                }
                // Create HTML
            });
            break;
        case 'Intern':
            inquirer.prompt(arrayQuestions)
            .then((info) => {teamMembers.push(new Intern(info.name, info.id, info.email, info.school, role))})
            .then(runAgain)
            .then((response) => {
                if(response.run !== 'No'){
                    addTeamMember(response.run);
                    return;
                }
                // Create HTML
            });
            break;
        case 'Engineer':
            inquirer.prompt(arrayQuestions)
            .then((info) => {teamMembers.push(new Engineer(info.name, info.id, info.email, info.github, role))})
            .then(runAgain)
            .then((response) => {
                if(response.run !== 'No'){
                    addTeamMember(response.run);
                    return;
                }
                // Create HTML
            });
            break;
    }
}

// const DIST_DIR = path.resolve(__dirname, 'dist');
// const distPath = path.join(DIST_DIR, 'team.html');

// const render = require('./src/page-template.js');



// function init(){
//     promptUser()
//     // Use writeFileSync method to use promises instead of a callback function
//     .then((answers) => fs.writeFileSync('index.html', (generalHTML1 + generalHTML2)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// }

// // init();

// fs.writeFileSync('team.html', (generalHTML1 + generalHTML2))