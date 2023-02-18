// Adding required libraries for application
const inquirer = require('inquirer');
const fs = require('fs');
const logoGenerator = require('./utils/logoGenerator.js');
const shapes = require('./utils/shapes.js');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const circle = `circle cx="150" cy="100" r="80"`;
const square = `rect width="100" height="100"`;
const triangle = ``;

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
            message: 'Please pick a shape.',
            name: 'shape',
            choices: [square, circle, triangle],
        },
        {
            type: 'list',
            message: 'Please pick a color',
            name: 'color',
            choices: ['green', 'blue', 'yellow', 'red', 'purple'],
        },
    ];

// Function to write logo.svg file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else console.log('logo Successfully Generated!');
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
