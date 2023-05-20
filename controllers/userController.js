//to resolve errors in the promise
const asyncHandler = require('express-async-handler')
const Users  =  require('../models/userModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




//@desc register a user
//@route POST /api/users/register
//@access public
const  registerUser = asyncHandler(async (req,res) =>{
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("all fields are required")
    }
    const anotherUser = await Users.find({email})
    if(anotherUser.length > 0){
        console.log(anotherUser)
        res.status(400)
        throw new Error("email is already taken try with a different one")
    }
    let hashedPassword = await bcrypt.hash(password,10);
    const newUser = await Users.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log(newUser)
    res.status(201).json({_id:newUser._id, email:newUser.email, username:newUser.username })

});


//@desc login a user
//@route POST /api/users/login
//@access public
const  loginUser = asyncHandler(async (req,res) =>{
   const {email,password} = req.body;
   if(!email || !password) {
    res.status(400);
    throw new Error("all fields are required")
    } 
    const user = await Users.find({email});
    if(user.length == 0){
        res.status(404);
        throw new Error("email or password is incorrect");
    } 
    const correctPassword = await bcrypt.compare(password,user[0].password);
    if(!correctPassword){
        res.status(404);
        throw new Error("email or password is incorrect");
    }
    const token = jwt.sign(
      {  user:{
            _id: user[0].id,
            email: user[0].email,
            username: user[0].username
        },
    },
        process.env.SECRET_KEY,
        {expiresIn : "24h"}
    )
    res.status(200).json({
       token
    })

});

//@desc current logged in  user info
//@route POST /api/users/current
//@access private
const  currentUser = asyncHandler(async (req,res) =>{
    res.json({msg:"curent user"})
});



module.exports = {
    registerUser,
    loginUser,
    currentUser
}