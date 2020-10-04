// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {type: "input",
        name: "name",
        message: "What is your name?",
        },

        {type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },

        {type: "input",
            name: "email",
            message: "What is your e-mail address?",
        },

        {type: "input",
            name: "title",
            message: "What is your project's name?",
        },

        {type: "input",
            name: "description",
            message: "Please write a short description for your project",
        },

        {
        type: "checkbox",
        name: "license",
        message: "Please select a license from the list below.",
        choices: [
            {
                message: "Apache 2.0",
                key: "Apache 2.0",
                value:
                    "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            },

            {
                message: "MIT",
                key: "MIT",
                value:
                    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            },

            {
                message: "ISC",
                key: "ISC",
                value:
                    "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
            },

            {
                message: "IBM Public license",
                key: "IBM Public license",
                value:
                    "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
            },

            {
                message: "Mozilla Public license",
                key: "Mozilla Public license",
                value:
                    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            },

            {
                message: "Artistic license 2.0",
                key: "Artistic license 2.0",
                value:
                    "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
            }
        ]
    },

    {type: "input",
        name: "install",
        message: "What command installs the dependencies?",
    },

    {type: "input",
        name: "test",
        message: "What command starts the test?",
    },

    {type: "input",
        name: "message",
        message: "What message does the user need to see before using the repo?",
    },

    {type: "input",
        name: "contribution",
        message: "What does the user need to know in order to contribute to the repo",
    },

    ])

};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
