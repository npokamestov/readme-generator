const generateLicense = licenseText => {
    let defaultLicense = "";

    if (!licenseText) {
      return '';
    } 
    else{

        switch(licenseText){

            case "Apache 2.0":
                defaultLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;

            case "MIT":
                defaultLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;

            case "ISC":
                defaultLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                break;
                
            case "IBM Public license":
                defaultLicense = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";    
                break;

            case "Mozilla Public license":
                defaultLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;

            case "Artistic license 2.0":
                defaultLicense = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
                break;

            default:
                break;
        }
    }
    return defaultLicense;
  };


const generatePage = (data) => {
    return `
# ${data.title}

## Created by:

### ${data.name}

## License

${generateLicense(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Test](#test)

* [Contact](#contact)

## Installation

To Install necessary dependencies, run the following command:  

\`\`\`
${data.install}
\`\`\`

## Usage

${data.usage}

## Contributing

If you want to know about contributing to the repo:

${data.contribution}

## Tests

To run the tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions?

If there are any questioins please refer to this email or leave a comment in the repository

Email: ${data.email}

Github Website: https://github.com/${data.username}/
`;
    
};
    
module.exports = generatePage;