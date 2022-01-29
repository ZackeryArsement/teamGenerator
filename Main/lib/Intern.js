const inquirer = require('inquirer');
const Employee = require('./Employee')

class Intern extends Employee{

    getSchool(){
        return this.resource;
    }

    getRole(){
        return 'Intern';
    }
}