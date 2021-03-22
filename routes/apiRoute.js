const express = require("express");
const router = express.Router();
const {emailValidation, passwordValidation, passwordConfirmation} = require("../public/validation");
const {validationResult} =  require("express-validator");

const {users, cheese} = require("../data");

router.get("/", (req, res)=>{
    res.status(200).send({message: "Health is good !!! "});
})

router.post("/register", (req, res, next)=>{
    console.log(req.url);
})

router.post("/user", [emailValidation, passwordValidation, passwordConfirmation], 
            async(req, res, next)=> {
                try{
                    const error = validationResult(req);
                    if(!error.isEmpty()){
                       res.send(error.array());
                    }
                    else{
                        res.status(200).send(`sucessfully loggedin ${req.body.data.email} and password: ${req.body.data.password}`);
                    }
                }
                catch(err){
                    console.log(`we have error ${err}`)
                }
});

module.exports = router;