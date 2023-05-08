const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler')


// try {
//     mongoose.connect(uri);
//  } catch (error) {
//    handleError(error);
//  }
//  mongoose.connection.on('connected', () => {
//    console.log('connected'); //logs 1
//  });

const connectToDb = asyncHandler(async() =>{
    const connection = await mongoose.connect(process.env.DB_URI);
    console.log('DB connected');
})

module.exports = connectToDb;