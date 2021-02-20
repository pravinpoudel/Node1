const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();

let port = process.env.port || 3099;

app.use(router);

router.get("/", (req, res)=>{
    console.log("hello world");
    res.sendFile('index.html', {root: path.join( __dirname, '/public/')})
});


app.use(express.static('public', {index: false}));

app.listen(port, (err)=> {
    if(err){
        return(console.log("i am listening"));
    }
    console.log(`listening to the port ${port}`);
});