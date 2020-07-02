const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');
const data = {}

// array of questions for user
function init() {
inquirer.prompt([{
    type: 'input',
    message: 'What is the title of your project? (Required)', 
    name: 'title'
},
{
    type: 'input',
    message: 'Please provide a description of your project',
    name: 'description'
},
{
    type: 'input',
    message: 'What dependancies did you use with this project, (what do you need to have installed to run this program)?', 
    name: 'installation'  
},
{
    type: 'input',
    message: 'Please explain how to use this application',
    name: 'usage'
},
{
    type: 'input',
    message: "Who helped you with this project. Please give them some credit",
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

// function to write README file
]).then(userInput => {
    data.title = userInput.title;
    data.description = userInput.description;
    data.installation = userInput.installation;
    data.usage = userInput.usage;
    data.credits = userInput.credits;
    data.license = userInput.license;
    data.badges = userInput.badges;
    data.contributing = userInput.contributing;
    data.tests = userInput.tests;
    data.username = userInput.username;
    data.email = userInput.email;
    
    const outPut = generateMarkdown(data)    
        fs.writeFile("../README.md", outPut, (err) => {
            if (err) {
                throw (err)
            } else {
        console.log("Success!")
        }
  })
})
}

// function call to initialize program
init();
