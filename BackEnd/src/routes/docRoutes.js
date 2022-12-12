const { getAllDocs, getSingleDoc, downloadDoc } = require("../controllers/docController");
const express = require("express");
const router = express.Router();


router.get('/', getAllDocs);
router.get('/:id', getSingleDoc);
router.get('/download/:id', downloadDoc)


module.exports = router