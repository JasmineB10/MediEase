const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

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
            console.log(res.data.message, "\n");
            if (res.data.success === "true") {
                functionality();
            }
        } catch (error) {
            console.log("error during login request");
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    }

    prompt(loginQues).then((answers) => {
        loginRequest(answers);
    });
};
