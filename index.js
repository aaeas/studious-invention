let myTeam = [Employee, Engineer, Intern, Manager];

function generateHTML() {
    // this uses 'fs' to create a new FILE
}


function generateCard() { }

// creates Engineer card
const createEngineer = () => {
    console.log('Answer the questions to assemble your team member.');
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter your name!';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter your ID!';
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter your e-mail!';
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return 'Please enter in your github username!'
                }
            }
        },
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(
                answers.engineerName,
                answers.id,
                answers.email,
                answers.github)

            teamArray.push(engineer);
            addEmployee();

        })
}
//creates Intern
const createIntern = () => {
    console.log('Answer the questions to assemble your team member.');
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter your name!';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter your ID!';
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter your e-mail!';
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            message: 'What is the name of your school?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    return 'Please enter your school name!';
                }
            }
        },
    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(
                answers.internName,
                answers.id,
                answers.email,
                answers.school)

            teamArray.push(intern);
            addEmployee();

        })
}
//Creates Manager
const createManager = () => {
    console.log('Answer the questions to assemble your team member.');
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter your name!';
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    return 'Please enter your ID!';
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return 'Please enter your e-mail!';
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    return 'Please enter your office number!';
                }
            }
        },
    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(
                answers.managerName,
                answers.id,
                answers.email,
                answers.officeNumber)

            teamArray.push(manager);
            addEmployee();

        })
}
//allows you to add employee
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of Employee would you like to add?',
            choices: ['Engineer', 'Intern', 'Manager', 'Finished adding employees'],
        }
    ])
        .then(choice => {
            switch (choice.employeeType) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                case 'Manager':
                    createManager();
                    break;
                default:
                    writeFile()
            }
        })
}


//generates html
function genHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${genManager()}
    </body>
    </html>
`
}