
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/database/db");

// Initialize Express
const app = express();

const { json } = require("express");
const userRoutes = require('./src/routes/userRoutes');
const docRoutes = require("./src/routes/docRoutes");
const commentRoutes = require("./src/routes/commentRoutes");
const uri = process.env.MONGODB_URI;


// connect to database
connectDB();


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}));


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