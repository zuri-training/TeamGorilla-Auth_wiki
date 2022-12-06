/**
 * 1. Create a connection function for mongoDB
 * 2. Start the cloud mongodb connection
*/

const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI } = process.env

// Creating connection function
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

        console.log("MongoDB Connected...")
    } catch (error) {
        console.error(error.message)

        //Exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;