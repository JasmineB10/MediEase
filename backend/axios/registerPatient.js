const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const axios = require("axios");
const getAdminToken = require("../utility/getAdminToken");

module.exports = function () {
    const patientQues = [
        {
            type: "input",
            name: "firstname",
            message: "enter patient's first name",
        },
        {
            type: "input",
            name: "lastname",
            message: "enter patient's last name",
        },
        {
            type: "input",
            name: "dob",
            message: "enter patient's DOB",
        },
        {
            type: "input",
            name: "gender",
            message: "enter patient's gender",
        },
        {
            type: "input",
            name: "phone",
            message: "enter patient's phone no.",
        },
        {
            type: "input",
            name: "email",
            message: "enter patient's email",
        },
        {
            type: "input",
            name: "address",
            message: "enter patient's address",
        },
        {
            type: "input",
            name: "history",
            message: "enter patient's medical history, if any",
        },
        {
            type: "input",
            name: "allergy",
            message: "enter patient's allergy, if any",
        },
        {
            type: "input",
            name: "medication",
            message: "enter patient's current medication",
        },
        
    ];

    const patientMgmt = require("../controllers/patientMgmt");



    async function createPatient(answers) {

        const adminToken = getAdminToken();
        const config = {
            method: "post",
            url: "http://localhost:3000/api/registerP",
            data: answers,
            headers: {
                Authorization: `Bearer ${adminToken}`
            },
        };
        //console.log("right before response");
        let res = await axios(config);

        

        if(res.data.success === true)
        {
            console.log(res.data.message, "\n");
            patientMgmt();
        }
        else
        {
            console.log(res.data.error, "\n");
        }
    }

    prompt(patientQues).then((answers) => {
        createPatient(answers);
    });
};