const {check} = require('express-validator');
const validatorResult = require('../utils/handleRValidator');

const validatorLogin = [
    check('Email').exists().notEmpty().isString().isEmail(),
    check('Password').exists().notEmpty().isString().isLength({min: 7}),
    check('IP').exists().notEmpty().isString(),
    (req, res, next) => validatorResult(req, res, next)
];

const validatorRegister = [
    check('Name').exists().notEmpty().isString(),
    check('LastName').exists().notEmpty().isString(),
    check('Email').exists().notEmpty().isString().isEmail(),
    check('Password').exists().notEmpty().isString().isLength({min: 7}),
    check('Status').exists().notEmpty().isBoolean(),
    check('Terms').exists().notEmpty().isBoolean(),
    check('IP').exists().notEmpty().isString(),
    (req, res, next) => validatorResult(req, res, next)
];

module.exports = {validatorLogin, validatorRegister}