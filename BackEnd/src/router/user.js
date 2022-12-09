const router = require('express').Router();
const userController = require('../controllers/userController');


// Register User Route
router
    .route('/register')
    .post(userController.createUser);

// Login User Route   
router
    .route('/login')
    .post(userController.userLogin);


module.exports = router;