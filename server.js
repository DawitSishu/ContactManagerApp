const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 5000;



app.use(express.json())

//import the separated router
app.use('/api/contacts', require('./routes/contactRoutes'))

app.use(errorHandler);










app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
