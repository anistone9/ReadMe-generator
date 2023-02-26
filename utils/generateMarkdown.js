// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache licence 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        case 'Creative Commons Atribution 4.0':
            return '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'
        case 'Eclipse Public License 1.0':
            return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        case 'IBM Public License Version 1.0':
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }

    return `![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    //const licenseBadge = renderLicenseBadge(data.license);
    return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description
${data.description}  
    
## Table of Contents 
    
- [Description](#description)   
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)   
- [Contributing](#contributing)   
- [Tests](#tests)   
- [Questions](#questions)   
    
## Installation
${data.installation}   
    
## Usage   
${data.usage}
    
## License   
This application is covered under the following license: ${data.license}
    
## Contributing    
${data.contributing}   
    
## Tests    
${data.tests}  
    
## Questions   
Link to GitHub profile: ${data.github}   
For additional questions, please contact me at: ${data.email}
`;
}

//Export the generateMarkdown function  to make it available to index.js file
module.exports = generateMarkdown;


