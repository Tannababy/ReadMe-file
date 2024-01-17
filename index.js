const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = [
  {
    name: "github",
    type: "input",
    message: "What is your GitHub username? (No @ needed)",
    default: "tannababy",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "title",
    type: "input",
    message: "What is the the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "What is the the Description of your project? Why was it created?",
  },
  {
    name: "screenshot",
    type: "input",
    message: "Add a screenshot using ![alt text](assts/images/screenshot.png)",
  },
  {
    name: "installation ",
    type: "input",
    message:
      "If applicable, describe the steps required to install your project for the Installation section, if not type N/A",
  },
  {
    name: "usage",
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
  },
  {
    name: "contributing",
    type: "input",
    message:
      "If applicable, provide guidelines on how other developers can contribute to your project.",
  },
  {
    name: "tests",
    type: "input",
    message:
      "If applicable, provide any tests written for your application and provide examples on how to run them.",
  },
  {
    name: "questions",
    type: "input",
    message: "Create a Questions section here by typing 'Questions'",
  },
  {
    name: "licence",
    type: "list",
    message: "Select a licence",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Eclipse Public License 1.0",
      "Mozilla Public License 2.0",
      "Apache",
      "MIT",
      "Boost Software License 1.0",
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {}
const file = ``;

fs.writeFile("NewReadMe.MD", generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log(`Success!`)
);
// function to initialize program
function init() {}

// function call to initialize program
init();
