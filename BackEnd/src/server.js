/**
 * 1. Creating Express Sever
 * 2. Connecting to MongoDB
 * 3. Initialize Express
 * 4. Initialize express middleware
 * 5. Create a simple get request route
 * 6. Import our routes
 * 7. Listen to our routes 
*/

const express = require("express");

const connectDB = require("./database/index");

const { json } = require("express");

// Import Routes
const authRoute = require("./router/user");

require("dotenv").config();

// connect to database
connectDB();

// Initialize Express
const app = express();

// initialize express middleware
app.use(express.json());
app.use('/api', authRoute);



// Create a simple get request route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Auth_Wiki"
    });
});

//PORT
const PORT = process.env.PORT || 4000;

// Listen to our routes
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});