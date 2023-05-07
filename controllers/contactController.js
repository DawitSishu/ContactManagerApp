//@desc get all contacts
//@route GET /api/contacts
//@access public
const  getContacts = (req,res) =>{
    res.status(200).json({
        message : "get all contacts"
    })
}

//@desc get a  single contact
//@route  GET /api/contacts/:id
//@access public
const  getContact = (req,res) =>{
    res.status(200).json({
        message : `get contact for ${req.params.id}`
    })
}

//@desc create a contact
//@route  POST /api/contacts
//@access public
const  createContact = (req,res) =>{
    res.status(201).json({
        message : "create a contact"
    })
}


//@desc update a contact
//@route PUT /api/contacts/:id
//@access public
const  updateContact = (req,res) =>{
    res.status(200).json({
        message : `update contact for ${req.params.id}`
    })
}

//@desc delete a contact
//@route DELETE /api/contacts/:id
//@access public
const  deleteContact = (req,res) =>{
    res.status(200).json({
        message : `delete contact for ${req.params.id}`
    })
}




module.exports = {
    getContacts,
    updateContact,
    createContact,
    deleteContact,
    getContact
}