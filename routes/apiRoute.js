const express = require("express");
const router = express.Router();

const {users, cheese} = require("../data");

router.get("/", (req, res)=>{
    res.status(200).send({message: "Health is good !!! "});
})

router.post("/register", (req, res, next)=>{
    console.log(req.url);
    // add new user;

})


module.exports = router;