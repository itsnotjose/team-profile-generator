const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
inquirer.prompt([
 {
type: 'input',
name: 'mangerName',
message: 'Whats the mangers name'
 },
 {
type: 'input',
name: 'mangerId',
message: 'Whats their employee id?'
 },
 {
    type: 'input',
name: 'mangerEmail',
message: 'Whats their email?'
 },
 {
    type: 'input',
name: 'mangerOfficeNumber',
message: 'What is the office number?'
 },
 {
type: 'list',
name: 'employee',
message: 'What type of empolyee are you adding?',
choices: ['Engineer','Intern','Build team']
}
])
.then((answers) => {
  if (answers.employee === 'Engineer') {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'What is the name of the Engineer?',
        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'What is their employee id?',
        },
        {
          type: 'input',
          name: 'engineerGmail',
          message: 'Whats their email?',
        },
        {
          type: 'input',
          name: 'engineerGitHub',
          message: 'Whats their Github?',
        }
      ])
      .then((answers) => {
        // code to handle the engineer name
      });
  } else if (answers.employee === 'Intern') {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'What is the name of the Intern?',
        },
        {
          type: 'input',
          name: 'internId',
          message: 'What is their employee id?',
        },
        {
          type: 'input',
          name: 'internGmail',
          message: 'Whats their email?',
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'What school do they attend?',
        },
      ])
      .then((answers) => {
        // code to handle the intern name
      });
  } else {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'buildTeamName',
          message: 'What is the name of the Build team member?',
        },
      ])
      .then((answers) => {
        // code to handle the build team name
      });
  }
});
