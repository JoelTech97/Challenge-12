const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

const employees = [];
// TODO: Write Code to gather information about the development team members, and render the HTML file.
const inquirerManager = async() => {
    const {name, id,email, officeNumber, menuchoice } = await inquirer.prompt([
    {
        type: 'input',
        name:'name',
        message: 'Please enter the team managers name' 
    } , 
    {
        type: 'input',
        name:'id',
        message: 'What is your ID number'
    }, 
    {
        type:'input',
        name:'email',
        message:'enter your email address'
    },
    {
        type:'input',
        name:'officeNumber',
        message:'What is your office number'
    }, 
    {
        type: 'list',
        name: 'menuchoice',
        message: 'What would you want to do now?',
        choices: ['add an Engineer', 'add an Intern', 'Finish the project']
    }
]);

// Switch statement to handle user's choice
switch (menuchoice) {
    case 'add an Engineer':
        const engineerInfo = await inquirerEngineer();
        employees.push(engineerInfo);
        break;
    case 'add an Intern':
        const internInfo = await inquirerIntern();
        employees.push(internInfo);
        break;
    case 'Finish the project' :
        generateHTML(employees);
        break;
        default:
            console.log('Error');
            break;
}
};

const inquirerEngineer = async () => {
const {name, id, email, github} = await inquirer.prompt([
      {  
    type: 'input',
    name:'name',
    message: 'Please enter the name of the engineer' 
} , 
{
    type: 'input',
    name:'id',
    message: 'What is your ID number'
}, 
{
    type:'input',
    name:'email',
    message:'enter your email address'
}, 
{
    type:'input',
    name:'github username',
    message:'please enter your github username'
}
]);

const engineer = new Engineer(name,id,email,github);
return engineer;
};

const inquirerIntern = async () => {
   const{ name,id,email,school} = await inquirer.prompt([
          {  
        type: 'input',
        name:'name',
        message: 'Please enter the name of the intern' 
    } , 
    {
        type: 'input',
        name:'id',
        message: 'What is your ID number'
    }, 
    {
        type:'input',
        name:'email',
        message:'enter your email address'
    }, 
    {
        type:'input',
        name:'school',
        message:'please enter the name of your school'
    }
    ]);
    const intern = new Intern(name,id,email,school);
    return intern;
    };
    const generateHTML = (employees) => {
    const html = render(employees)
        fs.writeFileSync(outputPath,html);
        console.log("HTML file written to");
        process.exit(0);
    }
inquirerManager();
