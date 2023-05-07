const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 5000;


//import the separated router
app.use('/api/contacts', require('./routes/contactRoutes'))











app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
