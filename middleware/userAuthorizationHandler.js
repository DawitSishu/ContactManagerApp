const jwt = require("jsonwebtoken");

const userAuthorizationHandler = (req,res,next) =>{
    let token;
    let authHeader = req.headers.authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err,decodedData) => {
            if(err){
                res.status(401);
                throw new Error('user is not allowed to Access');
            }
            req.user = decodedData.user;
            next()
        } );
    }
    else{
        res.status(401);
                throw new Error('user is not allowed to Access');
    }


}





module.exports = userAuthorizationHandler