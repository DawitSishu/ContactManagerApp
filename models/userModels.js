const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
   
    username: {
        type : String,
        required : [true, "must specify a username"]
    },
    email: {
        type: String,
        required : [true,"must specify a valid email"],
        unique : [true,"user with that eamil already exists"]
    },
    password : {
        type: String,
        required: [true, "must specify a password"]
    }
})


module.exports = mongoose.model("Users", UserSchema);