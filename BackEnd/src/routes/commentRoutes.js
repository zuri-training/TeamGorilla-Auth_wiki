const { createComment, commentReaction } =  require('../controllers/commentController');
const { check } = require("express-validator");
const express = require("express");

const router = express.Router();

const { authenticate } = require("../middleware/authMiddleware");

// comment User Routes
router.route('/:id')
        .patch(authenticate, commentReaction)
        .post([check("body", "Make sure comment is not empty").exists()], authenticate, createComment);


module.exports = router;