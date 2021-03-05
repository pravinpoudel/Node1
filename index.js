"use strict";
const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const thing = require("./routes/things");

// const { response } = require("express");


// here we create an object called app that is gonna be our webserver
const app = express();
app.use(express.json());

const router = express.Router();

// anything that begins with things should go to things file
app.use('/things', thing);
// handle endpoints that start with things with things


// load view engine
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "pug");


const {sup, sup2} = require("./middle");

let port = process.env.port || 3000;

let acceptedOrigin = ["http://www.example1.com", "http://www.example2.com",]

let corsOption = { origin: function corsCheck(origin, callback){


    let originState, error;

    if( acceptedOrigin.indexOf(origin) !== -1 || !origin){

        originState = {origin: true}
        error = null;
    }

    else{

        originState ={origin: false}
        error = new Error("this origin isnot allowded")
    }

    callback( error, originState);
}
}


// for all request
// app.use(sup);

app.use(router);

// ---------------------------------------------------------------------------
// adding middleware after the route will call this middleware to this specific condition in a order they appear and 
// then the request handler is called at last


router.get("/",  cors(corsOption), sup, sup2, (req, res)=>{

    res.render('index');
    end();
    console.log(req.url);
    console.log("root url is called");
    // sendfile demand absolute path so for that we have option with root
    res.sendFile('index.html', {root: path.join( __dirname, '/public/')});
    //note that we are not providing absolute path by our own or with __dirname concatinated with public 
    // because this may conflict with the convention of front slash and back slash so here path.join() come handy

});

// Redirect OLD url to NEW ------------------------------------------------------------

router.get("/old", (req, res)=>{

    res.redirect(302, "/new");

});

router.get("/new", (req, res)=>{

    res.send("<h1> I AM NEW </h1>");
});

// -------------------------------------------------------------------------------------

// here since we have option with false indexing mean that it wont take index.html as a default file for 404 in static serve also
app.use(express.static('public', {index: false}));

app.listen(port, (err)=> {
    if(err){
        return(console.log("i am listening"));
    }
    console.log(`listening to the port ${port}`);
});