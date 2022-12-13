const { createComment, commentReaction } =  require('../controllers/commentController');

const express = require("express");

const router = express.Router();

const { authenticate } = require("../middleware/authMiddleware");

// comment User Routes
router.post('/comment', createComment);
router.patch('/:id', authenticate, commentReaction);

module.exports = router