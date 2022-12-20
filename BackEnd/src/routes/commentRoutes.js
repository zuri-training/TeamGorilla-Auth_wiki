const { createComment, commentReaction } =  require('../controllers/commentController');
const { check } = require("express-validator");
const express = require("express");

const router = express.Router();

const { authenticate } = require("../middleware/authMiddleware");

// comment User Routes
// router.post('/comment', createComment);
// router.patch('/:id', authenticate, commentReaction);


router.post('/:id',[
    check("body", "Make sure comment is not empty").exists()
], authenticate, createComment);

module.exports = router;