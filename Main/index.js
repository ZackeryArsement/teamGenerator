// Import team member Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import inquirer for prompts and fs to create HTML file
const inquirer = require('inquirer');
const fs = require('fs');

const pageHTML = require('./src/page-template');

const teamMembers = [];

console.log('Welcome to Team Generator!');

addTeamMember('Manager');

function addTeamMember(role){
    // Array of questions for the prompt function to run through
    const arrayQuestions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee\'s work ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
            when: role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github username?',
            when: role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school name?',
            when: role === 'Intern'
        }
    ];

    // Create new constructs depending on the current role selected
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
                init();
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
                init();
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
                init();
            });
            break;
    }
}

// Create index.html using the generated card HTML's and a default page HTML
function init(){
    fs.writeFileSync('index.html', pageHTML(cardHTML()));
}

// Prompt to check if the user would like to add another team member
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

// Use the teamMember array to create cards to put into the page HTML
function cardHTML(){
    // For every Class constructor in the 'teamMember' array we want to create a new card with that member's information
    return teamMembers.map(member => {
        // We change the last listed data parameter depending on the role of the employee
        switch(member.role){
            case 'Manager':
                return `<div class="card bg-primary m-2" style="width: 18rem;">
                    <div class="card-body text-white">
                        <h2 class="card-title">${member.name}</h2>
                        <h3 class="card-subtitle">${member.role}</h3>
                    </div>
                    <ul class="list-group list-group-flush m-2 rounded">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: ${member.email}</li>
                        <li class="list-group-item">Office #: ${member.officeNumber}</li>
                    </ul>
                </div>`;
            case 'Intern':
                return `<div class="card bg-primary m-2" style="width: 18rem;">
                    <div class="card-body text-white">
                        <h2 class="card-title">${member.name}</h2>
                        <h3 class="card-subtitle">${member.role}</h3>
                    </div>
                    <ul class="list-group list-group-flush m-2 rounded">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: ${member.email}</li>
                        <li class="list-group-item">School: ${member.school}</li>
                    </ul>
                </div>`;
            case 'Engineer':
                return `<div class="card bg-primary m-2" style="width: 18rem;">
                    <div class="card-body text-white">
                        <h2 class="card-title">${member.name}</h2>
                        <h3 class="card-subtitle">${member.role}</h3>
                    </div>
                    <ul class="list-group list-group-flush m-2 rounded">
                        <li class="list-group-item">ID: ${member.id}</li>
                        <li class="list-group-item">Email: ${member.email}</li>
                        <li class="list-group-item">Github: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>
                    </ul>
                </div>`;
        }
    }

    )
    // After the card HTMLs have been put into an array we want to turn this array into one string, so we can put that string into our HTML page
    .join('');
}