const { getAllDocs, getSingleDoc, downloadDoc, docReaction } = require("../controllers/docController");

const {authenticate} = require('../middleware/authMiddleware');

const express = require("express");
const router = express.Router();


router.get('/', getAllDocs);
router.get('/:id', getSingleDoc);
router.get('/download/:id', authenticate,  downloadDoc);
// router.patch('/:id', authenticate, docReaction);


module.exports = router