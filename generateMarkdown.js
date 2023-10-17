function renderLicenseBadge(license) { }
function renderLicenseLink(license) { }
function renderLicenseSection(license) { }


function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## How to Contribute

${data.contribution}

## Test Instructions

${data.tests}

## License

${data.license}

## Questions

${data.name}
${data.email}

`;
}

module.exports = generateMarkdown;