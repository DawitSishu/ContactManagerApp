const express = require('express');
const {
    getContact,
    updateContact,
    createContact,
    deleteContact,
    getContacts
} = require('../controllers/contactController');
const userAuthorizationHandler = require('../middleware/userAuthorizationHandler');

//configure the router
const router = express.Router()

router.use(userAuthorizationHandler)

router.route('/')
    .get( getContacts)
    .post(createContact)



router.route('/:id')
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact)






module.exports = router;