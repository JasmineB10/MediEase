const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const fs = require("fs");
const axios = require("axios");
const functionality = require("../controllers/functionalities");

module.exports = function() {

    const loginQues = [
        {
            type: "input",
            name: "username",
            message: "Enter your username"
        },
        {
            type : "input",
            name: "password",
            message: "Enter your password"
        }
    ];

    async function loginRequest(answers) {
        const config = {
            method: "post",
            url : "http://localhost:3000/api/login",
            data: answers,
        };

        try {
            let res = await axios(config);
            fs.writeFile("token.txt", res.data.token, function(err) {
                if(err)
                throw err;
            })
            console.log(res.data.message, "\n");
            if (res.data.success === "true") {
                functionality();
            }
        } catch (error) {
            console.log("error during login request");
        }
    }

    prompt(loginQues).then((answers) => {
        loginRequest(answers);
    });
};
