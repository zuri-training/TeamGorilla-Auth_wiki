const express = require("express");
const router = express.Router();

// Import the router controller
const userController = require("../controllers/userController");

// Login User Route
router 
    .post('/api/login', userController.loginUser);