const bcrypt = require("bcrypt");
const Admin = require("../models/adminSchema");

module.exports = async (req, res) => {
    try {
        //console.log("Request received in controllers");

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

        const loginAdmin = await Admin.findOne({ username: username });

        if (!loginAdmin) {
            return res.status(404).json({ error: "Admin not registered" });
        }

        const isMatch = await bcrypt.compare(password, loginAdmin.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = await loginAdmin.generateAuthToken();

        return res.json({ success: "true", message: "Admin has logged in successfully", token });
    } catch (err) {
        console.error('Error during login process:', err);
        return res.status(500).json({ error: "Internal server error" });
    }
};
