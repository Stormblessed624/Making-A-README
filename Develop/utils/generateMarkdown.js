// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  }
  else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`;
  }
  else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`;
  }
  else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return ''
  }
  else if (license === 'Apache') {
     return `[Apache](https://choosealicense.com/licenses/apache-2.0/)`
  }
  else if (license === 'MIT') {
    return `[MIT](https://choosealicense.com/licenses/mit/)`;
  }
  else if (license === 'GNU GPLv3') {
    return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  }
  return `
  ## License
  Licensed under the ${renderLicenseLink(license)} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.testing}

  ## Questions?
  - Reach me at my email: ${data.email}
  - GitHub username: [${data.username}](https://github.com/${data.username}/)

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
