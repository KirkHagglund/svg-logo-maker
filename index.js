// Adding required libraries for application
const inquirer = require('inquirer');
const fs = require('fs');
const logoGenerator = require('./utils/logoGenerator.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Create an array of questions for user input with Inquirer
const questions = [
        {
            type: 'maxlength-input',
            message: 'Please enter up to three characters.',
            name: 'letters',
            maxLength: 3,
        },
        {
            type: 'list',
            message: 'Please pick a text color',
            name: 'textcolor',
            choices: ['white', 'black', 'slategray', 'dodgerblue'],
        },
        {
            type: 'list',
            message: 'Please pick a shape.',
            name: 'shape',
            choices: ['square', 'circle', 'triangle'],
        },
        {
            type: 'list',
            message: 'Please pick a color.',
            name: 'color',
            choices: ['green', 'blue', 'yellow', 'red', 'purple'],
        },
    ];

// Function to write logo.svg file
function writeToFile(fileName, data) {
    process.chdir('logos');
    return fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.log(err);
        };
        console.log('Generated logo.svg');
    });
}

// Function to initialize application
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile('logo.svg', logoGenerator(data));
    });
}

// Call initialize function
init();
