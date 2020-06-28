const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const data = {}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt([{
    type: 'input',
    message: 'What is the title of your project? (Required)', 
    name: 'title'
},
{
    type: 'input',
    message: 'Please provide a discription of your project',
    name: 'description'
},
{
    type: 'input',
    message: 'What dependancies did you use with this project?', 
    name: 'installation'  
},
{
    type: 'input',
    message: 'Please explain what this application will be used for',
    name: 'usage'
},
{
    type: 'input',
    message: "Who helped you with this project. Please give them some credit",
    name: "credit",
},
{
    type: 'list',
    message: "What licenses do you have?",
    choices: ["MIT", "GNU", "Apache", "GPL"],
    name: "license"
} 

]).then(userInput => {
    data.title = userInput.title;
    data.description = userInput.description
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
