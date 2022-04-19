class Employee {

    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// We are makeing the class definition available outside of this file (so others can import/require it)
module.exports = Employee;

// -- REFERENCE -- //
// function Employee(name, id, email) {

//     function getName() {

//     }

//     return {
//         name: name,
//         id: id,
//         email: email
//     }
// }

// let bert = new Employee("Burt", 84, "burt@company.net");
// console.log(newGuy.name);
// newGuy.getName();

//let sarah = new Employee("Sarah", 14, "sarah@company.net");
//sarah.getOfficeNumber();