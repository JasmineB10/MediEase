const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const axios = require("axios");
const functionality = require("../controllers/functionalities");

module.exports = function() {
const registerQues = [
    {
        type: "input",
        name: "username",
        message: "Enter Your username",
    },
    {
        type: "input",
        name: "email",
        message: "Enter Your email",
    },
    {
        type: "input",
        name: "password",
        message: "Enter Your password",
    },
    {
        type: "input",
        name: "cPassword",
        message: "Confirm Your password",
    },
    {
        type: "input",
        name: "role",
        message: "Enter Your role",
    },
    
];


async function registerRequest(answers) {
    const config = {
        method: "post",
        url: "http://localhost:3000/api/register",
        data: answers,
    };
    let res = await axios(config);

    if(res.data.success === "true") {
        console.log(res.data.message, "\n");
        functionality();
    }
    else{
        console.log(res.data.error);
    }

    }


prompt(registerQues).then((answers) => {
    registerRequest(answers);
})
};
