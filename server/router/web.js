let express = require("express");
let router = express.Router();
let path = require("path");

let abspath = path.join(__dirname + "../../app");

router.get("/", function(req, res, next){
    console.log(abspath);
    res.sendFile(abspath);
});

module.exports = router;