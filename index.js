// Calls the inquirer and fs packages
const inquirer = require("inquirer")
const fs = require("fs")

// Prompts for user input then processes the response
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Project Title:"
    },
    {
        type: "input",
        name: "description",
        message: "Description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Information:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contribution Guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Test Instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a License:",
        choices: ["MIT", "GPL-3.0", "Unlicense"]
    },
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
]).then(response => {

    // Returns matching badge
    function getBadge(license) {
        switch (license) {
            case "MIT":
                return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
                break
            case "GPL-3.0":
                return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
                break
            case "Unlicense":
                return "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
        }
    }

    // Template gets filled based on the user's response to each question
    const template =
        `# ${response.title}\n${getBadge(response.license)}
        \n## Description\n${response.description}
        \n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)
        \n## Installation\n${response.installation} 
        \n## Usage\n${response.usage}
        \n## Contributing\n${response.contributing}
        \n## Tests\n${response.tests}
        \n## License\n[${response.license}](https://choosealicense.com/licenses/${response.license.toLowerCase()}/)
        \n## Questions\nFor questions, contact github.com/${response.username} or email ${response.email}`

    // Creates the README file and log the error or success massage to the console 
    fs.writeFile("README.md", template, (err) =>
        err ? console.error(err) : console.log("success"))
})