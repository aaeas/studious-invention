const Employee = require('./Employee')

class Manager extends Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getOfficeNumber() {
        return this.getOfficeNumber;
    }

    getRole() {
        return 'Employee';
    }
}

// We are makeing the class definition available outside of this file (so others can import/require it)
module.exports = Employee;
