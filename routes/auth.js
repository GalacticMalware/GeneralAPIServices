const express = require("express");
const router = express.Router();
const {login, register} = require('../controllers/authController');
const {validatorLogin, validatorRegister} = require('../validators/auth');

router.post("/register",validatorRegister, register);
router.post("/login", validatorLogin, login);

module.exports = router;