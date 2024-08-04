const { Command } = require("commander");
const program = new Command();
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const cfonts = require("cfonts");

const registerAxios = require("./axios/adminRegister");
const loginAxios = require("./axios/adminLogin");

const arr = ["1. Sign Up", "2. Log in"];

const homeQues = [
    {
        type: "input",
        name: "value",
        message: "Enter choice 1 or 2",
    },
];

function checkChoice(answer) {
    if(answer.value === "1")
    registerAxios();

    else if(answer.value === "2")
    loginAxios();

    else
    console.log("Wrong choice. Try again");
}

cfonts.say("Welcome!", {
    font: 'chrome',              // define the font face
	align: 'center',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	rawMode: false,             // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
	env: 'node'                 // define the environment cfonts is being executed in
});

cfonts.say("MediEase", {
    font: 'block',              // define the font face
	align: 'center',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	rawMode: false,             // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
	env: 'node'                 // define the environment cfonts is being executed in
});

cfonts.say("Welcome!", {
    font: 'chrome',              // define the font face
	align: 'center',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	rawMode: false,             // define if the line breaks should be CRLF (`\r\n`) over the default LF (`\n`)
	env: 'node'                 // define the environment cfonts is being executed in
});


cfonts.say("Managing Health, Transforming Care", {
    font: "chrome", // define the font face
    align: "center", // define text alignment
    colors: ["system"], // define all colors
    background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: "0", // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: false, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: "node", // define the environment cfonts is being executed in
  });

  program
  .command("start")
  .alias("s")
  .description("home page")
  .action(() => {
    arr.forEach((value) => {
        console.log(value);
    });
    prompt(homeQues).then((answers) => {
        checkChoice(answers);
    });
  });

  program
  .command("register")
  .alias("r")
  .description("User has been registered")
  .action(() => {
    registerAxios();
  });

  program
  .command("login")
  .alias("l")
  .description("User has been logged in")
  .action(() => {
    loginAxios();
  });


  program.parse(process.argv);
