const express = require('express');
const connectToDb = require('./config/connectDb');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config()
var cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
connectToDb()


//import the separated router
app.use('/api/contacts', require('./routes/contactRoutes'))


app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler);



app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})
