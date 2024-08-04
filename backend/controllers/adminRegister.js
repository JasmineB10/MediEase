const EmailValidator = require("email-validator");
const Admin = require("../models/adminSchema");

module.exports = async(req,res) => {
    try{
        const{
            username,
            email,
            password,
            cPassword,
            role,
            createdAt,
            lastLogin
        } = req.body;

        if(!username || !email || !password || !cPassword)
        {
            return res
            .status(404)
            .json({error: "Please fill all the words properly."})
        }

        if(!EmailValidator.validate(email))
        {
            return res.json({error: "Credentials validation error - email"})
        }

        if(password != cPassword)
        {
            return res.json({error : "Credentials validation error - password"})
        }

        const userExist = await Admin.findOne({ email: email});

        if(userExist)
        {
            return res.status(400).json({error: "email already exists"});
        }

        const admin = new Admin({
            username,
            email,
            password,
            cPassword,
            role,
            createdAt,
            lastLogin
        });

        const registerAdmin = await admin.save();
        const loginAdmin = await Admin.findOne({email: email});

        if(registerAdmin)
        {
            const token = await loginAdmin.generateAuthToken();
            return res.status(201).json({
                success: "true",
                message: "admin registered successfully",
                token
            });
        }
        else{
            return res.status(500).json({
                success: "false",
                error: "admin is not registered successfully."
            });
        }
    }
    catch(err) {
        console.log(err);
        return res.status(404).json({error: err});
    }
};

