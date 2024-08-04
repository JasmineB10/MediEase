const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const axios = require("axios");

module.exports = function() {

    const ques = [
        {
            type: "input",
            name: "phone",
            message: "Enter patient's phone no.",
        },
    ];


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
             viewPatient(res.data.id);
           }
           else{
            console.log("Patient not found");
           }
         }

         catch(err)
         {
            console.log("Error in finding patient", err);
         }
            

    }

    async function viewPatient(id)
    {
        const config = {

        }
    }

    prompt(ques).then((ans) => {
        findPatient(ans);
    });
}