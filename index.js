// Includes packages needed for this application
const generate = require("./generateMarkdown.js")
const inquirer = require("inquirer")
const fs = require("fs")

// Creates an array of questions for user input
const questions = [{
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
    choices: ["MIT", "GNU GPLv3", "Unlicense", "No license"]
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
}];

// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("success"))
}

// Creates a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("README.md", response)
    })
}

// Function call to initialize app
init();