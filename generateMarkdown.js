// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeColor(license) {
  let licenseColor = "";
  if(license === "MIT") {
    licenseColor = 'yellow'
  } else if (license == "GNU") {
    licenseColor = 'blue'
  } else {
    licenseColor = 'blue'
  }
  return licenseColor
};
function renderLicenseBadge(license) {
  const licenseColor = renderLicenseBadgeColor(license);
  if(license !== 'none') {
    return `![License](https://img.shields.io/badge/License-${license}-${licenseColor}.svg)`
  }
    return "";
}
renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'GNU GPL v3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'No License':
      licenseLink = '';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);
  let licenseSection = ` The ${license} License has been issued for this project to learn more, visit ${licenseLink}`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
  # Description
  ${data.description}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.userquestions}

## Credits
${data.credits}

## Contact
${data.usercontact}

`;

}

module.exports = generateMarkdown;
