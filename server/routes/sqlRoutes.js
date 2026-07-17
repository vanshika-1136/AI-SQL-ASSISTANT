const express = require("express");

const router = express.Router();

const { generateQuery } = require("../controllers/sqlController");

router.post("/generate-sql", generateQuery);

module.exports = router;