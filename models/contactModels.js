const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user_id : {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true,"must include the owner of the contact"],
        ref: "Users"
    },
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