const { getAllDocs, getSingleDoc } = require("../controllers/docController");
const express = require("express");
const router = express.Router();


router.get('/', getAllDocs);
router.get('/:id', getSingleDoc);


module.exports = router