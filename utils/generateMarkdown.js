//function that returns licenese badged based on which license is passed in
//if not license return empty string
function renderLicense(licence) {
  if (licence === "Apache") {
    return "![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)";
  }
  if (licence === "MIT") {
    return "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description


  ## Table of Contents

  - [Licenense](#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## License

  - ${renderLicense(data.license)}

  ## Installation 

  ## Usage

  ## Contributing

  ## Tests

  ## Questions

  If you have any questions about the repo, contact me directly at ${data.email}

  ##
`;
}

module.exports = generateMarkdown;
