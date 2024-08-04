const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = require("../key");

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    cPassword: { //confirm password
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Admin"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{
    timestamps: true,
});
 

adminSchema.pre("save", async function (next) {
    if(this.isModified("password"))
    {
        let newPassword = this.password;
        this.password = await bcrypt.hash(newPassword, 12);
        let newCpassword = this.cPassword;
        this.cPassword = await bcrypt.hash(newCpassword, 12);
    }

    next();
});

adminSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id: this._id}, SECRET_KEY);
        console.log("Generated Jwt", token);
        return token;
    }
    catch(err)
    {
        console.error("error in generating token", err);
    }
};

const Admin = mongoose.model("admins", adminSchema);
module.exports = Admin;

