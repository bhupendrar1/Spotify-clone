const express = require("express");
const authcontroller = require("../controllers/auth.controller");


const router = express.Router();



router.post("/register", authcontroller.RegisterUser);
router.post("/login", authcontroller.LoginUser);



module.exports = router;

