const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
    },
    {
        type: "input",
        name: "table of contents",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the description of the project?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
    },
    {
        type: "input",
        name: "table of contents",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the description of the project?"
    }
]).then(answer => {
    fs.writeFile("README.md", JSON.stringify(answer), (err) =>
        err ? console.error(err) : console.log("success"))
})