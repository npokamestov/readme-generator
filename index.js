const fs = require('fs');

const inquirer =require('inquirer');

const generatePage = require('./Develop/src/readme-template.js');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {type: "input",
            name: "title",
            message: "What is your project's name?",
        },
        
        {type: "input",
            name: "name",
            message: "What is your name?",
        },

        {type: "list",
            name: "license",
            message: "Please select a license from the list below.",
            choices: [
                "Apache 2.0",
                "MIT",
                "ISC",
                "IBM Public license",
                "Mozilla Public license",
                "Artistic license 2.0"
            ]
        },

        {type: "input",
            name: "description",
            message: "Please write a short description for your project",
        },

        {type: "input",
            name: "install",
            message: "What command installs the dependencies?",
        },

        {type: "input",
        name: "usage",
        message: "What does the user need to know to use this application?",
        },

        {type: "input",
            name: "contribution",
            message: "What does the user need to know in order to contribute to the repo",
        },

        {type: "input",
            name: "test",
            message: "What command starts the test?",
        },

        {type: "input",
            name: "email",
            message: "What is your e-mail address?",
        },

        {type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },

    ])

};

questions().then((answers) => {
    console.log(answers);

    let template = generatePage(answers);
    writeToFile('sample.md', template);
});

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        return console.log('Success! Look at your sample.md in the root folder');
    });
};