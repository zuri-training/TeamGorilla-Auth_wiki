const router = require('express').Router();
const userController = require('../controllers/userController');


// Register User Route
router
    .route('/register')
    .post(userController.createUser);


module.exports = router;