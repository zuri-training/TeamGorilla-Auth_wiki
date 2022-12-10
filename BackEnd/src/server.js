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
require("dotenv").config();
const connectDB = require("./database/index");

// Initialize Express
const app = express();

const { json } = require("express");
const userRoutes = require('./router/user');
const { PORT } = process.env
const uri = process.env.MONGODB_URI;


// connect to database
connectDB(uri);

app.use(express.json());
app.use('/api', userRoutes);
app.use(express.urlencoded({extended: false}));


//PORT
const PORT = process.env.PORT || 4000;


// Listen to our routes
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});