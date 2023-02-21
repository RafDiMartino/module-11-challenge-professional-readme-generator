const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions")
const licenseBadge = require("./utils/generateBadges");

// function to write README file
function writeToFile(answers) {
    // greate anew dir if there isn't one
    fs.mkdir("./generated-files", { recursive: true }, (err) => {if (err) throw err;})
    
    // generate a new markdown file 
    fs.writeFile(__dirname + `/generated-files/README.md`, generateMarkdown(answers), (err) => err && console.error(err));
}   

// async function to initialise the program
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      answers.licenseBadge = licenseBadge(answers.license);
      console.log("Success! You README.md file has been generated in the generated-files folder")
      writeToFile(answers)
      
    }catch (err) { 
        throw err;
    }
}

// function call to initialize program
init();