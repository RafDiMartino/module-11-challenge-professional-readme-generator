// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ${data.licenseBadge}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about the project please contact me on:
   * GitHub: [${data.github}](https://github.com/${data.github})
   * Email: ${data.email}

  ## License
  Click on the badge to read about the type of license this project is under
  
  ${data.licenseBadge}
`;
}

export { generateMarkdown };