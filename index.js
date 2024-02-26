const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
async function inquirerteamManager(){

inquirer.prompt([
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
        type:'choice'
    }

])
}

async function inquirerEngineer(){
inquirer.prompt([
    {

    }
])
}


