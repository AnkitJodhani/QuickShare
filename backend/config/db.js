const mongoose = require('mongoose');

const connectDB = ()=>{
    // database connection
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDB;