const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const axios = require("axios");
const getAdminToken = require("../utility/getAdminToken");

module.exports = function() {
  const ques = [
    {
      type: "input",
      name: "phone",
      message: "Enter patient's phone no.",
    },
  ];

  async function findPatient(ans) {
    const adminToken = getAdminToken();
    const config = {
      method: "post",
      url: "http://localhost:3000/api/findP",
      data: ans,
      headers: {
        Authorization: `Bearer ${adminToken}`
      },
    };
    //console.log("Sending request to find patient:", ans);

    try {
      let res = await axios(config);
      //console.log("Response from findP:", res.data);

      if (res.data.success === true) {
        //console.log(res.data.message, "\n");
        //console.log("Patient ID:", res.data.id);
        viewPatient(res.data.id);
      } else {
        console.log("Patient not found");
      }
    } catch (err) {
      console.log("Error in finding patient", err.response?.data || err.message);
    }
  }

  async function viewPatient(id) {
    const adminToken = getAdminToken();
    const config = {
      method: "get",
      url: `http://localhost:3000/api/viewP/${id}`, // Ensure the URL matches the route definition
      headers: {
        Authorization: `Bearer ${adminToken}`
      },
      withCredentials: true,
    };
    //console.log("Sending request to view patient details:", config);

    try {
      let res = await axios(config);
      displayPatientDetails(res.data);
    } catch (error) {
      console.error('Error fetching patient details:', error.response?.data || error.message);
    }
  }

  function displayPatientDetails(patient) {
      const formattedDetails = `
      Patient Details:
      -----------------
      Insurance:
        Provider: ${patient.insurance.provider}
        Policy Number: ${patient.insurance.policyNumber}

      Personal Information:
        First Name: ${patient.firstname}
        Last Name: ${patient.lastname}
        Date of Birth: ${patient.dob}
        Gender: ${patient.gender}
        Phone: ${patient.phone}
        Email: ${patient.email}
        Address: ${patient.address}

      Medical Information:
        Medical History: ${patient.history || 'N/A'}
        Allergies: ${patient.allergy || 'N/A'}
        Medications: ${patient.medication || 'N/A'}
        Appointments: ${patient.appointments.length ? patient.appointments.join(', ') : 'None'}

      Timestamps:
        Registered At: ${new Date(patient.createdAt).toLocaleString()}
        Last Updated At: ${new Date(patient.updatedAt).toLocaleString()}
      `;

      console.log(formattedDetails);
  }

  prompt(ques).then((ans) => {
    findPatient(ans);
  });
}
