const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

// Import the router controller
const userController = require("../controllers/userController");

// Login User Route
router.post('/login', [
        check("email", "Please enter a valid email address").isEmail(),
        check("password", "valid password required").exists()
    ], userController.loginUser);

router.post('/register', [
    check("firstName", "Your firstname must be 3+ characters long").exists().isLength({ min: 3}),
    check("lastName", "Your lastname must be 3+ characters long").exists().isLength({ min: 3}),
    check("email", "Please enter a valid email address").exists().isEmail(),
    check("password", "Password required and must be a minimum of 8 characters").exists().isLength({ min : 6 })
], userController.registerUser);
 
module.exports = router;