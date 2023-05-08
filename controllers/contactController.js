//to resolve errors in the promise
const asyncHandler = require('express-async-handler') 
const Contacts = require('../models/contactModels')




//@desc get all contacts
//@route GET /api/contacts
//@access public
const  getContacts = asyncHandler(async(req,res) =>{
    
    const contactList =   await Contacts.find()
    res.status(200).json(contactList)
});

//@desc get a  single contact
//@route  GET /api/contacts/:id
//@access public
const  getContact = asyncHandler(async(req,res) =>{
    const userContact = await Contacts.findById(req.params.id)
    if(!userContact){
        res.status(404);
        throw new Error(`contact with the id: ${req.params.id} doesn't exist`)
    }
    res.status(200).json(userContact)
});

//@desc create a contact
//@route  POST /api/contacts
//@access public
const  createContact = asyncHandler(async(req,res) =>{

    const {name,email,phone} =  req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const newContact = await Contacts.create({
        name,
        email,
        phone,
    }) 
    res.status(201).json(newContact)
});


//@desc update a contact
//@route PUT /api/contacts/:id
//@access public
const  updateContact = asyncHandler(async(req,res) =>{
    const userContact = await Contacts.findById(req.params.id)
    if(!userContact){
        res.status(404);
        throw new Error(`contact with the id: ${req.params.id} doesn't exist`)
    }
    let updatedContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
        )
    res.status(200).json(updatedContact)
});

//@desc delete a contact
//@route DELETE /api/contacts/:id
//@access public
const  deleteContact = asyncHandler(async(req,res) =>{
    const userContact = await Contacts.findById(req.params.id)
    if(!userContact){
        res.status(404);
        throw new Error(`contact with the id: ${req.params.id} doesn't exist`)
    }
    let x = await Contacts.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message : `contact deleted succcessfully ${x}`
    })
});




module.exports = {
    getContacts,
    updateContact,
    createContact,
    deleteContact,
    getContact
}