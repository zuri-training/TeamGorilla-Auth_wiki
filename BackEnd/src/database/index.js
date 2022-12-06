/**
 * 1. Create a connection function for mongoDB
 * 2. Start the cloud mongodb connection
*/

const mongoose = require("mongoose");
require("dotenv").config();

// Creating connection function
const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });

        console.log("MongoDB Connected...")
    } catch (error) {
        console.error(error.message)

        //Exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;