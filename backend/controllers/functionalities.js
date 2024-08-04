const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();


module.exports = function() {
    const services = [
        "Select option to proceed: ",
        "1. Patient Management",
        "2. Appointment Management",
        "3. Doctor Management",
        "4. exit"
    ];
    services.forEach((val) => {
        console.log(val);
    });

    const patientMgmt = require("../controllers/patientMgmt");
    const appointmentMgmt = require("../controllers/appointmentMgmt");
    const doctorMgmt = require("../controllers/doctorMgmt");


    function exit() {
        console.log("Thank You!");
    }

    const question = [
        {
            type: "String",
            name: "option",
            message: "Enter choice",
        }
    ];

    function checkChoice(answers)
    {
        switch(answers.option)
        {
            case "1":
            patientMgmt();
            break;

            case "2":
            appointmentMgmt();
            break;

            case "3":
            doctorMgmt();
            break;

            case "4":
            exit();
            break;
            
        }
    }

    prompt(question).then((ans) => {
        checkChoice(ans);
    });
    
    
};