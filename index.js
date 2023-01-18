

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Engineer = require('./lib/Engineer');
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employeeArray = [];



const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Whats the managers name?"
      },
      {
        type: "input",
        name: "id",
        message: "Whats their employee id?"
      },
      {
        type: "input",
        name: "email",
        message: "Whats their email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?"
      }
    ])
    .then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      employeeArray.push(manager);
      promptAddTeamMember();
    });
};



const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Engineer?"
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee id?"
      },
      {
        type: "input",
        name: "email",
        message: "Whats their email?"
      },
      {
        type: "input",
        name: "github",
        message: "Whats their Github?"
      }
    ])
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employeeArray.push(engineer);
      promptAddTeamMember();
    });
};


const promptIntern = () => {
  return inquirer
    .prompt([
      
        {
          type: "input",
          name: "name",
          message: "What is the name of the Intern?"
        },
        {
          type: "input",
          name: "id",
          message: "What is their employee id?"
        },
        {
          type: "input",
          name: "email",
          message: "Whats their email?"
        },
        {
          type: "input",
          name: "school",
          message: "What school do they attend?"
        }
      ])
      .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern);
        promptAddTeamMember();
      });
};

const promptAddTeamMember = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Finish building team"]
      }
    ])
    .then(answers => {
      switch (answers.memberType) {
        case "Engineer":
          return promptEngineer();
        case "Intern":
          return promptIntern();
        default:
          return generateHTML();
      }
    });
};


const generateHTML = () => {
  let html = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Team Profile</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-success text-white">
          <div class="container-fluid">
            <a class="navbar-brand">Team Profile</a>
          </div>
        </nav>
      </div>
      <div class="row">`;
  employeeArray.forEach(employee => {
    html += `
        <div class="col-3">
          <div class="card">
            <div class="card-header">
              <h2>${employee.name}</h2>
              <h5>${employee.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush p-3">
              <li class="list-group-item">ID: ${employee.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>`;
    if (employee.getRole() === "Manager") {
      html += `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
    } else if (employee.getRole() === "Engineer") {
      html += `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>`;
    } else if (employee.getRole() === "Intern") {
      html += `<li class="list-group-item">School: ${employee.school}</li>`;
    }
    html += `</ul>
          </div>
        </div>`;
  });
  html += `
      </div>
    </body>
  </html>`;

  fs.writeFileSync(path.join(__dirname, "team.html"), html);
  console.log("Checkout the file named team.html");
};
console.log("Welcome to the team builder");
promptManager();
