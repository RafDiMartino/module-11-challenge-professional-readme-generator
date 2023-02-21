import fs from "node:fs";
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import { questions } from "./utils/questions.js";
import { licenseBadge } from "./utils/generateBadges.js";

// function to write README file
function writeToFile(answers) {
    // greate anew dir if there isn't one
    fs.mkdir("./generated-files", { recursive: true }, (err) => {if (err) throw err;})
    
    // generate a new markdown file 
    fs.writeFile(`./generated-files/README.md`, generateMarkdown(answers), (err) => err ? console.error(err) : console.log("Success! You README.md file has been generated in the generated-files folder"));
}   

// async function to initialise the program
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      answers.licenseBadge = licenseBadge(answers.license);
      writeToFile(answers)
      
    }catch (err) { 
        throw err;
    }
}

// function call to initialize program
init();