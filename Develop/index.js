const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

const data = {}

// function to initialize program
function init() {
    // array of questions for user
inquirer.prompt([{
    type: 'input',
    message: 'What is the title of your project? (Required)', 
    name: 'title',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter your projects title!');
        }
    }
},
{
    type: 'input',
    message: 'Please provide a description of your project. (Required)',
    name: 'description',
    validate: descrInput => {
        if (descrInput) {
            return true;
        } else {
            console.log('Please enter a description of your project');
        }
    }
},
{
    type: 'input',
    message: 'What dependancies need to be installed with your project? (Required)', 
    name: 'installation',
    validate: installInput => {
        if (installInput) {
            return true;
        } else {
            console.log('Please provide dependancies installation steps');
        }
    }
},
{
    type: 'input',
    message: 'Please explain how to use this application. (Required)',
    name: 'usage',
    validate: useageInput => {
        if (useageInput) {
            return true;
        } else {
            console.log("Please provide instructions on how to use this program!");
        }
    }
},
{
    type: 'input',
    message: "Please list any third-party assets or collaborators that were assisted in this project.",
    name: "credits",
},
{
    type: 'list',
    message: "What licenses do you have?",
    choices: ["MIT", "GNU", "Apache", "GPL"],
    name: "license"
},
{
    type: 'input',
    message: "If you would like other to contribute to this progam, please provide details of how they can contribute.",
    name: 'contributing'
},
{
    type: 'input',
    message: "Enter instructions on how to test this program.",
    name: "tests"
},
{
    type: 'input',
    message: 'What is your GitHub Username?',
    name: 'username'
},
{
    type: 'input',
    message: 'What is your email address? Please list the full address.',
    name: 'email'
}

]).then(userInput => {
    data.title = userInput.title;
    data.description = userInput.description;
    data.installation = userInput.installation;
    data.usage = userInput.usage;
    data.credits = userInput.credits;
    data.license = userInput.license;
    data.contributing = userInput.contributing;
    data.tests = userInput.tests;
    data.username = userInput.username;
    data.email = userInput.email;
    // function to write README file
    const outPut = generateMarkdown(data)    
        fs.writeFile("../sample-README.md", outPut, (err) => {
            if (err) {
                throw (err)
            } else {
        console.log("Success! Your updated ReadMe awaits!")
        }
  })
})
}

// function call to initialize program
init();
