const express = require("express");
const { convertStringToInteger } = require("../controllers/stringController");
const router = express.Router();

router.route("/convert").post(convertStringToInteger);

module.exports = router;
