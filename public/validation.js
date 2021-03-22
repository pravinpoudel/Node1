const {check} = require("express-validator");

const emailValidation = check("email").trim().isEmail().withMessage("input valid email").escape().normalizeEmail();

const passwordValidation = check(["password", "passwordConfirmation"]).trim().notEmpty()
                    .matches("[A-Z]").withMessage("Atleast one uppercase letter required")
                    .matches("[0-9]").withMessage("Atleasr one number required")
                    .isLength({min:6}).withMessage("minimum six digit required");

const passwordConfirmation = check("passwordConfirmation").custom((value, {req})=>{
        if(value !== req.body.password){
            throw new Error("password didn't matched");
        }
        return 1;
});

module.exports = {emailValidation, passwordValidation, passwordConfirmation};