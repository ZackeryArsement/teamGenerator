const inquirer = require('inquirer');
const Employee = require('./Employee')

class Manager extends Employee{

    getOfficeNumber(){
        return this.resource;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Manager;