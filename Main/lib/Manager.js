const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber, role){
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.role = role;
    }

    getOfficeNumber(){
        return this.resource;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Manager;