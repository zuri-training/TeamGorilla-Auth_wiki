const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const commentController = require('../controllers/commentController');

// comment User Route   
router.post('/comment', commentController.createComment)

module.exports = router