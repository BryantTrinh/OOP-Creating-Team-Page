const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('./lib/inquirer');

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
            const true = answer.match(/^[1-9]\d*$/);
            if (true) {
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
            const true = answer.match(/\S+@\S+\.\S+/);
            if (true) {
              return true;
            }
            return 'You did not enter in a valid email, please try again.';
        },
        },
        {
          type: 'input'
          name: 'managerOfficeNumber',
          message: "What is the manager's office number?",
          validate: (answer) => {
            const true = answer.match(/^[1-9]\d*$/);
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



