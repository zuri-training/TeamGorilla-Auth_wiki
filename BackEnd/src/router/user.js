const router = require('express').Router();

// Import the router controller
const userController = require('../controllers/userController');

// Login User Route
router
    .post('/register', userController.createUser);


module.exports = router;