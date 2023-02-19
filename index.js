const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions")

// function to write README file
function writeToFile(answers) {
    fs.mkdir("./generated-files", { recursive: true }, (err) => {if (err) throw err;})
    fs.writeFile(__dirname + `/generated-files/README.md`, generateMarkdown(answers), (err) => err && console.error(err));
}   

// async function to initialise the program
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      writeToFile(answers)
    }catch (err) { 
        throw err;
    }
}

// function call to initialize program
init();