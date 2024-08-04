const jwt = require("jsonwebtoken");
const adminSchema = require("../models/adminSchema");
const SECRET_KEY = require("../key");

const Authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const verifyUser = jwt.verify(token, SECRET_KEY);

        const authUser = await adminSchema.findOne({ _id: verifyUser._id });
        if (!authUser) {
            throw new Error("User not found");
        }

        req.adminID = authUser._id;
        next();
    } catch (err) {
        let errorMessage = "Unauthorized: Invalid token";
        if (err.name === "TokenExpiredError") {
            errorMessage = "Unauthorized: Token expired";
        } else if (err.name === "JsonWebTokenError") {
            errorMessage = "Unauthorized: Invalid token";
        }
        res.status(401).json({ error: errorMessage });
        console.log("Error during authentication", err);
    }
};

module.exports = Authenticate;
