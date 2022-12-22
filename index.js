const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const render = require('./src/template.js');
const teamMembers = [];
const idArray = [];
const numOnly = /^[1-9]\d*$/
const emailAuth = /\S+@\S+\.\S+/


function Init() {
  function createManager() {
    console.log('Please input your team information... ');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the manager's id?",
          validate: (answer) => {
            const pass = answer.match(numOnly);
            if (pass) {
              return true;
            }
            return 'You must enter a number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the manager's email address?",
          validate: (answer) => {
            const pass = answer.match(emailAuth);
            if (pass) {
              return true;
            }
            return 'Your email address is invalid.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the manager's office number?",
          validate: (answer) => {
            const pass = answer.match(numOnly);
            if (pass) {
              return true;
            }
            return 'You must enter a number greater than zero.';
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'teamChoice',
          message: 'Would you like to add a new member?',
          choices: [
            'Engineer',
            'Intern',
            "There are no more memebers.",
          ],
        },
      ])
      .then((addChoice) => {
        switch (addChoice.teamChoice) {
          case 'Engineer':
            createEngineer();
            break;
          case 'Intern':
            createIntern();
            break;
          default:
            console.log("team created")
            createDir();
        }
      });
  }

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            } 
            else {
              return 'Please enter their name.';
            }
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is the engineer's id number?",
          validate: (answer) => {
            const pass = answer.match(numOnly);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'Please enter a unique Id.';
              } 
              else {
                return true;
              }
            }
            return 'You must enter a number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is your engineer's email?",
          validate: (answer) => {
            const pass = answer.match(emailAuth);
            if (pass) {
              return true;
            }
            return 'Your email address is invalid.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is your engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            else {
              return 'Please enter their Github username.';
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter their name.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's ID number?",
          validate: (answer) => {
            const pass = answer.match(numOnly);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already taken. Please enter a different ID.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is your intern's email?",
          validate: (answer) => {
            const pass = answer.match(emailAuth);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What school does the intern attend?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter their school.';
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }

  function createDir() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  createManager();
}

Init();
