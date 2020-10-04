const generateLicenseBadge = licenseText => {
    let defaultLicense = "";

    if (!licenseText) {
      return '';
    } 
    else{

        switch(licenseText){

            case "Apache 2.0 License":
                defaultLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;

            case "Mozilla Public License":
                defaultLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;

            case "MIT License":
                defaultLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;

            default:
                break;
        }
    }
    return defaultLicense;
  };

const generateLicenseNotice = (licenseText) =>{
    let message =" ";
    switch(licenseText) {
        case "Apache 2.0 License":
            message = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |  License and copyright notice
Modification | Warranty    |  State changes
Distribution | Trademark use   |
Private use |     |
Patent use |     |`;
            return message;

        case "Mozilla Public License":
            message = `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work
Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |  License and copyright notice
Modification | Warranty    |  Same license (file)
Distribution | Trademark use  |  Disclose source
Private use |     |
Patent use |     |`;
            return message;

        case "MIT License":
            message = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
Permissions | Limitations  |   Conditions
------------ | ------------  | ------------
Commercial use | Liability |   License and copyright notice
Modification | Warranty    |
Distribution |     |
Private use |     |`;
            return message;
            
        case "None":
            return message;    
    }
};


const generatePage = (data) => {
    return `
${generateLicenseBadge(data.license)}

# ${data.title}

## Created by:

### ${data.name}

## License

${data.title} is licensed under the

${generateLicenseBadge(data.license)}

${data.license}

${generateLicenseNotice(data.license, data.title)}

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