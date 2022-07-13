const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile }  = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');

const teamData = [];  

console.log("--------Welcome-----------")

// Manager
const addManager = async () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'Enter Team Manger Name',
            validate: nameInput_1 => {
                if (nameInput_1)
                    return true;
                else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: 'Enter Manger ID',
        },

        {
            type: 'text',
            name: 'email',
            message: 'Enter Manger Email Address.',
            validate: emailInput_1 => {
                if (new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$').test(emailInput_1)) {
                    return true;
                } else {
                    console.log("Please enter your email again ");
                    return false;
                }
            }
        },

        {
            type: 'text',
            name: 'number',
            message: 'Enter Manger Office Number i.e 123-456-5678',
            validate: numberInput_1 => {
                if (new RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$').test(numberInput_1)) {
                    return true;
                } else {
                    console.log("Please your phone number in the right format ");
                    return false;
                }
            }
        },
    ])
    .then(managerData => {
        teamData.push (new Manager(
            managerData.name,
            managerData.id,
            managerData.email,
            managerData.number
            ));    
        addMembers();
    });
};

// Choices
const addMembers = () => {

    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Select one of the below option',
            choices: ['Want to add an Engineer', 'Want to add an Intern', 'Done with Team Building']
        },
    ]).then(data => {
        switch (data.choice) {
            case "Want to add an Engineer":
                addEngineer()
                break;

            case "Want to add an Intern":
                addIntern();
                break;
            default: 
                {
                    const data = generatePage(teamData);
                    writeFile(data)
                    .then(writeFileResponse =>{
                        console.log(writeFileResponse);
                        copyFile();
                    });
                }
        }
    });
}

// Engineer
const addEngineer = async () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'Enter Engineer Name',
            validate: nameInput => {
                if (nameInput)
                    return true;
                else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },

        {
            type: 'text',
            name: 'id',
            message: 'Enter Engineer ID',
        },

        {
            type: 'text',
            name: 'email',
            message: 'Enter Engineer Email Address.',
            validate: emailInput => {
                if (new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$').test(emailInput)) {
                    return true;
                } else {
                    console.log("Please enter your email again ");
                    return false;
                }
            }
        },

        {
            type: 'text',
            name: 'github',
            message: 'Enter Engineer Github user name',
        },
    ])
    .then(engineerData => {
        teamData.push (new Engineer(
            engineerData.name,
            engineerData.id,
            engineerData.email,
            engineerData.github
            ));        
        addMembers();
    });  
};

// Intern
const addIntern = async () => {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'Enter Intern Name',
            validate: nameInput => {
                if (nameInput)
                    return true;
                else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        },

        {
            type: 'text',
            name: 'id',
            message: 'Enter Intern ID',
        },

        {
            type: 'text',
            name: 'email',
            message: 'Enter Intern Email Address',
            validate: emailInput => {
                if (new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$').test(emailInput)) {
                    return true;
                } else {
                    console.log("Please enter your email again ");
                    return false;
                }
            }
        },

        {
            type: 'text',
            name: 'school',
            message: 'Enter Intern School Name',
        },
    ]).then(InternData => {
        teamData.push (new Intern(
            InternData.name,
            InternData.id,
            InternData.email,
            InternData.school
            ));       
        addMembers();
    });
};

addManager();
