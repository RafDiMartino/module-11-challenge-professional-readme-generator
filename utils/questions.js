// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (answer) => {
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
        validate: (answer) => {
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
        validate: (answer) => {
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
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter valid usage instructions");
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license type for this project',
        choices: [
            "MIT license", 
            "Apache License 2.0", 
            "GNU General Public License v3.0",
            "Mozilla Public License 2.0",
            "Common Development and Distribution License 1.0 (CDDL)",
            "The Unlicense",
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributions instuctions:',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter valid contributions instructions");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide the test descriptions for your application',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter valid tests instructions");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github profile username',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid github profile username");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address for a user to reach out if they have a question',
        validate: (answer) => {
            if (answer === "") {
                return console.log("Enter a valid email address");
            }
            return true;
        }
    },
];

export { questions };