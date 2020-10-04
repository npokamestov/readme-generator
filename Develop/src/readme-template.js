const generatePage = (data) => {
    return `# ${data.title}

    ## Created by:
    ### ${data.name}

    ## License
    ${data.license}

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
    _${data.install}_

    ## Usage
    ${data.usage}

    ## Contributing
    If you want to know about contributing to the repo:
    ${data.contribution}

    ## Tests
    To run the tests, run the following command:
    ${data.test}

    ## Questions?
    If there are any questioins please refer to this email or leave a comment in the repository
    Email: ${data.email}

    Github Website: https://github.com/${data.username}/
    `;
    
    };
    
    module.exports = generatePage;