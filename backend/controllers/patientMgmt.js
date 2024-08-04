const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();



const viewPaxios = require("../axios/viewPatient");
//const deletePaxios = require("../axios/deletePatient");

module.exports = function() {
    const patientQues = [
       "Select option to proceed: ",
       "1. Register New Patient",
       "2. Update Existing Patient Details",
       "3. View Patient Details",
       "4. Delete Patient",
       "5. Back" 
    ];

    patientQues.forEach((val) => {
        console.log(val);
    });


    const question = [
        {
            type: String,
            name: "option",
            message: "Enter Choice: "
        },
    ];

    const functionalities = require("./functionalities");
    const registerPaxios = require("../axios/registerPatient");
    const updatePaxios = require("../axios/updatePatient");
    


    function checkChoice(answers) {
        switch (answers.option) {
          case "1":
            registerPaxios();
            break;
    
          case "2":
           updatePaxios();
            break;
    
          case "3":
            viewPaxios();
            break;
    
          case "4":
            deletePaxios();
            break;
          
          case "5":
          functionalities();
    
        }
      }

      prompt(question).then((answer) => {
        checkChoice(answer);
      })
}