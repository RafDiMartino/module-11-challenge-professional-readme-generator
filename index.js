const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions")


// function to write README file
function writeToFile(fileName, data) {
    const {title, description, installation, usage, license, contributing, questions, tests} = data

    console.log(title, description, installation, usage, license, contributing, questions, tests);
    fs.writeFile("README.md", JSON.stringify(data, null, "\t"), (err) =>err ? console.log(err):console.log("Success!"))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => {
        writeToFile("README.MD", data)
        const readableData = data
    })
}


// function call to initialize program
init();