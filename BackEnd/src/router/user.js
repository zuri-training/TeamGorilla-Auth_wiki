const router = require('express').Router();
const userController = require('../controllers/userController');


// Register User Route
router
    .route('/register')
    .post(userController.createUser);

// Login User Route   
router
    .post('/register', userController.createUser)
    .post('/comment', auth,userController.createComment)

    .route('/login')
    .post(userController.userLogin);


module.exports = router;