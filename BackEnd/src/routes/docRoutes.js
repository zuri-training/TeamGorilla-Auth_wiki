const { getAllDocs, getSingleDoc } = require("../controllers/docController");
const express = require("express");
const router = express.Router();


router.get('/', getAllDocs);


module.exports = router