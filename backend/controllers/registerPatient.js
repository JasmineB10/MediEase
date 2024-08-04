const Patient = require("../models/patientSchema");

module.exports = async function(req, res) {
    try {
        const {
            firstname,
            lastname,
            dob,
            gender,
            phone,
            email,
            address,
            history,
            allergy,
            medication,
            insurance = { provider: 'None', policyNumber: 'None' } 
        } = req.body;

        if (!firstname || !lastname || !dob || !gender || !phone || !email || !address) {
            return res.status(400).json({ error: "Please fill all the fields properly." });
        }

        const userExist = await Patient.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const patient = new Patient({
            firstname,
            lastname,
            dob,
            gender,
            phone,
            email,
            address,
            history,
            allergy,
            medication,
            insurance
        });

        const registerPatient = await patient.save();

        if (registerPatient) {
            return res.status(201).json({
                success: true,
                message: "Patient registered successfully",
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Patient registration failed."
            });
        }

    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
    }
};
