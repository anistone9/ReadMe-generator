//Import the fs module
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions to collect user input
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a brief description of the project',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'How do you install the application?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'How do you use the app?',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'What are the contribution guidelines for the app?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command can be used to run tests on the app?',
                default: 'npm test',
            },
            {
                type: 'list',
                message: 'What type of license would you like to add?',
                name: 'license',
                choices: ['Apache licence 2.0', 'Boost Software License 1.0', 'Creative Commons Atribution 4.0', 'Eclipse Public License 1.0', 'GNU General Public License v3.0', 'IBM Public License Version 1.0', 'MIT', 'Mozilla Public License 2.0'],
                default: ['MIT'],
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your github username',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
        ])
        .then((answers) => {
            const ReadMeContent = generateFile(answers);

            fs.writeFile('README.md', ReadMeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md file!')
            );
        });
}

// Function call to initialize app
questions();

//Variable linking the file where the README is generated
const generateFile = require('./utils/generateMarkdown.js');



