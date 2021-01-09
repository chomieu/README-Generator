// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      break
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
      break
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
      break
    default:
      return ""
  }
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://choosealicense.com/licenses/mit)"
      break
    case "GNU GPLv3":
      return "(https://choosealicense.com/licenses/gpl-3.0)"
      break
    case "Unlicense":
      return "(https://choosealicense.com/licenses/unlicense)"
      break
    default:
      return ""
  }
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return ""
  } else {
    return `\n\n## License\n[${license}]${renderLicenseLink(license)}`
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n${renderLicenseBadge(data.license) + renderLicenseLink(data.license)}
  \n## Description\n${data.description}
  \n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)
  \n## Installation\n${data.installation} 
  \n## Usage\n${data.usage}
  \n## Contributing\n${data.contributing}
  \n## Tests\n${data.tests}`
  + renderLicenseSection(data.license) +
  `\n\n## Questions\nFor questions, contact [${data.username}](https://github.com/${data.username}) or email ${data.email}`
}

// Exports generateMarkdown function
module.exports = {generateMarkdown};