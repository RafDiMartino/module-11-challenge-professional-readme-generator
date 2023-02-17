const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Select the license Type for this project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributions instuctions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test for your application',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter an email address for a user to reach out if they have a question',
    },

    ]).then((data)=> {


    writeToFile("README.MD", data)
    const readableData = data

})

// function to write README file
function writeToFile(fileName, data) {
    const {title, description, installation, usage, license, contributing, questions, tests} = data

    console.log(title, description, installation, usage, license, contributing, questions, tests);
   
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
