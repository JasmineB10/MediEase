const express = require("express");
const router = express.Router();
const Authenticate = require("../middlewares/authenticate");

const registerController = require("../controllers/adminRegister");
const loginController = require("../controllers/adminLogin");
const registerPatientController = require("../controllers/registerPatient");
const findPatientController = require("../controllers/findPatient");
const updatePatientController = require("../controllers/updatePatient");

router.use(express.json());

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/registerP", Authenticate, registerPatientController);
router.post("/findP", Authenticate, findPatientController);
router.put("/updateP", Authenticate, updatePatientController);


module.exports = router;
