const express = require('express');
const {
    getContact,
    updateContact,
    createContact,
    deleteContact,
    getContacts
} = require('../controllers/contactController')

//configure the router
const router = express.Router()



router.route('/')
    .get( getContacts)
    .post(createContact)



router.route('/:id')
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact)






module.exports = router;