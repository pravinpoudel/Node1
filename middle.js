
const sup = (req, res, next)=>{
    // middleware gets all the things same as the router i.e request, response. 
    console.log(req.method);
    console.log("i am sup");
    // this is to pass to next middleware
    next();
}

const sup2 = (req, res, next)=>{
    console.log("i am sup2");
    next();
}

module.exports = {sup, sup2}
