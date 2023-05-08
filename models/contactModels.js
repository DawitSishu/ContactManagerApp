const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true, "invalid name, try again correctly!!"]
    },
    email: {
        type : String,
        required : [true, "invalid email, try again correctly!!"]
    },
    phone: {
        type : String,
        required : [true, "invalid phone, try again correctly!!"]
    },

},{
    timestamps:  true,
})

module.exports = mongoose.model("Contacts",ContactSchema);