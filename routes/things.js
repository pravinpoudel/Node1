'use strict';
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
let saltRound = 13;


const authMiddleware = (req, res, next)=>{
    console.log("authenticiation is called");
    next();
}

router.use(authMiddleware);

router.get("/", (req, resp)=>{

    console.log("i am inside root of this router-thing");
});

router.post("/register", async(req, res, next)=> {
    try{
        console.log("i am herer")
        console.log(req.body.data);
        let user = {
            _id: Date.now(),
            name: req.body.data.name,
            email:req.body.data.email,
            password: await bcrypt.hash(req.body.data.password, saltRound),
            age:req.body.data.age,
            role:req.body.data.role
        }

        await res.status(201).send(user);
    }
    catch(err){
        console.log(`${err} error happened`)
    }
}
);


router.post("/login", async(req, res, next)=>{
    
    try{
        //check if that email exist otherwise there is no point of hashing submitted password
        let userMatched = true;
        if(userMatched){
    
            let submittedPassword = req.body.data.password; 
            let savedPassword = await bcrypt.hash('Pulchowk@123', saltRound);
            let passwordMatched = bcrypt.compare(submittedPassword, savedPassword);
    
            if(passwordMatched){
    
                console.log(" party !! do login");
                res.status(200).send({status:200, message:"guest is our user"}) 
            }
    
            else{
                console.log("sorry we dont recognize you");
                res.status(401).send({status: 401, error: "Password didn't matched" });
            }
    
        }
        //if that email doesnot match we don't send response within the spot rather we consume
        //same amount time it take for if email matches
        else {
    
            // fake pass
            let fakeHashedPassword = `$2B$${saltRound}passwordisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`;
            bcrypt.compare(submittedPassword, fakeHashedPassword);
            res.status(401).send({status:401, error:"your credential doesnot match with ours"});
        }
            
    }
    catch(err){
        console.log(`${err} is catched`);
    }
});



router.route("/mouse")
    .get((req, res)=>{
        console.log("get all mouse");
    })
    .put((req, res)=>{
        console.log("add new mouse");
    })

router.route("/mouse/:mouseid")
.get((req, res)=>{
    console.log(`i demand the mouse with id ${req.params.mouseid}`);
})
.put((req, res)=>[
    console.log(`i demand to update the mouse with id of ${req.params.mouseid}`)
])

module.exports = router;
