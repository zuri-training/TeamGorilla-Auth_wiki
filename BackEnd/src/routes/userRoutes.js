
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { createDownload, getNumberDownloads, getAllComments, createComment, getAllCommentsNumber, } = require("../controllers/forNow/forNowController");
const {loginUser, getAllUsers, registerUser, verifyAccount, getUser, updateUser, forgotPassword, resetPassword } = require('../controllers/userController');
const {authenticate} = require('../middleware/authMiddleware')

// Login User Route
router.post('/login', [
        check("email", "Please enter a valid email address").isEmail(),
        check("password", "valid password required").exists()
    ], loginUser);

router.post('/register', [
    check("firstName", "Your firstname must be 3+ characters long").exists().isLength({ min: 3}),
    check("lastName", "Your lastname must be 3+ characters long").exists().isLength({ min: 3}),
    check("email", "Please enter a valid email address").exists().isEmail(),
    check("password", "Password required and must be a minimum of 8 characters").exists().isLength({ min : 8 })
], registerUser);

router.get('/register/:code', verifyAccount);
// router.get('/me', getAllUsers);
router.get('/me', authenticate , getUser)
router.patch('/me', authenticate, updateUser);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);
router.get('/download', authenticate , createDownload);
router.get('/comments', getAllComments);
router.get('/comments/number', getAllCommentsNumber)
router.post('/comments',[check("comment").exists().isLength({ min : 8 })], authenticate, createComment);
router.get('/download/number', getNumberDownloads)


module.exports = router;