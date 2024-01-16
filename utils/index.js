const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "What is the the Description of your project?",
  },
  {
    name: "tableOfContents",
    type: "input",
    message: "Fill in Table of Contents",
  },
  {
    name: "installation ",
    type: "input",
    message:
      "Fill out Installation instructions if applicaple, if not type N/A",
  },
  {
    name: "Usage",
    type: "input",
    message: "What is the Usage of this project?",
  },
  {
    name: "licence",
    type: "list",
    message: "Select a licence",
    choices: ["Mit", ""],
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
