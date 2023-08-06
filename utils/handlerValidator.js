const { validationResult } = require('express-validator');

module.exports = (req,res,next) => {
    try{
        validationResult(req).throw();
        return next();
    }catch(e){
        res.status(403).json({message:'PARAMS_ERROR',data:e.array()});
    };
};