const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const userAuthorizationHandler = require("../middleware/userAuthorizationHandler");
const router =  express.Router();



router.post('/register', registerUser);


router.post('/login', loginUser);


router.get('/current', userAuthorizationHandler, currentUser);




module.exports = router