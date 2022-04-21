// TODO: Include packages needed for this application
const fs = require('fs');
// const utils = require('./utils');

const generateMarkdown = require('./README-Generator/generateMarkdown.js');
const inquirer = require('inquirer');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Title?',
    name: 'title' 
},
{
    type: 'input',
    message: 'Please provide a description of the project.',
    name: 'description'
},
{
    type: 'input',
    message: 'Provide directions for installing dependencies.',
    name: 'installation'
},
{
    type: 'input',
    message: 'Provide instructions for using your app.',
    name: 'usage'
},
{
    type: 'list',
    message: 'Select a license for this project.',
    choices: ['MIT', 'GNU', 'Apache'],
    name: 'license'
},
{
    type: 'input',
    message: 'How can others contribute?',
    name: 'contributing'
},
{
    type: 'input',
    message: 'Instructions for testing',
    name: 'tests'
},
{
    type: 'input',
    message: 'Where can people direct there questions regarding this project?',
    name: 'userquestions'
},
{
    type: 'input',
    message: 'Please enter credits you would like to include.',
    name: 'credits'
},
{
    type: 'input',
    message: 'Please provide your email or other contact information if you would like.',
    name: 'usercontact'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('nice')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
