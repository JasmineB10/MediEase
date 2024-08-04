const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

//const registerAaxios = require("../axios/registerAppointment");
//const updateAaxios = require("../axios/updateAppointment");
//.const deleteAaxios = require("../axios/deleteAppointment");

module.exports = function() {
    const appQues = [
       "Select option to proceed: ",
       "1. Book An appointment",
       "2. Update Existing Appointment",
       "3. Cancel Appointment",
    ];

    appQues.forEach((val) => {
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
            registerAaxios();
            break;
    
          case "2":
           updateAaxios();
            break;
    
          case "3":
            deleteAaxios();
            break;
    
        }
      }

      prompt(question).then((answer) => {
        checkChoice(answer);
      })
}