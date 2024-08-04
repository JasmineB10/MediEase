const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const axios = require("axios");
module.exports = function() {
    const ques1 = [
        {
            type: "input",
            name: "phone",
            message: "Enter patient's phone no.",
        },
    ];


    const updateOption = (id) => {
        
        const arr = [
            "1. Update phone no.",
            "2. Update email",
            "3. Update address",
            "4. Update allergy",
            "5. Update medication",
        ]

        arr.forEach(val => {
            console.log(val);
        });

        const question = [
            {
                type: "String",
                name: "option",
                message: "Enter choice",
            },
            {
                type: "String",
                name: "updatedVal",
                message: "Enter new Value",
            },
        ];

        prompt(question).then((answers) => {
           updatePatient(answers,id);
        } )
    }



    async function findPatient(ans) {
        const config = {
            method: "post",
            url: "http://localhost:3000/api/findP",
            data: ans,
        };
        console.log("Sending request to find patient:", ans);

        try{

            let res = await axios(config);
            console.log("Response from findP:", res.data);

            if (res.data.success === true) {
             console.log(res.data.message, "\n");
             updateOption(res.data.id);
           }
           else
           console.log("Patient not found.");
        }

        catch(err)
        {
            console.log("Error in finding patient",err);
        }


    }

    async function updatePatient(answers,id)
    {
        const patientMgmt = require("../controllers/patientMgmt");

        const config = {
            method: "put",
            url: "http://localhost:3000/api/updateP",
            data: {...answers, id: id}
        };

        console.log("sending request to update patient.");

        let res = await axios(config);
        console.log("response from updateP ", res.data);

        if (res.data.success === true)
        {
            console.log(res.data.message, "\n");
            patientMgmt();
        }
        


    }

    prompt(ques1).then((ans1) => {
        findPatient(ans1);
    });
};
