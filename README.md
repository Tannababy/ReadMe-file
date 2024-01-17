# ReadMe-file 📁

# Installation

To initiate your own README, git clone the repo down to your local, for best practice, work off a branch before merging to main.

Run npm install in order to install the following npm package dependencies as specified in the package.json:

Include .gitignore file to hide node modules.

## Description

In this week's challenge :star_struck:, we were tasked with creating an application that a developer can use to dynamically generate a professional README.md file, to focus more time and energy on the main project.

## Usage

![Gif of app demonstration](./assets/Demo-vid.gif)

Run node index.js in the command line of the file's directory to start the application. The application utilises inquirer to generate a series of questions to prompt the user for data.
Based off the users responses alone, the application will generate a markdown file containing the following:

- Title
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Test and
- Questions

The README will also include badges for the license.
Finally, fs.writeFile is used to generate the project's README.md file.

## Credits

- Overall guidance and provision of necessary materials for this challenge from the EdX Front-End Web Development Bootcamp instructor and teaching assistants (Oct2023 Cohort).
- License Badges - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License

Licensed under the MIT license.
