const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const commentController = require('../controllers/commentController');
const { checkIfLoginedIn } = require('../middleware/checkLoginmiddleware');

// comment User Route   

router.post('/',[
    check("body", "Make sure comment is not empty").exists()
], checkIfLoginedIn, commentController.createComment);

module.exports = router;