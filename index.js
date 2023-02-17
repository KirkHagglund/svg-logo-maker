// Adding required libraries for application
const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Create an array of questions for user input with Inquirer
inquirer.createPromptModule([
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
    },
    {
        type: 'list',
        message: 'Please pick a color',
        name: 'color',
    },
]);
