const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        // database connection
        const status = await mongoose.connect(process.env.MONGO_URL)
        if (!status) {
            return false
        }
        else {
            console.log("Database connected successfully");
            return true
        }

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;