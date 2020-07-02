// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![licensebadge](https://img.shields.io/badge/license-${data.license}-red)

  ## Description 

  ${data.description}
  
  
  ## Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}

  
  ## Credits
  
  ${data.credits}  
  
  
  ## License
  
  ${data.license}

  
  ## Contributing
  
  ${data.contributing}

  
  ## Tests
  
  ${data.tests}


  ## Questions
  For questions you can contact me here:
  * GitHub Username: https://github.com/${data.username}/
  * email: ${data.email}
`;
}

module.exports = generateMarkdown;
