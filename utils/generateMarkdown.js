//function that returns licenese badged based on which license is passed in
//if not license return empty string
function renderLicense(licence) {
  if (licence === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (licence === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (licence === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licence === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (licence === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (licence === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  }
  if (licence === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }
  if (licence === "Eclipse Public License 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  if (licence === "IBM Public License Version 1.0") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
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

  - ${data.contributing}

  ## Tests

  - ${data.test}

  ## Questions

  If you have any questions about the repo, contact me directly at ${
    data.email
  }. You can also view more of my work at [$(data.github)](https://github.com/${
    data.github
  }).


`;
}

module.exports = generateMarkdown;
