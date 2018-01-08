let express = require("express");
let user = require("../models/userModel");

let router = express.Router();

router.get("/", (req, res) => {
    
});

router.post("/signup", (req, res) => {
    var obj = req.body;
    var model = new user(obj);
    // model.save(function(err) {
    //     if (err) {
    //         res.send("error");
    //         return;
    //     }
    //     res.send("created");
    // });
})

module.exports = router;