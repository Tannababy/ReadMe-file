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
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    },
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
    default: "Project Title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    name: "description",
    type: "input",
    message: "What is the the Description of your project? Why was it created?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Success! Your ${fileName} file has been generated.`);
    }
  });
}
// function to initialize program
async function init() {
  try {
    //Prompt Inquirer questions
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);
    console.log(
      "Thank you for your responses. Fetching your Github data next.."
    );
    const userInfo = await api.getUser(userResponses);
    console.log("Your GitHub user info: ", userInfo);

    //Pass Inquirer userResponses
    console.log("Generating your README next...");
    const markdown = generateMarkdown(userResponses, userInfo);
    console.log(markdown);

    //Write README file
    writeToFile("NewREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

// function call to initialize program
init();
