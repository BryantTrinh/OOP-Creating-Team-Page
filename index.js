const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');

const path = require('path');

const fs = require('fs');

// resolve is like returning a Promise object that is resolved with a given value.

const DIST_DIR = path.resolve(__dirname, 'dist');

// using team.html, we create it in the DIST_DIR

const distPath = path.join(DIST_DIR, 'team.html');

// render page-template after creating fle in DIST_DIR.
const render = require('./src/page-template.js');

// create array for teamMembers and their id

const teamMembers = [];
const idArray = [];

// Use console.log to explain usage

console.log('\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

// create function for menu and function inside of menu to createManager

function appMenu() {
  function createManager() {
    console.log('Build your team');
    // use inquirer for prompts
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "what is the Manager's name?",
          // create validation for user input
          valdate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'You forgot to enter at least one character, please try again!';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the Manager's ID?",
          // add validation for input
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'You entered an input of 0, please enter a positive number greater than zero!';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the manager's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'You did not enter in a valid email, please try again.';
        },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a number greater than zero';
          },
        },
      ])
      // if this all returns true, then we create a const manager object and we need to push it to teamMembers and push their id to idArray.
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

// Next create function to createTeam using inquirer prompt

function createTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'memberChoice',
        message: 'What type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "Do not add additional members",
        ],
      },
    ])
    // then statement for userChoice, using switch and break
    .then((userChoice) => {
      switch (userChoice.memberChoice) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
          // use default for not adding additional members.
        default:
          buildTeam();
      }
    });
}

// next create addEngineer function using inquirer prompt

function addEngineer() {
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
            return 'You did not type a character, please try again.';
          },
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the engineer's id?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          // check to see if Id is already in the array
          if (idArray.includes(answer)) {
            return 'This ID is already taken, try again.';
          } else {
            return true;
          }
        }
        return 'Please enter a number greater than zero'; 
    },
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the engineer's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address';
      },
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is the engineer's Github username?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter at least one character.';
      },
    },
  ])
  // then statement to combine engineer's information to teamMembers array and idArray.
  .then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    teamMembers.push(engineer);
    idArray.push(answers.engineerID);
    createTeam();
  });
}

// same thing as the two before, function to add intern, use inquirer

function addIntern() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the intern's name?",
      validate: (answer) => 
      {
        if (answer !== '') {
          return true;
        }
        return 'Enter in at least one character.';
      },
    },
    {
      type: 'input',
      name: 'internId',
      message: "what is the intern's id",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          if (idArray.includes(answer))
          {
            return "This ID is taken, try a different number.";
          } else {
            return true;
          }
        }
        return 'Please enter a number greater than zero.';
      },
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the intern's email address?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if(pass) {
          return true;
        }
        return "Please enter a valid email address.";
      },
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What school did your intern go to?",
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return "Please enter at least one character";
      },
    },
  ])
  // then statement to add all into array
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

// Finally function to buildteam, then create directory if the path doesn't exist.

function buildTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  // callback function to createmanager

  createManager();
}

// callback function appMenu

appMenu();