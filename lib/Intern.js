const Employee = require('./Employee')

class Intern extends Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getSchool() {
        return this.getSchool;
    }
    getRole() {
        return 'Intern';
    }
}

// We are makeing the class definition available outside of this file (so others can import/require it)
module.exports = 'Intern';
