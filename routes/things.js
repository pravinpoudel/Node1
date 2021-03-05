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



router.post("/item", async(req, res, next)=> {
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
