const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {

    getGithub(){
        return this.resource;
    }

    getRole(){
        return 'Engineer';
    }
}