const Employee = require('./Employee');

class Engineer extends Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getGithub() {
        return this.gitGithub;
    }

    getRole() {
        return 'Engineer';
    }
};


// We are makeing the class definition available outside of this file (so others can import/require it)
module.exports = Engineer;
