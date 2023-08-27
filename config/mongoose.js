const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ds7198170:B4EvZNY3BXrVjCIW@cluster0.jxmb1zr.mongodb.net/?retryWrites=true&w=majority'); // db url with authentication 

const db = mongoose.connection; // establishing a sever

db.on('error', (err)=>{console.log(`Error occured while connecting to DB ::  mongodb \n Error : ${err}`)}); // incase any error due to server or user

db.once('open', ()=>{console.log(`Successfully connected to the database :: mongodb`)}); // successfull established connection

module.exports = db; // check this out.