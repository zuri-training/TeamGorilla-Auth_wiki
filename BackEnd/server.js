const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/database/db");
const session = require('express-session');

// Initialize Express
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const docRoutes = require("./src/routes/docRoutes");
const commentRoutes = require("./src/routes/commentRoutes");


// connect to database
connectDB();


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(session({
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookies: {
        maxAge: process.env.COOKIES_AGE,
        
    }
}));

//routes
app.use('/api/user', userRoutes);
app.use('/api/docs', docRoutes);
app.use('/api/comment', commentRoutes);


//PORT
const PORT = process.env.PORT || 8000;


// Listen to our routes
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});