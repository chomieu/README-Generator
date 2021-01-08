const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Project Title:"
    },
    {
        type: "input",
        name: "description",
        message: "Description"
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
        message: "Contribution Guidelines"
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
        choices: ["MIT", "GNU GPLv3", "Apache", "Boost", "Eclipse", "Mozilla", "Unlicense"]
    },
    {
        type: "input",
        name: "questions",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
]).then((answer) => {
    fs.writeFile("README.md", JSON.stringify(answer), (err) =>
        err ? console.error(err) : console.log("success"))
})