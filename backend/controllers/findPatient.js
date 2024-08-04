const Patient = require("../models/patientSchema");

module.exports = async function(req, res) {
    try {
        const { phone } = req.body;

        if (!phone) {
            return res.status(400).json({ error: "Please enter a valid phone number" });
        }

        const toFind = await Patient.findOne({ phone: phone });

        if (!toFind) {
            return res.status(400).json({ error: "Patient not found" });
        } else {
            return res.status(200).json({
                success: true,
                message: "Patient found",
                id: toFind._id
            });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ error: err.message });
    }
};
