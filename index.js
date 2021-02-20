"use strict";
const express = require("express");
const path = require("path");

// here we create an object called app that is gonna be our webserver
const app = express();
const router = express.Router();

let port = process.env.port || 3000;

app.use(router);

router.get("/", (req, res)=>{
    console.log("hello world");

    // sendfile demand absolute path so for that we have option with root
    res.sendFile('index.html', {root: path.join( __dirname, '/public/')});
    //note that we are not providing absolute path by our own or with __dirname concatinated with public 
    // because this may conflict with the convention of front slash and back slash so here path.join() come handy

});

// here since we have option with false indexing mean that it wont take index.html as a default file for 404 in static serve also
app.use(express.static('public', {index: false}));

app.listen(port, (err)=> {
    if(err){
        return(console.log("i am listening"));
    }
    console.log(`listening to the port ${port}`);
});