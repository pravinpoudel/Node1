'use strict';
const express = require("express");

const router = express.Router();


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
        await res.send(req.body.data);
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
