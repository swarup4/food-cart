let express = require("express");
let router = express.Router();
let path = require("path");

let loginController = require("../controllers/loginController.js");

router.use("/api/login", loginController);

module.exports = router;