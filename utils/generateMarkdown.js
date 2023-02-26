// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)   

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

module.exports = generateMarkdown;


