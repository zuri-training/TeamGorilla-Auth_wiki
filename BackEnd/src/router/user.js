const router = require('express').Router();

// Import the router controller
const userController = require('../controllers/userController');

// Login User Route
router
    .post('/register', userController.createUser)
    .post('/comment', auth,userController.createComment)



module.exports = router;