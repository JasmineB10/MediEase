const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

//const registerDaxios = require("../axios/registerDoctor");
//const updateDaxios = require("../axios/updateDoctor");
//const viewDaxios = require("../axios/viewDoctor");
//const deleteDaxios = require("../axios/deleteDoctor");

module.exports = function() {
    const doctorQues = [
       "Select option to proceed: ",
       "1. Add a New Doctor",
       "2. Update Existing Doctor Details",
       "3. View Doctor Appointments",
       "4. Delete Doctor" 
    ];

    doctorQues.forEach((val) => {
        console.log(val);
    });


    const question = [
        {
            type: String,
            name: "option",
            message: "Enter Choice: "
        },
    ];

    function checkChoice(answers) {
        switch (answers.option) {
          case "1":
            registerDaxios();
            break;
    
          case "2":
           updateDaxios();
            break;
    
          case "3":
            viewDaxios();
            break;
    
          case "4":
            deleteDaxios();
            break;
    
        }
      }

      prompt(question).then((answer) => {
        checkChoice(answer);
      })
}