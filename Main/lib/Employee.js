const inquirer = require("inquirer");

class Employee{
    constructor(role, resource, name, id, email){
        this.role = role;
        this.resource = resource;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Employee;