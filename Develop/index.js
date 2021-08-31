// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
            // Project title
        type: 'input',
        name: 'title',
        message: 'What is your Projects title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    {
            // Project description
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
            // installation instruction
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?'
    },
    {
            // usage information
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
            // contribution guidelines
        type: 'input',
        name: 'contributions',
        message: 'What were the contributions to this project:'
    },
    {
            // test instructions
        type: 'input',
        name: 'testing',
        message: 'What testing was done on this project?'
    },
    {
            // license choice from list of options
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: []
    },
    {
            // github username
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
            // email address
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
