const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { error } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const employeeArray = [];

const managerQuestion =[
    "Type Manager Name : ",
    "Type Manager ID : ",
    "Type Manager Email : ",
    "Type Manager Office Number : "
];

const engineerQuestions = [
    "Type Engineer Name : ",
    "Type Engineer ID : ",
    "Type Engineer Email : ",
    "Type Engineer Github Username :"
];

const internQuestions = [
    "Type Intern Name : ",
    "Type Intern ID : ",
    "Type Intern Email : ",
    "Type Intern School : "
];


function createQuestions(questions){
    return [{
        type: 'input',
        message: questions[0],
        name: 'name',
    },

    {
        type: 'input',
        message: questions[1],
        name: 'id',
    },

    {
        type:'input',
        message: questions[2],
        name: 'email',
    },

    {
        type: 'input',
        message: questions[3],
        name: 'extra',

    }

    ]
}

function typeToFile(data){
    fs.writeFile(outputPath, data, (error) => {
        if (err)
        console.log(err);
        else{
            console.log("The file was written successfully");
        }
    });
}




