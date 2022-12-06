/**
 * 1. Creating Express Sever
 * 2. Connecting to MongoDB
 * 3. Initialize Express
 * 4. Initialize express middleware
 * 5. Create a simple get request route
 * 6. Inject our routes
 * 7. Listen to our routes 
*/

const express = require("express");
const connectDB = require("./database/index");
const userRoutes = require('./router/user');
const { PORT } = process.env
const uri = process.env.MONGODB_URI;

require("dotenv").config();

// connect to database
connectDB(uri);

// Initialize Express
const app = express();

// initialize express middlewar
app.use(express.json());
app.use('/api', userRoutes);
app.use(express.urlencoded({extended: false}));

// Create a simple get request route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Auth_Wiki"
    });
});

//PORT
const port = process.env.PORT || PORT;

// Listen to our routes
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});