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
        // validate: (answer) => {
        //     answer === "" ? console.log("Enter a valid title for your project") : true;
        // }
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter a valid title for your project");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description?',
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter a valid project description");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter valid installation instructions");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter valid usage instructions");
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license Type for this project',
        choices: [
            "MIT license", 
            "Apache License 2.0", 
            "GNU General Public License v3.0",
            "Creative Commons Zero v1.0 Universal",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributions instuctions',
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter valid contributions instructions");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test for your application',
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter valid tests instructions");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter an email address for a user to reach out if they have a question',
        validate: function (answer) {
            if (answer === "") {
                return console.log("Enter a valid email address");
            }
            return true;
        }
    },

    ]).then((data)=> {


    writeToFile("README.MD", data)
    const readableData = data

})

// function to write README file
function writeToFile(fileName, data) {
    const {title, description, installation, usage, license, contributing, questions, tests} = data

    console.log(title, description, installation, usage, license, contributing, questions, tests);
    fs.writeFile("README.md", JSON.stringify(data, null, "\t"), (err) =>err ? console.log(err):console.log("Success!"))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// const writeFileAsync = util.promisify(fs.writeFile);