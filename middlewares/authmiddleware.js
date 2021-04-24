const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_KEY = process.env.JWT_KEY;

const  authenticiation = (req, res, next)=>{

    const authHeader = req.header("Authorization");
    if(authHeader){
        const [bearer, token] = authHeader.split(" ");
        console.log(token)
        if(bearer === "Bearer" && (typeof token !== undefined)){

            try{

                    let payload = jwt.verify(token, JWT_KEY);
                    next();

            }

                catch(err){
                    res.status(401).send({code:123, message:"invalid token"});        
            }
        }

        else{
            res.status(401).send({code:456, message:"you arenot authorized to enter here"})
        }

        }

        else{
         res.status(401).send({code:456, message:"you arenot authorized to enter here"})
            
        }

}

const tokenRegistration = (payload)=>{

    const token = jwt.sign(payload, JWT_KEY);
    return token;

}

module.exports = {authenticiation, tokenRegistration};